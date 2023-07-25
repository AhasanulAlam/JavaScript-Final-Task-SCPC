// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


const generateRandomPassword = (passLength) => {
    var newPassword = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz' + 
            '0123456789!@#$%&*()';
    for (let i = 1; i <= passLength; i++) {
        var char = Math.floor(Math.random() * str.length + 1);
        newPassword += str.charAt(char)
    }      
    return newPassword;
}

const passLength = 20;

console.log(generateRandomPassword(passLength));
