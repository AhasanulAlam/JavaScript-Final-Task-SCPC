// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const charToInteger = (c) => {
    switch (c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

const romanToInteger = (inputString) => {
    if (inputString == null) return -1;
    var num = charToInteger(inputString.charAt(0));
    var pre, curr;

    for (var i = 1; i < inputString.length; i++) {
        curr = charToInteger(inputString.charAt(i));
        pre = charToInteger(inputString.charAt(i - 1));
        if (curr <= pre) {
            num += curr;
        } else {
            num = num - pre * 2 + curr;
        }
    }

    return num;
}

const inputString = 'MCMLXXXIX';
console.log(romanToInteger(inputString));
