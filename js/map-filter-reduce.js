const salesPeople =
    {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}
;

console.log(salesPeople['3']);

function countWords(sentence) {
    // console.log('hi');
    const words = sentence.split(' '); // transform a sentence into an array of words
    // console.log(words);
    const wordCountObject = words.reduce((wordCounts, word) => {
        console.log(wordCounts + ' :word counts');
        console.log(word + ' :word');
        console.log(wordCounts[word] + ' :wordCounts[word]');
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}); // start with an empty object
    return wordCountObject;
}

console.log(countWords('Mary had a little lamb little lamb little lamb'));
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}

