// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const simpleCalculator = (firstNumber, secondNumber, operator) => {

    if (operator === '/' && secondNumber === 0) {
        return console.log('Unable to divide by zero!');
    } else {
        switch (operator) {
            case '+':
                return (firstNumber + secondNumber)
                break;
            case '-':
                return (firstNumber - secondNumber)
                break;
            case '*':
                return (firstNumber * secondNumber)
                break;
            case '/':
                return (firstNumber / secondNumber)
                break;
        }
    }
}

const firstNumber = 6;
const secondNumber = 4;
const operator = '/';

console.log(simpleCalculator(firstNumber, secondNumber, operator));



