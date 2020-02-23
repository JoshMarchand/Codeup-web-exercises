//
//
//
//
//
// (function () {
//
//     var landed2 = 0;
//
//     document.getElementById('fireball2').setAttribute('draggable', false);
//
//
//     var fireballTimer2 = 5;
//     var theFire2 = document.getElementById("fireball2");
//
//
//     console.log('js3 first');
//
//
//     console.log('hi from js 3');
//
//
//     thisRandom2();
//
//
//     var pizzaFire2 = function (event) {
//         var landed2 = 1;
//         document.getElementById('fireball2').addEventListener('click', hideDB2, false);
//
//         theFire2.setAttribute("class", "fireball2");
//         var fireHitVar2 = setInterval(dragonHit2, 500);
//
//         function dragonHit2() {
//
//
//
//             fireballTimer2--;
//
//             if (fireballTimer2 == 0) {
//
//                 theFire2.setAttribute("class", "fireballhide");
//                 if (landed2==1){
//                     yourHP--;
//                 }
//
//                 fireballTimer2 = 6;
//                 console.log(yourHP);
//                 thisRandom2();
//                 clearInterval(fireHitVar2);
//
//             }
//         }
//
//         function hideDB2() {
//             document.getElementById('fireball2').setAttribute('class', 'fireballhide');
//             console.log('hide db success');
//             landed2 = 0;
//         }
//
//     }
//
//
//
//     function thisRandom2 (){
//
//         console.log('hi from js this random2');
//
//
//         var delay2 = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);
//
//         setTimeout(function () {
//             pizzaFire2();
//         }, delay2);
//
//
//     }
// })();