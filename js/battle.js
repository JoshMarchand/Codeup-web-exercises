//
// function onError(error) {
//     console.log(`Error: ${error}`);
// }
//
// var setting = browser.tabs.setZoom(0);
// setting.then(null, onError);

// function getOffset(el) {
// //     const rect = el.getBoundingClientRect();
// //     return {
// //         left: rect.left + window.scrollX,
// //         top: rect.top + window.scrollY
// //     };
// // }

var spacePressed = 0;
var theKey;
var yourPos = 0;
var theDragon = document.getElementById("bigDragon");
var theStrike = document.getElementById("strike");
var hitTimer = 6;
var snd = new Audio("sound/rage_of_blades-Blaga_Saun-1763516257.mp3");
var roar = new Audio("sound/Monster Growl-SoundBible.com-344645592.mp3");
var maintrack = new Audio("sound/Chase - AShamaluevMusic.mp3");
var dragonHP = 5;
var bodyCurs = document.getElementsByTagName('body');
var meBob = document.getElementById('bob');
console.log(typeof meBob);
var rect = document.body.getBoundingClientRect();

console.log(rect.top, rect.right, rect.bottom, rect.left);
document.getElementById('bigDragon').setAttribute('draggable', false);




document.getElementById('startBut').addEventListener('click', adds);



function adds() {

    roar.play();
        maintrack.play();



    document.getElementById('startBut').removeEventListener('click', adds);


// var but = document.getElementById('startBut');
    document.getElementById('startBut').style.display = 'none';


    document.addEventListener('keydown', (event) => {


        console.log(event);

        if (event.key == ' ' && spacePressed === 0) {
            snd.currentTime = 1;
            snd.volume = .75;

            snd.play();

            spacePressed = 1;
            console.log(spacePressed + ' space is pressed');

            meBob.setAttribute('src', 'img/strike-5.gif');

            if (yourPos == 0) {
                meBob.setAttribute('class', 'bobStrike0');

            } else if (yourPos == 1) {
                meBob.setAttribute('class', 'bobStrike1');

            } else if (yourPos == 2) {
                meBob.setAttribute('class', 'bobStrike2');

            }

            function spaced0() {
                spacePressed = 0;
            }


            setTimeout(function () {
                setTimeout(spaced0, 500);


                removeAni();
            }, 450);


            function removeAni() {
                snd.pause();
                snd.currentTime = 1;
                meBob.setAttribute('src', 'img/bob2.gif');

                if (yourPos == 0) {
                    meBob.setAttribute('class', 'bob');

                } else if (yourPos == 1) {
                    meBob.setAttribute('class', 'bob2');

                } else if (yourPos == 2) {
                    meBob.setAttribute('class', 'bob3');

                }
            }


        }

        if (event.key == 'c') {
            // bodyCurs[0].setAttribute("class", "boom");
            // meBob.style['animation-name'] = swordBob2;


            yourPos = 1;
            // meBob.setAttribute('class', 'bob3');
            meBob.setAttribute('class', 'bob2');
            // document.addEventListener('keyup', changeAgain);

            document.addEventListener('keyup', (event) => {
                if (event.key == 'c' && yourPos !== 2) {
                    changeAgain();
                }
            });

            function changeAgain() {
                meBob.setAttribute('class', 'bob');
                document.removeEventListener('keyup', (event));
                yourPos = 0;

            }

            console.log('meBob work');


        }

        if (event.key == 'v') {
            yourPos = 2;
            meBob.setAttribute('class', 'bob3');
            // document.addEventListener('keyup', changeAgain2);

            document.addEventListener('keyup', (event) => {
                if (event.key == 'v' && yourPos !== 1) {
                    changeAgain2();
                }
            });

            function changeAgain2() {
                meBob.setAttribute('class', 'bob');
                document.removeEventListener('keyup', (event));
                yourPos = 0;

            }
        }

        if (event.key == 'b') {
        }

        if (event.key == 'n') {
        }

        if (event.key == 'm') {
        }
    });

    var pizza = function (event) {

        theDragon.setAttribute("src", "img/New Piskeldragon-7.gif");
        snd.play();

        theStrike.setAttribute("src", "img/strike-2.gif");

        maintrack.play();

        theDragon.setAttribute("class", "pauseAni");

        var rect = document.getElementById('bigDragon').getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);

        var avatarPos = document.body.getBoundingClientRect();
        console.log(avatarPos.top, avatarPos.right, avatarPos.bottom, avatarPos.left);

        dragonHP--;

        function dragonHit() {

            if (hitTimer == 4) {
                roar.play();
            }

            if (hitTimer == 3) {
                theStrike.setAttribute("src", "");
            }

            hitTimer--;

            if (hitTimer == 0) {
                if (dragonHP == 4) {
                    theDragon.setAttribute("src", "img/blast 1 final.gif");
                }
                if (dragonHP == 3) {
                    theDragon.setAttribute("src", "img/New Piskeldragon blast 2 clone.gif");
                }
                if (dragonHP == 2) {
                    theDragon.setAttribute("src", "img/New Piskeldragon blast 3 clone.gif");
                }
                if (dragonHP == 1) {
                    theDragon.setAttribute("src", "img/New Piskeldragon blast 4.gif");
                }
                if (dragonHP == 0) {
                    theDragon.setAttribute("src", "img/New Piskeldragon disappear 2.gif");
                }

                theDragon.setAttribute("class", "");

                hitTimer = 6;
                console.log(hitTimer);
                clearInterval(dragonHitVar);
            }
        }

        var dragonHitVar = setInterval(dragonHit, 1000);
    }

}




