// let wait = waiting => {
//     setTimeout(function () {
//
//     }, waiting)
// };
// let wait = waiting =>{
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve();
//         }, waiting);
//     });
// };

// let wait = num =>{
//     return new Promise(res => {
//         setTimeout(res, num);
//     });
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

fetch('https://api.github.com/users', {headers: {'Authorization': 'token  6f54f81ddd21aff7fb4ac4ef148a1f7a0f0035cc'}})
    .then(response => console.log(response.json()))

