// From The Odin Project https://www.theodinproject.com/lessons/foundations-fundamentals-part-3#assignment

// Write a function called add7 that takes one number and returns that number + 7.
function add7(number) {
    sum = number + 7;
    console.log(sum);
    return sum;
}

// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(a, b) {
    multiplication_sum = a * b;
    console.log(multiplication_sum);
    return multiplication_sum;
}

//Write a function called capitalize that takes a string and returns that string
// with only the first letter capitalized. Make sure that it can take strings
// that are lowercase, UPPERCASE or BoTh.
function caplitalize(string) {
    console.log(string.charAt(0).toUpperCase() + string.toLowerCase().slice(1));
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

// Write a function called lastLetter that takes
// a string and returns the very last letter of that string:
function lastLetter(string) {
    console.log(string.slice(-1));
    return string.slice(-1);
}

add7(7);
multiply(2, 3);
caplitalize("SQUIDWARD");
caplitalize("SquidWARD");
caplitalize("squidward");
lastLetter("abcdefg");