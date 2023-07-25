// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secondSmallestNumber = (arr) => {
    let i, first, second;
    const arraySize = inputArray.length;

    if (arraySize < 2) {
        console.log(" Invalid Array Input ");
        return;
    }

    first = Number.MAX_VALUE;
    second = Number.MAX_VALUE;
    for (i = 0; i < arraySize; i++) {
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        }
        else if (arr[i] < second && arr[i] != first)
            second = arr[i];
    }
    if (second == Number.MAX_VALUE)
        console.log("There is no second smallest element.");
    else
        console.log("The second smallest element is " + second);
} 

const inputArray = [ 12, 13, 1, 10, 34, 1 ];

secondSmallestNumber(inputArray);