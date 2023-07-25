// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
// Example Input: "hello world" Example Output: "dlrow olleh"

// reverse string using For loop
const makeReverseString = (inputString) => {
    let reverseString = '';
    
    if (inputString.length === 0) {
        return "";
    } else {
        for (let i = inputString.length - 1; i >= 0; i--) {
            reverseString = reverseString + inputString[i];
        }
    }
    return reverseString;
}

// reverse string using built-in methods
const makeReverseStringBuiltIn = (inputString) => {    
    if (inputString.length === 0) {
        return "";
    } else {
        return inputString.split("").reverse().join("");
    }
}


const inputString = 'hello world';
console.log(makeReverseString(inputString));
console.log(makeReverseStringBuiltIn(inputString));

