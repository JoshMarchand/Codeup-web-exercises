"use strict";

// .html()
//   .css()
//     .addClass()
//       .removeClass()
//         .toggleClass()


// ******* Getters and Setters **********

// Getter for text of logo color
function getColorText() {
return $('#colorText').html();
}

console.log(getColorText());

// Setter for text of logo color
function setColorText (color){
    $('#colorText').removeClass(getColorText()).html(color).addClass(color);

}

setColorText('purple');
// Getter for section color
function getSectionColor(section) {
return $(section).attr('class');
}

console.log(getSectionColor('#path1'));
// Setter for the section color
// change all sections if 'all' is passed in
// if individual section is passed in, change its color (used for Rainbow effect)
function setSectionColor(color, section) {
if (section === 'all') {
resetColor();
    setColorText(color);
return $('.codeup-logo > path').addClass(color);
} else {
    $(section).removeClass(getSectionColor(section));

    return $(section).addClass(color);
}
}

setSectionColor('orange', '#path3');

function resetColor() {
$('.codeup-logo > path').removeClass( function () {
return $(this).attr('class');
})
}
// reset all path elements to default, and change the 'color' text in the h2 to 'green'


// write a function called rainbowLogo() that changes the logo to rainbow colors
function rainbowLogo() {
 var text = 'rainbow';
 var logoSections = ['path1', 'path2', 'path3', 'path4', 'path5', 'path6'];
 var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    var colorfulText = [];

 logoSections.forEach(function (sectionId) {
setSectionColor(colors[counter], sectionId);
counter++;
 });

    var counter = 0;
    var i = 0;


 text.split('').forEach(function (letter) {
colorfulText[i] = '<span class = "' + colors[counter] + '">' + letter + '</span>';
if (counter===5){
    counter=0;
}
counter++; i++;
 });

 text = colorfulText.join(' ');
    console.log(text);

    return $('colorText').removeClass(getColorText()).html(text);
}

console.log(rainbowLogo());

// Set a variable called circleClickCount, to keep track of how many times an individual circle has been clicked


// Add a click listener to each of the 'circle' elements at the botto of the page, and make each color circle
// change the logo to the clicked color, or rainbow, if rainbow was clicked
// If the same color is clicked twice, toggle the 'caps' class to UPPERCASE and lowercase the color name


// *********************** Traversing Methods ********************************* //

// now let's traverse some elements

// .each()   .first()    .last()    .children()    .parent()    .next()

// TODO: Let's give each of the selection circles a 1px black border


// TODO: Let's take the border away from the first circle


// TODO: Let's make the last circle disappear


// TODO: Find the children of the circle row, and remove borders from all of them, then unhide the last circle


// TODO: while changing the fist path element to have a black fill, give its grandparent a light gray background and 10px padding


// TODO: change the second path element to blue, then change the 'next' element to yellow


// TODO: What's the difference between changing the class to change the color, and simply changing the color directly?