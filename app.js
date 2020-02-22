// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var ProGrad_1 = "Sneha";
console.log(ProGrad_1);
var ProGrad_2 = "haripriya";
console.log(ProGrad_2);


// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// 2.1. Depending on which name is longer, print:
if (ProGrad_1.length > ProGrad_2.length)
    console.log("The driver has the longest name, it has " + ProGrad_1.length + " characters.");
else if (ProGrad_1.length < ProGrad_2.length)
    console.log("It seems that the navigator has the longest name, it has " + ProGrad_2.length + " characters.");
else
    console.log(" you both have equally long names," + ProGrad_2.length + "characters!.");
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels

function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;
    var out = [];
    var vowelarray = [];
    for (var x = 0; x < str1.length; x++) {
        for (var y = 0; y < vowel_list.length; y++) {
            if (str1[x] == vowel_list[y]) {
                vcount += 1;
                vowelarray += vowel_list[y];
            }
        }
    }
    if (vcount != 0)
        out = [str1, vcount, vowelarray];
    return out;
}
console.log(vowel_count(ProGrad_1));
console.log(vowel_count(ProGrad_2));


// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function countUpperCaseChars(str) {
    var count = 0,
        len = str.length;
    for (var i = 0; i < len; i++) {
        if (/[A-Z]/.test(str.charAt(i))) count++;
    }
    return count;
}

function countLowerCaseChars(str) {
    var count = 0,
        len = str.length;
    for (var i = 0; i < len; i++) {
        if (/[a-z]/.test(str.charAt(i))) count++;
    }
    return count;
}
console.log(countUpperCaseChars(ProGrad_1));
console.log(countUpperCaseChars(ProGrad_2));
console.log(countLowerCaseChars(ProGrad_1));
console.log(countLowerCaseChars(ProGrad_2));



// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
function UpperCaseChars(str) {
    var res = str.split("");
    // console.log(res);
    let upr = "";
    for (var i = 0; i < res.length; i++) {
        upr += res[i] + " ";
    }
    upr = upr.toUpperCase();
    return upr;
}
console.log(UpperCaseChars(ProGrad_1));


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(ProGrad_2));


// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(ProGrad_1.concat(" ", ProGrad_2));
console.log(ProGrad_2.concat(" ", ProGrad_1));



function lexicographicorder(str) {
    return str.toUpperCase().split("").sort().join("").toLowerCase();
}
console.log(lexicographicorder(ProGrad_1));
console.log(lexicographicorder(ProGrad_2));

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 