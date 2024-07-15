// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a,b){
        if(b===0){
            return 1
        }
        var result = a
        for(var i =1; i<b; i++){
            result *=a
        }
        return result
    }
    alert(power(2,4))


//     2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let year = prompt("Enter a year:");
if (isLeapYear(year)) {
   alert(year + " is a leap year.");
} else {
    alert(year + " is not a leap year.");
}


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions



function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function calculateArea(a, b, c) {
    let s = calculateSemiPerimeter(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
let a = 5;
let b = 6;
let c = 7;
let area = calculateArea(a, b, c);
document.write("The area of the triangle is: " + area.toFixed(2));




//5: You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.



function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }

    return -1;
}
var myString = "Hello, world!";
var charToFind = 'o';

console.log(customIndexOf(myString, charToFind));


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


function removeVowels(sentence) {
    let result = '';
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (
            char !== 'a' && char !== 'e' && char !== 'i' &&
            char !== 'o' && char !== 'u' &&
            char !== 'A' && char !== 'E' && char !== 'I' &&
            char !== 'O' && char !== 'U'
        ) {
            result += char;
        }
    }

    return result;
}

const sentence = "Hello, world!";
console.log(removeVowels(sentence));