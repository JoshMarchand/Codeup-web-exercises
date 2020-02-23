// var theFire = document.getElementById("fireball");
//
// document.getElementById('bigDragon').setAttribute('draggable', false);
// document.getElementById('fireball').setAttribute('draggable', false);
// var fireballTimer = 5;
// var landed = 0;
//
//
//
// thisRandom();
//
//
// var pizzaFire = function (event) {
//     var landed = 1;
//     document.getElementById('fireball').addEventListener('click', hideDB, false);
//
//     theFire.setAttribute("class", "fireball");
//     var fireHitVar = setInterval(dragonHit, 500);
//
//     function dragonHit() {
//
//
//
//         fireballTimer--;
//
//         if (fireballTimer == 0) {
//
//             theFire.setAttribute("class", "fireballhide");
//             if (landed==1){
//                 yourHP--;
//             }
//
//             fireballTimer = 6;
//             console.log(yourHP);
//             thisRandom();
//             clearInterval(fireHitVar);
//
//         }
//     }
//
//     function hideDB() {
//         document.getElementById('fireball').setAttribute('class', 'fireballhide');
//         console.log('hide db success');
//         landed = 0;
//     }
//
// }
//
//
//
// function thisRandom (){
//
//     var delay = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);
//
//     setTimeout(function () {
//         pizzaFire();
//     }, delay);
//
//
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // function outerFlow() {
// //
// //     document.getElementById('fireball').setAttribute('class', 'fireball');
// //
// //     var fireball1 = setInterval(fireball1flow, 1000);
// //
// //     fireballTimer = 5;
// // }
// //
// // function hideDB() {
// //     clearInterval(fireball1);
// //     document.getElementById('fireball').setAttribute('class', 'fireballhide');
// //     console.log('hide db success');
// // }
// //
// // function fireball1flow() {
// //
// //     fireballTimer--;
// //
// // if (fireballTimer == 0){
// //     yourHP--;
// //     console.log(yourHP + 'yourhp');
// //     clearInterval(fireball1);
// // }
// // }
// //
// //
// //
// // outerFlow();