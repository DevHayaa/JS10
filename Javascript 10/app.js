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
    if (year % 4 === 0) {
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


function customIndexOf(string, letter) {

        for (var i=0; i<string.length; i++){
    
            if(string[i] === letter){
                return i;
            }
        }
        var i = 0
        while (i < string.length) {
            if (string[i] === letter) {
                return i
            }
            i++
        }
        return -1
    }
    var str= prompt("Enter a string: ")
    var ltr= prompt("Enter a letter: ")
    alert(customIndexOf(str, ltr))


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


function deleteVowel(str){
var vowel = "aeiouAEIOU"
var result = ""

var i =0;
while(i<str.length){
if(vowel.indexOf(str[i])===-1){
    result += str[i]
}
    i++
}
return result
}
alert(deleteVowel("hello world"))



// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.


function countVowelPairs(text){
    var count = 0;
    var i = 0;
    while(i<text.length-1){
        var char1 = text[i].toLowerCase()
        var char2 = text[i+1].toLowerCase()
        var vowelPairs = []

        switch(true){
            case (char1==="a" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):
            case (char1==="e" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):
            case (char1==="i" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):  
            case (char1==="o" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):  
            case (char1==="u" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):
                count++
                vowelPairs.push(char1+char2)
                console.log(vowelPairs)
                break
        }
        i++
    }
    return count;
}
alert(countVowelPairs("Please read this application and give me gratuity"))



// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12.00;
    let overtimePay = 0;

    if (hoursWorked > regularHours) {
        const overtimeHours = hoursWorked - regularHours;
        overtimePay = overtimeHours * overtimeRate;
    }

    return overtimePay;
}
var hoursWorked = 45;
var overtimePay = calculateOvertimePay(hoursWorked);

alert(`The overtime pay for ${hoursWorked} hours worked is Rs. ${overtimePay.toFixed(2)}`);
