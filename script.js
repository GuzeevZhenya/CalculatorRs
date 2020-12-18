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
const convertor = document.querySelector('.convertor');

let firstNumber;
let secondNumber;
let flag = false;
let operation;

//Вывод введенных чисел
numberButton.forEach(function(item) {
        item.addEventListener('click', (e) => {
            if (screen.innerHTML === '0') {
                screen.innerHTML = e.target.value;
            } else {
                if (flag) {
                    screen.innerHTML = e.target.value;
                    flag = false;
                } else {
                    screen.append(e.target.value);
                }
            }
        })
    })
    //Конвертирует отрицательное в положительное, и положительное в отрицательное
convertor.addEventListener('click', () => {
    if (screen.innerHTML > 0) {
        screen.innerHTML = -screen.innerHTML;
    } else {
        screen.innerHTML = -(screen.innerHTML);
    }
})

removeButton.addEventListener('click', () => {
    screen.innerHTML = remove(screen.innerHTML);
})

operationButton.forEach(item => {
    item.addEventListener('click', (e) => {
        operation = e.target.innerHTML;
        firstNumber = +screen.innerHTML;
        flag = true;
    })
})


dotButton.addEventListener('click', (e) => {
    console.log(screen.innerHTML);
    if (e.target.innerHTML == "." && screen.innerHTML.includes('.'))
        return;
    //Добавляем 0. перед число, в случае если сразу нажали . 
    screen.innerHTML = '0' + screen.innerHTML + e.target.innerHTML;
})

//Очистка поля
clearButton.addEventListener('click', () => {
    screen.innerHTML = "";
})

equal.addEventListener('click', () => {
    switch (operation) {
        case '+':
            screen.innerHTML = firstNumber + +screen.innerHTML;
            break;
        case '-':
            screen.innerHTML = firstNumber - +screen.innerHTML;
            break;
        case '/':
            screen.innerHTML = firstNumber / +screen.innerHTML;
            break;
        case '*':
            screen.innerHTML = firstNumber * +screen.innerHTML;
            break;
    }
})


function remove(number) {
    return number.slice(0, -1) || 0;

}