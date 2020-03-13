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

//comment

// let wait = num =>{
//     return new Promise(res => {
//         setTimeout(res, num);
//     });
// };
//
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//comment2
let commit = () =>
    fetch(`https://api.github.com/users/${prompt('Username?')}/events/public`, {headers: {'Authorization': 'token  6f54f81ddd21aff7fb4ac4ef148a1f7a0f0035cc'}})
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i <= data.length - 1; i++) {
                if (data[i].type === 'PushEvent') {
                    break;
                }
            }
            fetch(data[i].payload.commits[0].url, {headers: {'Authorization': 'token  6f54f81ddd21aff7fb4ac4ef148a1f7a0f0035cc'}})
                .then(thingy => thingy.json())
                .then(thingy => alert(new Date(thingy.commit.author.date)));
        })
        .catch(error => {
            console.log(error);
            commit();
        });

commit();
//comment