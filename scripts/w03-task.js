/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
const add = (number1, number2) => number1 + number2;

const addNumbers = () => {
    let add1 = Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(add1, add2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = (number1, number2) => number1 - number2;

const subtractNumbers = () => {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    let difference = subtract(subtract1, subtract2);
    document.querySelector('#difference').value = difference; 
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value) || 0;
    let factor2 = Number(document.querySelector('#factor2').value) || 0;
    let product = multiply(factor1, factor2);
    document.querySelector('#product').value = product.toFixed(2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (x, y) => x / y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient.toFixed(2);
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);

    if (document.getElementById("member").checked) {
        subtotal = subtotal - subtotal * 0.2; // 20% discount for members
    }

    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getTotal);
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById("array").textContent = numbersArray.join(', ');

/* Output Odds Only Array */
let oddsArray = numbersArray.filter(num => num % 2 !== 0);
document.getElementById("odds").textContent = oddsArray.join(', ');

/* Output Evens Only Array */
let evensArray = numbersArray.filter(num => num % 2 === 0);
document.getElementById("evens").textContent = evensArray.join(', ');

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(num => num * 2);
document.getElementById("multiplied").textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;