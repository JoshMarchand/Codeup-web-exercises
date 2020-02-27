
var dragPos=0;
var stabCounter = 0;
var charge =  new Audio("sound/Spaceship_Takeoff-Richard-902554369.mp3");
var blast =  new Audio("sound/Grenade-SoundBible.com-2124844747.mp3");






function balls() {
    var theFire2 = document.getElementById("bigDragon");
    console.log('hi  from balls');
    theFire2.setAttribute("src", "img/dark head 2.gif");
    theFire2.setAttribute("class", "bigDragonhead");
    fireballstart();
    fireballstart2();
    fireballstart3();
    fireballstart4();
    fireballstart5();

}

document.getElementById('startBut').addEventListener('click', next);

function next() {
start(1);
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
        charge.pause();
        blast.pause();
        blast.currentTime = 0;
        blast.play();

        var fireHitVar2 = setInterval(dragonHit2, 500);

        function dragonHit2() {




            fireballTimer2--;

            console.log(fireballTimer2);

            if (fireballTimer2 == 2) {
                console.log(dragPos + 'dragpos');
                if (dragPos== 0){
                    theFire2.setAttribute("class", "bigDragonB1");

                }if (dragPos== 1){
                    theFire2.setAttribute("class", "bigDragonB2");

                }if (dragPos== 2){
                    theFire2.setAttribute("class", "bigDragonB3");
                }
                theFire2.setAttribute("src", "img/ultimate blast final 2.gif");



            }



            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "");
                if (dragPos==yourPos){
                    yourHP--;
                }

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



    function thisRandom2 (){


        charge.currentTime = 0;
        charge.play();

        theFire2.setAttribute("src", "img/blast 1 final.gif");

        dragPos = Math.floor(Math.random() * (3 - 0 + 0) + 0);




        if (dragPos == 0){
            theFire2.setAttribute("class", "bigDragonC1");

        }
        if (dragPos == 1){
            theFire2.setAttribute("class", "bigDragonC2");

        }
        if (dragPos == 2){
            theFire2.setAttribute("class", "bigDragonC3");

        }








        console.log(dragPos);

        console.log('hi from js this random2');


        var delay2 = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);


    blastCounter++;

        setTimeout(function () {
            if (blastCounter < 5) {

                pizzaFire2();
            } else {
                blastCounter = 0;
                swordAttack();
            }
        }, 2000);


    }

    function swordAttack() {
        var hitPos;


        stabCounter++;

        hitPos = Math.floor(Math.random() * (3 - 0 + 0) + 0);

        if (stabCounter === 10){
            theFire2.setAttribute('src', 'img/dragon stab long.gif');
            // stabCounter = 0;
        } else {
            theFire2.setAttribute('src', 'img/dragon stab.gif');
        }

        if (yourPos === 0) {
            // theFire2.setAttribute('src', 'img/dragon stab.gif');
            theFire2.setAttribute('class', 'dstrike0');
        }else if (yourPos === 1) {
            // theFire2.setAttribute('src', 'img/dragon stab.gif');
            theFire2.setAttribute('class', 'dstrike1');
        }else if (yourPos === 2) {
            // theFire2.setAttribute('src', 'img/dragon stab.gif');
            theFire2.setAttribute('class', 'dstrike2');
        }

        if (stabCounter === 10){
            // theFire2.setAttribute('src', 'img/dragon stab long.gif');
            // console.log('stab counter ten to pizza fire');
            stabCounter = 0;
            setTimeout(function () {


                // pizzaFire2();
                balls();
            }, 2000);
        } else {
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


    var fireballTimer2 = 5;
    var theFire2 = document.getElementById("fireball");


    console.log('js3 first');


    console.log('hi from js 3');


    thisRandom2();


    var pizzaFire2 = function (event) {
        var landed2 = 1;
        document.getElementById('fireball').addEventListener('click', hideDB2, false);

        theFire2.setAttribute("class", "fireball");
        var fireHitVar2 = setInterval(dragonHit2, 500);

        function dragonHit2() {


            fireballTimer2--;

            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "fireballhide");
                if (landed2==1){
                    yourHP--;
                }

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



    function thisRandom2 (){

        console.log('hi from js this random2');


        var delay2 = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);

        setTimeout(function () {
            pizzaFire2();
        }, delay2);


    }
}

function fireballstart2() {

    var landed2 = 0;

    document.getElementById('fireball2').setAttribute('draggable', false);


    var fireballTimer2 = 5;
    var theFire2 = document.getElementById("fireball2");


    console.log('js3 first');


    console.log('hi from js 3');


    thisRandom2();


    var pizzaFire2 = function (event) {
        var landed2 = 1;
        document.getElementById('fireball2').addEventListener('click', hideDB2, false);

        theFire2.setAttribute("class", "fireball2");
        var fireHitVar2 = setInterval(dragonHit2, 500);

        function dragonHit2() {



            fireballTimer2--;

            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "fireballhide");
                if (landed2==1){
                    yourHP--;
                }

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



    function thisRandom2 (){

        console.log('hi from js this random2');


        var delay2 = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);

        setTimeout(function () {
            pizzaFire2();
        }, delay2);


    }
}

function fireballstart3() {

    var landed2 = 0;

    document.getElementById('fireball3').setAttribute('draggable', false);


    var fireballTimer2 = 5;
    var theFire2 = document.getElementById("fireball3");


    console.log('js3 first');


    console.log('hi from js 3');


    thisRandom2();


    var pizzaFire2 = function (event) {
        var landed2 = 1;
        document.getElementById('fireball3').addEventListener('click', hideDB2, false);

        theFire2.setAttribute("class", "fireball3");
        var fireHitVar2 = setInterval(dragonHit2, 500);

        function dragonHit2() {



            fireballTimer2--;

            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "fireballhide");
                if (landed2==1){
                    yourHP--;
                }

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



    function thisRandom2 (){

        console.log('hi from js this random2');


        var delay2 = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);

        setTimeout(function () {
            pizzaFire2();
        }, delay2);


    }
}

function fireballstart4() {

    var landed2 = 0;

    document.getElementById('fireball4').setAttribute('draggable', false);


    var fireballTimer2 = 5;
    var theFire2 = document.getElementById("fireball4");


    console.log('js3 first');


    console.log('hi from js 3');


    thisRandom2();


    var pizzaFire2 = function (event) {
        var landed2 = 1;
        document.getElementById('fireball4').addEventListener('click', hideDB2, false);

        theFire2.setAttribute("class", "fireball4");
        var fireHitVar2 = setInterval(dragonHit2, 500);

        function dragonHit2() {



            fireballTimer2--;

            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "fireballhide");
                if (landed2==1){
                    yourHP--;
                }

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



    function thisRandom2 (){

        console.log('hi from js this random2');


        var delay2 = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);

        setTimeout(function () {
            pizzaFire2();
        }, delay2);


    }
}

function fireballstart5() {

    var landed2 = 0;

    document.getElementById('fireball5').setAttribute('draggable', false);


    var fireballTimer2 = 5;
    var theFire2 = document.getElementById("fireball5");


    console.log('js3 first');


    console.log('hi from js 3');


    thisRandom2();


    var pizzaFire2 = function (event) {
        var landed2 = 1;
        document.getElementById('fireball5').addEventListener('click', hideDB2, false);

        theFire2.setAttribute("class", "fireball5");
        var fireHitVar2 = setInterval(dragonHit2, 500);

        function dragonHit2() {



            fireballTimer2--;

            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "fireballhide");
                if (landed2==1){
                    yourHP--;
                }

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



    function thisRandom2 (){

        console.log('hi from js this random2');


        var delay2 = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);

        setTimeout(function () {
            pizzaFire2();
        }, delay2);


    }
}


