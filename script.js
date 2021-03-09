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
let result;
const MAX_SCREEN_LENGTH = 16;

//Вывод введенных чисел
numberButton.forEach(function(item) {
        item.addEventListener('click', (e) => {
            let selectedNumber = e.target.value;
            if (screen.innerHTML.length < MAX_SCREEN_LENGTH) {
                if (screen.innerHTML === '0') {
                    screen.innerHTML = selectedNumber;
                    firstNumber = selectedNumber;
                } else {
                    if (isSecondNumber) {
                        screen.innerHTML = selectedNumber;
                        secondNumber = selectedNumber;
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
    if (result) {
        screen.innerHTML = "";
    }

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
})

equal.addEventListener('click', (e) => {

    switch (operation) {
        case '+':
            result = firstNumber + +secondNumber;
            break;
        case '-':
            result = firstNumber - +secondNumber;
            break;
        case '/':
            result = firstNumber / +secondNumber;
            if (result === 'Infinity') {
                result = 'На ноль делить нельзя';
            }
            break;
        case '*':
            result = firstNumber * +secondNumber;
            break;
    }
    console.log(result);
    screen.innerHTML = result;
})

function remove(number) {
    return number.slice(0, -1) || 0;
}