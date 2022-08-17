const zero = document.querySelector('.zero');
const showResult = document.querySelector('.showResult');
const windowWithCalculations = document.querySelector('.windowWithCalculations');
const showSign = document.querySelector('.showSign');

let numberInMemory = '0';

let result = '0';

let mainNumber = '0';
let num = 0;

let sign = '+';

let allCalculations = '';

showResult.textContent = mainNumber;

const showCalculations = () => {
    allCalculations = `${result} ${sign} ${mainNumber}`;
    windowWithCalculations.textContent = allCalculations;
}

const reset = () => {
    mainNumber = '0';
    num = '0';
    result = '0';
    showResult.textContent = mainNumber;
    sign = '+'
};


const addition = (a, b) => {
    return a + b;
}

const subtraction = (a, b) => {
    return a - b;
}

const multiplication = (a, b) => {
    return a * b;
}
const division = (a, b) => {
    return a / b;
}

const setNumbers = e => {
    console.log(e.keyCode);

    if (e.keyCode === 96 || e.keyCode === 48) {
        if (mainNumber === '0') {
            return;
        } else {
            num = '0';
        }
    } else if (e.keyCode === 97 || e.keyCode === 49) {
        num = '1';
    } else if (e.keyCode === 98 || e.keyCode === 50) {
        num = '2';
    } else if (e.keyCode === 99 || e.keyCode === 51) {
        num = '3';
    } else if (e.keyCode === 100 || e.keyCode === 52) {
        num = '4';
    } else if (e.keyCode === 101 || e.keyCode === 53) {
        num = '5';
    } else if (e.keyCode === 102 || e.keyCode === 54) {
        num = '6';
    } else if (e.keyCode === 103 || e.keyCode === 55) {
        num = '7';
    } else if (e.keyCode === 104 || e.keyCode === 56) {
        num = '8';
    } else if (e.keyCode === 105 || e.keyCode === 57) {
        num = '9';
    } else {
        num = '';
    };


    if (mainNumber.length < 10) {
        if (mainNumber === '0') {
            mainNumber = num;
        } else {
            mainNumber += num;
        }
    }

    switch (e.keyCode) {
        case 107:
            sign = '+';
            if (result === '0') {
                result = Number(mainNumber);
            } else {
                result = Number(result) + Number(mainNumber);
            }

            mainNumber = '0';
            break;
        case 109:
            sign = '-';
            if (result === '0') {
                result = Number(mainNumber);
            } else {
                result = Number(result) - Number(mainNumber);
            }
            mainNumber = '0';
            break;
        case 106:
            sign = '*';
            if (result === '0') {
                result = Number(mainNumber);
            } else {
                result = Number(result) * Number(mainNumber);
            }
            mainNumber = '0';
            break;
        case 111:
            sign = '/';
            if (result === '0') {
                result = Number(mainNumber);
            } else {
                result = Number(result) / Number(mainNumber);
            }
            mainNumber = '0';
            break;
    }

    showSign.textContent = sign;


    showCalculations();

    if (e.keyCode === 13) {

        if (sign === '+') {
            result = addition(Number(result), Number(mainNumber));
        } else if (sign === '-') {
            result = subtraction(Number(result), Number(mainNumber))
        } else if (sign === '*') {
            result = multiplication(Number(result), Number(mainNumber))
        } else if (sign === '/') {
            result = division(Number(result), Number(mainNumber))
        }
        mainNumber = result + '';
    }


    if (mainNumber === '') {
        showResult.textContent = '0';
    } else {
        showResult.textContent = mainNumber;
    }

    if (e.keyCode === 27) {
        reset();
    }
}

window.addEventListener('keydown', setNumbers);


