const head = document.querySelector('head');
let style = document.createElement('style');
style.textContent = `
.list{
    list-style-type: circle;
}
.bin__list__item, .summ{
    display: flex;
    flex-direction: column;
}
`;
head.append(style);
const item = document.querySelectorAll('.item');
const title = document.querySelectorAll('.title');
const price = document.querySelectorAll('.price');
const btn = document.querySelectorAll('.btn');
const summ = document.querySelector('.summ');
const list = document.querySelector('.bin__list');
const br = document.createElement('br');
let arrayBin = [];
let sumSpan = document.createElement('span');
sumSpan.textContent = 'Ваша корзина пуста';
summ.append(sumSpan);
for (let i = 0; i < btn.length; i++) {
    let itemTitle = btn[i].getAttribute('data-name');
    let itemPrice = btn[i].getAttribute('data-price');
    btn[i].addEventListener('click', function (e) {
        e.preventDefault();
        let itemList = {
            name: itemTitle,
            price: itemPrice,
        }
        arrayBin.push(Number(itemPrice));
        let itemItem = document.createElement('li');
        itemItem.classList.add('bin__list__item');
        list.append(itemItem);
        let itemSpan = document.createElement('span');
        itemSpan.classList.add('bin__list__item__title');
        itemSpan.textContent = itemList.name;
        let itemSpanPrice = document.createElement('span');
        itemSpanPrice.classList.add('bin__list__item__price');
        itemSpanPrice.textContent = itemList.price;
        itemItem.append(itemSpan, itemSpanPrice);
        sumSpan.textContent = 'В вашей корзине ' + arrayBin.length + ' товаров';
        if (arrayBin.length >= 1) {
            let sumBtn = document.createElement('button');
            let sumBtns = document.querySelector('.sum-btns');
            sumBtn.classList.add('summ__btn');
            sumBtn.textContent = 'Подсчитать';
            sumBtns.append(sumBtn);
            summ.append(sumBtns);
            sumBtn.addEventListener('click', function () {
                let sumTotal = arrayBin.reduce(function (acc, elem) {
                    return acc + elem;
                }, 0);
                let sumTotalSpan = document.createElement('span');
                sumTotalSpan.classList.add('sum__price');
                sumTotalSpan.textContent = 'Ваша корзина заполнена на сумму ' + sumTotal;
                summ.append(sumTotalSpan);
            })
        }
    });
}