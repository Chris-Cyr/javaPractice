//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(addUp(983749));
console.log(addUp(25));
console.log(addUp(-543));

//You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
//
// If you can't find Nemo, return "I can't find Nemo :(".

function findNemo(sentence) {
    let newSentence = sentence.split(" ");
    for(let i = 0; i < newSentence.length; ++i){
        if(newSentence[i] === "Nemo") {
            return `I found Nemo at ${i + 1}!`
        }
    }
    return "I can't find Nemo :("
}

console.log(findNemo("This sentence doesn't contain the word I'm looking for"));
console.log(findNemo("This sentence has the word Nemo in it."));