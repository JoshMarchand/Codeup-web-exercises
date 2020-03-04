
var yourHP = localStorage.getItem('yourHP') || 6;
var maxHP = localStorage.getItem('maxHP') || 10;
console.log('yourhp is ' + yourHP +'and your maxhp is' + maxHP + 'heart bucket is ' + heartBucket);

if (yourHP < maxHP){

    var heartBucket = parseInt(yourHP);
    console.log('yourhp is ' + yourHP +'and your maxhp is' + maxHP + 'heart bucket is ' + heartBucket);
    yourHP = maxHP;

    maxhpset();

    while (yourHP > heartBucket){
        yourHP--;
        hearts(yourHP);

    }
}

// If the user has more points than the currently stored high score then
// if (user.points > highScore) {
//     // Set the high score to the users' current points
//     highScore = parseInt(user.points);
//     // Store the high score
//     localStorage.setItem('highScore', highScore);
// }

// highScore = 5;
//
// localStorage.setItem('highScore', highScore);

// Return the high score
// console.log(localStorage.getItem('highScore'));


var konamiCount = 0;
var konami = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'];

$(document).keyup(function (event) {
    if (event.key === konami[konamiCount] && konamiCount + 1 === konami.length || event.key !== konami[konamiCount]) {
        if (konamiCount + 1 === konami.length){
            yourHP=10;
            maxHP = 10;
            maxhpset();
        }
        konamiCount = 0;
    } else {
        konamiCount++;
    }
});


// function heartEnd() {
//     localStorage.setItem('yourHP', yourHP);
//     localStorage.setItem('maxHP', maxHP);
//     console.log(localStorage.getItem('yourHP') + 'your hp');
//     console.log(localStorage.getItem('maxHP') + 'your max');
// }


function hearts(hp) {

switch (hp) {
    case 0:
        $('#heart1').attr('src', 'img/hearts-1.png.png');
        break;
    case 1:
        $('#heart1').attr('src', 'img/hearts-2.png.png');
        break;
    case 2:
        $('#heart2').attr('src', 'img/hearts-1.png.png');
        break;
    case 3:
        $('#heart2').attr('src', 'img/hearts-2.png.png');
        break;
    case 4:
        $('#heart3').attr('src', 'img/hearts-1.png.png');
        break;
    case 5:
        $('#heart3').attr('src', 'img/hearts-2.png.png');
        break;
    case 6:
        $('#heart4').attr('src', 'img/hearts-1.png.png');
        break;
    case 7:
        $('#heart4').attr('src', 'img/hearts-2.png.png');
        break;
    case 8:
        $('#heart5').attr('src', 'img/hearts-1.png.png');
        break;
    case 9:
        $('#heart5').attr('src', 'img/hearts-2.png.png');
        break;
}



}

function maxhpset() {
    if (maxHP == 10){
        $('#heart1').attr('src', 'img/hearts-3.png.png');
        $('#heart2').attr('src', 'img/hearts-3.png.png');
        $('#heart3').attr('src', 'img/hearts-3.png.png');
        $('#heart4').attr('src', 'img/hearts-3.png.png');
        $('#heart5').attr('src', 'img/hearts-3.png.png');
    } else if (maxHP == 8){
        $('#heart1').attr('src', 'img/hearts-3.png.png');
        $('#heart2').attr('src', 'img/hearts-3.png.png');
        $('#heart3').attr('src', 'img/hearts-3.png.png');
        $('#heart4').attr('src', 'img/hearts-3.png.png');
    } else {
        $('#heart1').attr('src', 'img/hearts-3.png.png');
        $('#heart2').attr('src', 'img/hearts-3.png.png');
        $('#heart3').attr('src', 'img/hearts-3.png.png');
    }
}