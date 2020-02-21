var theButton = document.getElementById("button1");
var theDragon = document.getElementById("bigDragon");
var theStrike = document.getElementById("strike");
var hitTimer = 6;
var snd = new Audio("sound/rage_of_blades-Blaga_Saun-1763516257.mp3");
var roar = new Audio("sound/Monster Growl-SoundBible.com-344645592.mp3");
var maintrack = new Audio("sound/Chase - AShamaluevMusic.mp3");
var dragonHP = 5;
var bodyCurs = document.getElementsByTagName('body');
var rect = document.body.getBoundingClientRect();
var yourHP = 6;
console.log(rect.top, rect.right, rect.bottom, rect.left);
document.getElementById('bigDragon').setAttribute('draggable', false);

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}



document.addEventListener('keydown', (event) => {

    console.log(event);

    if (event.key == ' ') {
        pizza();
    }

    if (event.key == 'c') {
        bodyCurs[0].setAttribute("class", "boom");
    }

    if (event.key == 'v') {
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
                theDragon.setAttribute("src", "img/New Piskeldragon blast 1 clone.gif");
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

// register the listener to handle clicks on btn1
document.getElementById('button1').addEventListener('click', pizza, false);

