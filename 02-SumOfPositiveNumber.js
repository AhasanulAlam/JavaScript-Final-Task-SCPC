// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
// Example Input: [2, -5, 10, -3, 7] Example Output: 19


// Sum of positive numbers in an array

const numbers = [2, -5, 10, -3, 7];
let positiveNumbers = [];

for( num of numbers){
    if(num > 0){
        positiveNumbers.push(num);
    }
}

const sumPositiveNumbers = positiveNumbers.reduce((pre, current) => pre + current, 0);
console.log(sumPositiveNumbers);
