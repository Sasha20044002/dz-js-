// Задание 1

const head = document.querySelector('head');
let style = document.createElement('style');
head.append(style);
style.textContent = `
*{
    padding: 0;
    margin: 0;
    font-family: sans-serif;
}

body {
    margin: 20px;
    display: flex;
    flex-direction: column;
}

.item{
    border: 1px solid #000;
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 10px;
}

.btn{
    width: 150px;
}

.count {
    width: 100px;
}

.place{
    border: 1px solid #000;
    width: 600px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.desk{
    width: 450px;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #000;
    position: relative;
}

.square{
    width: 50px;
    height: 50px;
}

.black{
    background-color: #000;
}

.vertical{
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    left: -30px;
}

.row {
    width: 420px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: -40px;
    left: 10px;
}
`;
const body = document.querySelector('body');
const place = document.createElement('div');
body.append(place);
place.classList.add('place');
const desk = document.createElement('div');
place.append(desk);
desk.classList.add('desk');
for (var i = 1; i <= 63; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('data-order', i);
    desk.append(square);
    let order = square.getAttribute('data-order');
    order = Number(order);
    if ((order % 2) === 0) {
        square.classList.add('black');
    }
}
const vertical = document.createElement('div');
vertical.classList.add('vertical');
desk.append(vertical);
for (var i = 1; i <= 7; i++) {
    let numbers = document.createElement('span');
    vertical.append(numbers);
    numbers.textContent = i;
    numbers.style.fontSize = '32px';
}
const row = document.createElement('div');
row.classList.add('row');
desk.append(row);
for (var i = 1; i <= 9; i++) {
    let letters = document.createElement('span');
    letters.setAttribute('data-letter', i);
    row.append(letters);
    let numLetter = letters.getAttribute('data-letter');
    if (numLetter == 1) {
        letters.textContent = 'A';
    } else if (numLetter == 2) {
        letters.textContent = 'B';
    } else if (numLetter == 3) {
        letters.textContent = 'C';
    } else if (numLetter == 4) {
        letters.textContent = 'D';
    } else if (numLetter == 5) {
        letters.textContent = 'E';
    } else if (numLetter == 6) {
        letters.textContent = 'F';
    } else if (numLetter == 7) {
        letters.textContent = 'G';
    } else if (numLetter == 8) {
        letters.textContent = 'H';
    } else if (numLetter == 9) {
        letters.textContent = 'I';
    }
    letters.style.fontSize = '32px';
}

// Задание 2
const bin = document.querySelector('.bin');
let arrayBin = [];
let binStroke = document.createElement('span');
bin.append(binStroke);
let item = document.querySelectorAll('.item');
const btn_1 = document.querySelectorAll('.btn')[0];
const btn_2 = document.querySelectorAll('.btn')[1];
const btn_3 = document.querySelectorAll('.btn')[2];
let n = 0;
btn_1.addEventListener('click', () => {
    let price = btn_1.getAttribute('data-price');
    price = Number(price);
    arrayBin.push(price);
    n++;
})
btn_2.addEventListener('click', () => {
    let price = btn_2.getAttribute('data-price');
    price = Number(price);
    arrayBin.push(price);
    n++;
})
btn_3.addEventListener('click', () => {
    let price = btn_3.getAttribute('data-price');
    price = Number(price);
    arrayBin.push(price);
    n++;
})
const count = document.querySelector('.count');
count.addEventListener('click', function () {
    let m = arrayBin.reduce(function (acc, elem) {
        return acc + elem;
    }, 0)
    if (arrayBin.length >= 1) {
        binStroke.textContent = 'В корзине: ' + n + ' товаров на сумму ' + m + ' рублей'
    } else {
        binStroke.textContent = 'Корзина пуста';
    }
})