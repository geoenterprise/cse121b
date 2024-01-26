/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
let addNumber = Number(document.querySelector('add1').value);
document.querySelector('#sum').value = add(addNumber1, addNumber2);
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2
}
let subtractNumbers = Number(document.querySelector('subtract1').value);
document.querySelector('#subtract').value = subtract(subtractNumber1, subtractNumber2);
document.querySelector('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

/* Event Listener for Multiply Numbers */
document.querySelector('#multiplyNumbers').addEventListener('click', function () {
    // Get the input values
    let factor1 = Number(document.querySelector('#factor1').value) || 0;
    let factor2 = Number(document.querySelector('#factor2').value) || 0;

    // Performing multiplication and displaying the result
    document.querySelector('#product').value = multiply(factor1, factor2);
});

/* Open Function Use - Divide Numbers */
const devide = (x, y) => x/y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient.toFixed(2);
};
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal() {
    //input
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    //processing
    if (document.getElementById("member").checked) {
        subtotal =subtotal - subtotal * 0.2; //20% discount
    }
    //output
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getTotal);
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById("array") = numbersArray
/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
