// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


const mostFrequentElement = (inputArray) => {
    let maxFrequent = 1;
    let m = 0;
    let item;
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i; j < inputArray.length; j++) {
            if (inputArray[i] == inputArray[j])
                m++;
            if (maxFrequent < m) {
                maxFrequent = m;
                item = inputArray[i];
            }
        }
        m = 0;
    }
    return item;
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(mostFrequentElement(inputArray));
