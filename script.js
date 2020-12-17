// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]');


const button = document.querySelectorAll('button');
// const output = document.querySelector('.output');
const screen = document.querySelector('.screen');
const removeButton = document.querySelector('.delete');
const operationButton = document.querySelectorAll('.operation');
const numberButton = document.querySelectorAll('.number');
const dotButton = document.querySelector('.dot');
const clearButton = document.querySelector('.clear');
const equal = document.querySelector('.equal');

let firstNumber;
let secondNumber;
let flag = false;
let operation;

//Вывод введенных чисел
numberButton.forEach(function (item) {
    item.addEventListener('click', (e) => {
        if (flag) {
            screen.innerHTML = e.target.value;
            flag = false;
        } else {
            screen.append(e.target.value);
        }

    })

})

removeButton.addEventListener('click', () => {
    screen.innerHTML = remove(screen.innerHTML);
})

operationButton.forEach(item => {
    item.addEventListener('click', (e) => {
        operation =  e.target.innerHTML;
        firstNumber = +screen.innerHTML;
        flag = true;
    })
})


dotButton.addEventListener('click', () => {

})

//Очистка поля
clearButton.addEventListener('click', () => {
    screen.innerHTML = "";
})

equal.addEventListener('click', () => {
    switch (operation) {
        case '+': {
           screen.innerHTML =  firstNumber + +screen.innerHTML;
            break;
        }

        case '-': {
            break;
        }

        case '/': {
            break;
        }

        case '*': {
            break;
        }
    }
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
    let newElement = number.slice(0, -1);
    return newElement;
}
 