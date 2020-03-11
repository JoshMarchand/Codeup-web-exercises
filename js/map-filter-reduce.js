// const salesPeople =
//     {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}
// ;
//
// console.log(salesPeople['3']);
//
// function countWords(sentence) {
//     // console.log('hi');
//     const words = sentence.split(' '); // transform a sentence into an array of words
//     // console.log(words);
//     const wordCountObject = words.reduce((wordCounts, word) => {
//         console.log(wordCounts + ' :word counts');
//         console.log(word + ' :word');
//         console.log(wordCounts[word] + ' :wordCounts[word]');
//         if (typeof wordCounts[word] === 'undefined') {
//             // if the word is not yet present in our object, set it's value to 1
//             wordCounts[word] = 1;
//         } else {
//             // otherwise increment the existing count
//             wordCounts[word] += 1;
//         }
//         return wordCounts;
//     }, {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}); // start with an empty object
//     return wordCountObject;
// }
//
// console.log(countWords('Mary had a little lamb little lamb little lamb'));
// // {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}



const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let skilledProfs = console.log(users.filter(n => user.languages.length >= 3));

let emeailAddress = console.log(users.map(user => user.email));

let totalExpYears = console.log(users.reduce((total, user) => total + user.yearsOfExperience, 0));
console.log((totalExpYears/users.length) + ' years');

let longestEmail = users.reduce((currentLongest, user)=> user.email.length > currentLongest? user.email : currentLongest,'j');

let names = users.reduce((sentence) => sentence === ""? user.name : sentence + ',' + user.name,'');
console.log('Your instructors are: ' + names + '.');



