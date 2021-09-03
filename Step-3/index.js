

// Sum zero function 

// Write a function that takes in an array of numbers. 
// The function should return True if any two numberss in list sum to 0, and false otherwise.



// Unique characters

// Write a function that takes in a single word, as a string. 
// It should return True if that word contains only unique characters. Return False otherwise.

// function hasUniqueCharacters(string) {
// let character = {}

// for (let i = 0; i < string.length; i++) {
//     let letter = string.charAt(i);
   
//     if (character.hasOwnProperty(letter)) {
//         console.log("false");
//     }
//     return true;  

// }

// hasUniqueCharacters('Moonday')

// Pangram Sentence

// A pangram is a sentence that contains all the letters of the English alphabet at least once, 
// like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.



// Longest Word

function findLongestWord (string) {
    let phrase = string.split(' ');
    let longestWord = 0;

    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i].length > longestWord) {
            longestWord = phrase[i].length
           
        }
       
    }

    console.log(longestWord)
}


findLongestWord("test to see what worksat")

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.