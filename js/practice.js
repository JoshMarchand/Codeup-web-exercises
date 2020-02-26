// TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"
console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));

function keepYellow(thing) {
    var neArray= [];

    thing.forEach(function (element) {
if (element === 'yellow'){
    neArray.push(element);
}
    });

    return neArray;
}

// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
function filterNumbers(arr) {

}
console.log(filterNumbers(["fred", true, 20, 5]));