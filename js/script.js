"use strict";


const buttonMultiply = document.getElementById('multiply');
const buttonDevide = document.getElementById('devide');
const result = document.getElementById('result');
buttonMultiply.addEventListener('click', () => {
    const firstNumber = document.getElementById('first_number').value;
    const secondNumber = document.getElementById('second_number').value;
    let answer = firstNumber*secondNumber;
    result.innerHTML = answer
}
)
buttonDevide.addEventListener('click', () => {
    const firstNumber = document.getElementById('first_number').value;
    const secondNumber = document.getElementById('second_number').value;
    let answer = firstNumber/secondNumber;
    result.innerHTML = answer
}
)


