const button = document.querySelectorAll('button');
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
let isSecondNumber = false;
let operation;
let memoryOperation = 0;
let result;

//Вывод введенных чисел
numberButton.forEach(function(item) {
        item.addEventListener('click', (e) => {
            let selectedNumber = e.target.value;
            if (screen.innerHTML.length < 16) {
                if (screen.innerHTML === '0') {
                    screen.innerHTML = selectedNumber;
                } else {
                    if (isSecondNumber) {
                        screen.innerHTML = selectedNumber;
                        isSecondNumber = false;
                    } else {
                        screen.append(selectedNumber);
                    }
                }
            }
        })

    })
    //Конвертирует отрицательное в положительное, и положительное в отрицательное
convertor.addEventListener('click', () => {
    screen.innerHTML = -screen.innerHTML;
})

removeButton.addEventListener('click', () => {
    screen.innerHTML = remove(screen.innerHTML);
})

operationButton.forEach(item => {
    item.addEventListener('click', (e) => {
        firstNumber = +screen.innerHTML;
        operation = e.target.innerHTML;
        isSecondNumber = true;
    })
})

dotButton.addEventListener('click', (e) => {
    if (e.target.innerHTML == '.' && screen.innerHTML.includes('.')) {
        return;
    }

    //Добавляем 0. перед число, в случае если сразу нажали . 
    screen.innerHTML = screen.innerHTML + e.target.innerHTML;
    isSecondNumber = false;
})

//Очистка поля
clearButton.addEventListener('click', () => {
    screen.innerHTML = '0';
    result = 0;
})

equal.addEventListener('click', (e) => {
    if (result) {
        return;
    }
    switch (operation) {
        case '+':
            result = firstNumber + +screen.innerHTML;
            break;
        case '-':
            result = firstNumber - +screen.innerHTML;
            break;
        case '/':
            result = firstNumber / (+screen.innerHTML);
            if (result === 'Infinity') {
                result = 'На ноль делить нельзя';
            }
            break;
        case '*':
            result = firstNumber * (+screen.innerHTML);
            break;
    }
    screen.innerHTML = result;

})

function remove(number) {
    return number.slice(0, -1) || 0;
}