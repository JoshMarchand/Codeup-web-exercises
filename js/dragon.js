
var dragPos=0;
var stabCounter = 0;


function start() {




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


                pizzaFire2();
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

