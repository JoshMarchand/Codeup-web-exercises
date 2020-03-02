

var konamiCount = 0;
var konami = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'];

$(document).keyup(function (event) {
    if (event.key === konami[konamiCount] && konamiCount + 1 === konami.length || event.key !== konami[konamiCount]) {
        if (konamiCount + 1 === konami.length){
            yourHP=10;
            maxhpset();
        }
        konamiCount = 0;
    } else {
        konamiCount++;
    }
});



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
    if (yourHP === 10){
        $('#heart1').attr('src', 'img/hearts-3.png.png');
        $('#heart2').attr('src', 'img/hearts-3.png.png');
        $('#heart3').attr('src', 'img/hearts-3.png.png');
        $('#heart4').attr('src', 'img/hearts-3.png.png');
        $('#heart5').attr('src', 'img/hearts-3.png.png');
    } else if (yourHP === 8){
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