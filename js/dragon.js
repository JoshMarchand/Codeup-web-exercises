var dragPos = 0;
var stabCounter = 0;
var charge = new Audio("sound/Spaceship_Takeoff-Richard-902554369.mp3");
var blast = new Audio("sound/Grenade-SoundBible.com-2124844747.mp3");
var swoosh = new Audio("sound/Swoosh 1-SoundBible.com-231145780.mp3");
var ballBl = new Audio("sound/Explosion+3.mp3");
// var yourHP = 6;
ballPos = 0;

maxhpset();

function balls() {
    var theFire2 = document.getElementById("bigDragon");
    console.log('hi  from balls');
    theFire2.setAttribute("src", "img/dark head 2.gif");
    theFire2.setAttribute("class", "bigDragonhead");

    // fireballstart();
    // fireballstart2();
    // fireballstart3();
    // setTimeout( function (){
    //     fireballstart4();
    //     fireballstart5();
    //     fireballstart6();
    // }, 1000);


    var it = 0;
    setInterval(function () {
        it++;
        switch (it) {
            case 1:
                fireballstart();
                break;
            case 2:
                fireballstart3();
                break;
            case 3:
                fireballstart2();

                break;
            case 4:
                fireballstart4();
                break;
            case 5:
                fireballstart6();

                break;
            case 6:
                fireballstart5();

                break;

        }
    }, 500);


}

document.getElementById('startBut').addEventListener('click', next);

function next() {
start(1);
//     balls();
}

function start(num) {

    document.getElementById('startBut').removeEventListener('click', start);


    var blastCounter = 0;

    var landed2 = 0;

    document.getElementById('bigDragon').setAttribute('draggable', false);


    var fireballTimer2 = 4;
    var theFire2 = document.getElementById("bigDragon");


    thisRandom2();


    var pizzaFire2 = function (event) {
        // var landed2 = 1;
        // document.getElementById('bigDragon').addEventListener('click', hideDB2, false);


        var fireHitVar2 = setInterval(dragonHit2, 500);

        function dragonHit2() {


            fireballTimer2--;

            console.log(fireballTimer2);

            if (fireballTimer2 == 2) {

                blast.pause();
                blast.currentTime = 0;
                blast.play();
                if (dragPos == yourPos) {
                    yourHP -=2;
                    hearts(yourHP);
                }
                console.log(dragPos + 'dragpos');
                if (dragPos == 0) {
                    theFire2.setAttribute("class", "bigDragonB1");

                }
                if (dragPos == 1) {
                    theFire2.setAttribute("class", "bigDragonB2");

                }
                if (dragPos == 2) {
                    theFire2.setAttribute("class", "bigDragonB3");
                }
                theFire2.setAttribute("src", "img/ultimate blast final 2.gif");


            }


            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "");


                fireballTimer2 = 4;
                console.log(yourHP);

                thisRandom2();
                clearInterval(fireHitVar2);

            }
        }

        // function hideDB2() {
        //     document.getElementById('bigDragon').setAttribute('class', 'fireballhide');
        //     console.log('hide db success');
        //     landed2 = 0;
        // }

    }


    function thisRandom2() {

        charge.play();


        setTimeout(function () {
            charge.pause();
            charge.currentTime = .3;
        }, 2100);

        theFire2.setAttribute("src", "img/blast 1 final.gif");

        // dragPos = Math.floor(Math.random() * (3 - 0 + 0) + 0);
        dragPos = yourPos;


        if (dragPos == 0) {
            theFire2.setAttribute("class", "bigDragonC1");

        }
        if (dragPos == 1) {
            theFire2.setAttribute("class", "bigDragonC2");

        }
        if (dragPos == 2) {
            theFire2.setAttribute("class", "bigDragonC3");

        }


        console.log(dragPos);

        console.log('hi from js this random2');


        var delay2 = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);


        blastCounter++;


        if (blastCounter >= 5){
            charge.pause();
            charge.currentTime = 0;
            blastCounter = 0;
            swordAttack();
        } else {
            setTimeout(function () {

                pizzaFire2();

            }, 2000);
        }




    }

    function swordAttack() {
        var hitPos;


        stabCounter++;

        hitPos = Math.floor(Math.random() * (3 - 0 + 0) + 0);

        if (stabCounter === 10 || stabCounter === 1) {
            theFire2.setAttribute('src', 'img/dragon stab long.gif');
            // stabCounter = 0;
        } else {
            theFire2.setAttribute('src', 'img/dragon stab.gif');
        }

        if (yourPos === 0) {
            // theFire2.setAttribute('src', 'img/dragon stab.gif');
            dragPos = yourPos;
            theFire2.setAttribute('class', 'dstrike0');
        } else if (yourPos === 1) {
            // theFire2.setAttribute('src', 'img/dragon stab.gif');
            dragPos = yourPos;
            theFire2.setAttribute('class', 'dstrike1');
        } else if (yourPos === 2) {
            // theFire2.setAttribute('src', 'img/dragon stab.gif');
            dragPos = yourPos;
            theFire2.setAttribute('class', 'dstrike2');
        }

        if (stabCounter === 10 || stabCounter === 1) {
            // theFire2.setAttribute('src', 'img/dragon stab long.gif');
            // console.log('stab counter ten to pizza fire');
            if (stabCounter === 10){

            stabCounter = 0;
            setTimeout(function () {


                // pizzaFire2();
                balls();
            }, 1800);
            }

            if (stabCounter === 1){


            setTimeout(function () {
                swoosh.pause();
                swoosh.currentTime = 0;
                swoosh.play();
                if (dragPos == yourPos) {
                    yourHP--;
                    hearts(yourHP);
                }
            }, 1200);
            // theFire2.setAttribute('src', 'img/dragon stab.gif');
            setTimeout(function () {
                // console.log('stab counter ten to sword atrtack');
                swordAttack();
            }, 1800);
            }

        } else {
            setTimeout(function () {
                swoosh.pause();
                swoosh.currentTime = 0;
                swoosh.play();
                if (dragPos == yourPos) {
                    yourHP--;
                    hearts(yourHP);
                }
            }, 480);
            // theFire2.setAttribute('src', 'img/dragon stab.gif');
            setTimeout(function () {
                // console.log('stab counter ten to sword atrtack');
                swordAttack();
            }, 750);
        }


//         setTimeout(function () {
// swordAttack();
//         }, 750);


    }
}

function fireballstart() {

    var landed2 = 0;

    document.getElementById('fireball').setAttribute('draggable', false);


    var fireballTimer2 = 6;
    var theFire2 = document.getElementById("fireball");


    console.log('js3 first');


    console.log('hi from js 3');


    thisRandom2();


    var pizzaFire2 = function (event) {
        var landed2 = 1;
        ballPos = 1;
        document.getElementById('fireball').addEventListener('click', hideDB2, false);

        theFire2.setAttribute("class", "fireball");
        var fireHitVar2 = setInterval(dragonHit2, 385);

        function dragonHit2() {


            fireballTimer2--;

            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "fireballhide");
                if (yourPos == 1) {
                    yourHP--;
                    hearts(yourHP);
                }

                ex3();
                fireballTimer2 = 6;
                console.log(yourHP);
                thisRandom2();
                clearInterval(fireHitVar2);

            }
        }

        function hideDB2() {
            document.getElementById('fireball').setAttribute('class', 'fireballhide');
            console.log('hide db success');
            landed2 = 0;
        }

    }


    function thisRandom2() {

        console.log('hi from js this random2');


        var delay2 = Math.floor(Math.random() * (500 - 500 + 1) + 500);

        setTimeout(function () {
            pizzaFire2();
        }, delay2);


    }
}

function fireballstart2() {
    var landed2 = 0;

    document.getElementById('fireball2').setAttribute('draggable', false);


    var fireballTimer2 = 6;
    var theFire2 = document.getElementById("fireball2");


    console.log('js3 first');


    console.log('hi from js 3');


    thisRandom2();


    var pizzaFire2 = function (event) {
        var landed2 = 1;
        document.getElementById('fireball2').addEventListener('click', hideDB2, false);

        theFire2.setAttribute("class", "fireball2");
        var fireHitVar2 = setInterval(dragonHit2, 385);

        function dragonHit2() {


            fireballTimer2--;

            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "fireballhide");
                if (yourPos == 2) {
                    yourHP--;
                    hearts(yourHP);
                }

                ex2();
                fireballTimer2 = 6;
                console.log(yourHP);
                thisRandom2();
                clearInterval(fireHitVar2);

            }
        }

        function hideDB2() {
            document.getElementById('fireball2').setAttribute('class', 'fireballhide');
            console.log('hide db success');
            landed2 = 0;
        }

    }


    function thisRandom2() {

        console.log('hi from js this random2');


        var delay2 = Math.floor(Math.random() * (500 - 500 + 1) + 500);

        setTimeout(function () {
            pizzaFire2();
        }, delay2);


    }
}

function fireballstart3() {
    var landed2 = 0;

    document.getElementById('fireball3').setAttribute('draggable', false);


    var fireballTimer2 = 6;
    var theFire2 = document.getElementById("fireball3");


    console.log('js3 first');


    console.log('hi from js 3');


    thisRandom2();


    var pizzaFire2 = function (event) {
        var landed2 = 1;
        document.getElementById('fireball3').addEventListener('click', hideDB2, false);

        theFire2.setAttribute("class", "fireball3");
        var fireHitVar2 = setInterval(dragonHit2, 385);

        function dragonHit2() {


            fireballTimer2--;

            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "fireballhide");
                if (yourPos == 0) {
                    yourHP--;
                    hearts(yourHP);
                }

                ex1();
                fireballTimer2 = 6;
                console.log(yourHP);
                thisRandom2();
                clearInterval(fireHitVar2);

            }
        }

        function hideDB2() {
            document.getElementById('fireball3').setAttribute('class', 'fireballhide');
            console.log('hide db success');
            landed2 = 0;
        }

    }


    function thisRandom2() {

        console.log('hi from js this random2');


        var delay2 = Math.floor(Math.random() * (500 - 500 + 1) + 500);

        setTimeout(function () {
            pizzaFire2();
        }, delay2);


    }
}

function fireballstart4() {

    var landed2 = 0;
    document.getElementById('fireball4').setAttribute('draggable', false);


    var fireballTimer2 = 6;
    var theFire2 = document.getElementById("fireball4");


    console.log('js3 first');


    console.log('hi from js 3');


    thisRandom2();


    var pizzaFire2 = function (event) {
        var landed2 = 1;
        document.getElementById('fireball4').addEventListener('click', hideDB2, false);

        theFire2.setAttribute("class", "fireball4");
        var fireHitVar2 = setInterval(dragonHit2, 385);

        function dragonHit2() {


            fireballTimer2--;

            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "fireballhide");
                if (yourPos == 1) {
                    yourHP--;
                    hearts(yourHP);
                }

                ex3();

                fireballTimer2 = 6;
                console.log(yourHP);
                thisRandom2();
                clearInterval(fireHitVar2);

            }
        }

        function hideDB2() {
            document.getElementById('fireball4').setAttribute('class', 'fireballhide');
            console.log('hide db success');
            landed2 = 0;
        }

    }


    function thisRandom2() {

        console.log('hi from js this random2');


        var delay2 = Math.floor(Math.random() * (500 - 500 + 1) + 500);

        setTimeout(function () {
            pizzaFire2();
        }, delay2);


    }
}

function fireballstart5() {
    var landed2 = 0;

    document.getElementById('fireball5').setAttribute('draggable', false);


    var fireballTimer2 = 6;
    var theFire2 = document.getElementById("fireball5");


    console.log('js3 first');


    console.log('hi from js 3');


    thisRandom2();


    var pizzaFire2 = function (event) {
        var landed2 = 1;
        document.getElementById('fireball5').addEventListener('click', hideDB2, false);

        theFire2.setAttribute("class", "fireball5");
        var fireHitVar2 = setInterval(dragonHit2, 385);

        function dragonHit2() {


            fireballTimer2--;

            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "fireballhide");
                if (yourPos == 2) {
                    yourHP--;
                    hearts(yourHP);
                }

                ex2();
                fireballTimer2 = 6;
                console.log(yourHP);
                thisRandom2();
                clearInterval(fireHitVar2);

            }
        }

        function hideDB2() {
            document.getElementById('fireball5').setAttribute('class', 'fireballhide');
            console.log('hide db success');
            landed2 = 0;
        }

    }


    function thisRandom2() {

        console.log('hi from js this random2');


        var delay2 = Math.floor(Math.random() * (500 - 500 + 1) + 500);

        setTimeout(function () {
            pizzaFire2();
        }, delay2);


    }
}

function fireballstart6() {

    var landed2 = 0;

    document.getElementById('fireball6').setAttribute('draggable', false);


    var fireballTimer2 = 6;
    var theFire2 = document.getElementById("fireball6");


    console.log('js3 first');


    console.log('hi from js 3');


    thisRandom2();


    var pizzaFire2 = function (event) {
        var landed2 = 1;
        document.getElementById('fireball6').addEventListener('click', hideDB2, false);

        theFire2.setAttribute("class", "fireball6");
        var fireHitVar2 = setInterval(dragonHit2, 385);

        function dragonHit2() {


            fireballTimer2--;

            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "fireballhide");
                if (yourPos == 0) {
                    yourHP--;
                    hearts(yourHP);
                }

                ex1();
                fireballTimer2 = 6;
                console.log(yourHP);
                thisRandom2();
                clearInterval(fireHitVar2);

            }
        }

        function hideDB2() {
            document.getElementById('fireball6').setAttribute('class', 'fireballhide');
            console.log('hide db success');
            landed2 = 0;
        }

    }


    function thisRandom2() {

        console.log('hi from js this random2');


        // var delay2 = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);
        var delay2 = Math.floor(Math.random() * (500 -500 + 1) + 500);

        setTimeout(function () {
            pizzaFire2();
        }, delay2);


    }
}

function ex1() {

$('#exp1').attr('class', 'exp');
    setTimeout(function () {
        $('#exp1').attr('class', 'expHide');
    }, 250);
}

function ex2() {

    $('#exp2').attr('class', 'exp');
    setTimeout(function () {
        $('#exp2').attr('class', 'expHide');
    }, 250);
}

function ex3() {

    $('#exp3').attr('class', 'exp');
    setTimeout(function () {
        $('#exp3').attr('class', 'expHide');
    }, 250);
}




