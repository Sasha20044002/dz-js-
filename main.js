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
.summ-btn{
    width: 150px;
}
`;
head.append(style);
const item = document.querySelectorAll('.item');
const title = document.querySelectorAll('.title');
const price = document.querySelectorAll('.price');
const btn = document.querySelectorAll('.btn');
const summ = document.querySelector('.summ');
const summBtn = document.querySelector('.summ-btn');
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
    });
}

summBtn.addEventListener('click', function () {
    if (arrayBin.length >= 1) {
        let summTotal = arrayBin.reduce(function (acc, elem) {
            return acc + elem;
        })
        let summTotalSpan = document.createElement('span');
        summTotalSpan.textContent = 'Ваша корзина наполнена на ' + summTotal + ' рублей.';
        summTotalSpan.classList.add('summ-total-span');
        summ.append(summTotalSpan);
    }
})