function isOdd(number) {
    return number % 2 === 1;
}

function isEven(number) {
    return number % 2 === 0;
}

function identity(input) {
    return input;
}

function isFive(input) {
    return input === 5;
}

function addFive(input) {
    return input + 5;
}

function isMultipleOfFive(input) {
    return input % 5 === 0;
}

function isThree(input) {
    return input === 3;
}

function isMultipleOfThree(input) {
    return input % 3 === 0;
}

function isMultipleOfThreeAndFive(input) {
    return input % 3 === 0 && input % 5 === 0;
}

function isMultipleOf(target, n) {
    return target % n === 0;
}

function isTrue(input) {
    return input;
}

function isFalse(input) {
    return !input;
}

function isTruthy(input) {
    return !!input;
}

function isFalsy(input) {
    return !input;
}

function isVowel(input) {
    switch (input) {
        case 'a':
            return true;
        case 'e':
            return true;
        case 'i':
            return true;
        case 'o':
            return true;
        case 'u':
            return true;
        default:
            return false;
    }
}


function isConsonant(input) {
    switch (input) {
        case 'a':
            return false;
        case 'e':
            return false;
        case 'i':
            return false;
        case 'o':
            return false;
        case 'u':
            return false;
        default:
            return true;
    }
}


function isLowerCase(input) {
    return input !== input.toUpperCase();
}

function hasLowerCase(input) {
    return input !== input.toUpperCase();
}

function isSpace(input) {
    return input === ' ';
}


function isZero(input) {
    return input === 0;
}

function notZero(input) {
    return input !== 0;
}

function lowerCase(input) {
    return input.toLowerCase();
}

function double(input) {
    return input * 2;
}

function triple(input) {
    return input * 3;
}

function quadruple(input) {
    return input * 4;
}

function half(input) {
    return input / 2;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

function modulo(a, b) {
    return a % b;
}

function cube(n) {
    return n * n * n;
}


function squareRoot(n) {
    return squareRoot(n);
}


function cubeRoot(n) {
    return cubeRoot(n);
}

function invertSign(number) {
    return -number;
}

function degreesToRadians(number) {
    var pi = Math.PI;
    return degrees * (pi/180);
}

function radiansToDegrees(number) {
    var pi = Math.PI;
    return radians * (180/pi);
}

function isBlank(input) {
    return (input.trim()).length > 0;
}

function trim(string) {
    return string.trim();
}

function areEqual(input1, input2) {
    return input1 === input2;
}

function areIdentical(input1, input2) {
    return input1 === input2;
}

function not(input) {
    return !input
}


function notNot(input) {
    return !!input;
}

function and(predicate1, predicate2) {
    return predicate1 && predicate2;
}

function or(predicate1, predicate2) {
    return predicate1 || predicate2;
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

function absoluteValue(number) {
    return Math.abs(number);
}

function rollDice(sides) {
    return Math.floor( Math.random() * sides ) +1;
}
