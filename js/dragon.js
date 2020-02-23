
var dragPos=0;



(function () {

    var landed2 = 0;

    document.getElementById('bigDragon').setAttribute('draggable', false);


    var fireballTimer2 = 5;
    var theFire2 = document.getElementById("bigDragon");



    thisRandom2();


    var pizzaFire2 = function (event) {
        // var landed2 = 1;
        // document.getElementById('bigDragon').addEventListener('click', hideDB2, false);


        var fireHitVar2 = setInterval(dragonHit2, 500);

        function dragonHit2() {



            fireballTimer2--;

            if (fireballTimer2 == 2) {
                theFire2.setAttribute("src", "img/ultimate blast.gif");
            }


            if (fireballTimer2 == 0) {

                theFire2.setAttribute("class", "");
                if (dragPos==yourPos){
                    yourHP--;
                }

                fireballTimer2 = 6;
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

        var dragPos = Math.floor(Math.random() * (3 - 0 + 0) + 0);

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



        setTimeout(function () {
            pizzaFire2();
        }, delay2);


    }
})();