//Password Validator

/*
contains at least one uppercase letter
contains at least one lowercase letter
contains at least one digit
contains at least one special character: @, #, $, %, ^, &, *, !
*/

function isPasswordValid(password) {
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const digit = /[0-9]/;
    const speChar = /[@#$%^&*!]/;  

    if (!password) {
        return false;
    } else if (password.match(upperCase) && password.match(lowerCase) &&
        password.match(digit) && password.match(speChar) && password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

/*
function isPasswordValid(password) {
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const digit = /[0-9]/;
    const speChar = /[@#$%^&*!]/;

    if (!password) {
        return false;
    } else if (
        upperCase.test(password) &&
        lowerCase.test(password) &&
        digit.test(password) &&
        speChar.test(password) &&
        password.length >= 8
    ) {
        return true;
    } else {
        return false;
    }
}
*/


module.exports = isPasswordValid

