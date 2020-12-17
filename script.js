// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]');


const button = document.querySelectorAll('button');
// const output = document.querySelector('.output');
const firstNumber = document.querySelector('.previous-operand');

const removeButton = document.querySelector('.delete');
const operationButton = document.querySelector('.operation');
const numberButton = document.querySelectorAll('.number');
const dotButton = document.querySelector('.dot');
const clearButton = document.querySelector('.clear');



//Вывод введенных чисел
numberButton.forEach(function(item) {
    item.addEventListener('click', (e) => {
        firstNumber.prepend(e.target.value);
    })

})

removeButton.addEventListener('click', () => {

})

operationButton.addEventListener('click', () => {

})

dotButton.addEventListener('click', () => {

})

//Очистка поля
clearButton.addEventListener('click', () => {
    number.innerHTML = "";
})


// //Сделать делегирование
// button.forEach(function(item) {
//     item.addEventListener('click', (e) => {



//         } else if (e.target.dataset.clear == 'clear') {
//             clear(firstNumber);
//         } else if (e.target.dataset.delete == 'delete') {
//             console.log(firstNumber.innerHTML);
//             remove(firstNumber.innerHTML);
//         }
//     })

// })



function remove(number) {
    let newElement = number.split('').pop().join('');
    return newElement;
}

function operation(operation) {
    switch (operation) {
        case '+':
            a + b;
            break;
        case '-':
            a - b;
            break;
        case '/':
            a + b;
            break;
        case '*':
            a + b;
            break;
    }
}