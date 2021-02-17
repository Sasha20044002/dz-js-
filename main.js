const item = document.querySelectorAll('.item');
const title = document.querySelectorAll('.title');
const price = document.querySelectorAll('.price');
const btn = document.querySelectorAll('.btn');
const list = document.querySelector('.bin__list');
let arrayBin = [];
for (let i = 0; i <= btn.length; i++) {
    let btnAll = btn[i];
    btnAll.addEventListener('click', function (e) {
        e.preventDefault();
        let itemBin = {
            name: title.textContent,
            price: price.textContent,
        }
        arrayBin.push(itemBin.price);
        let listItem = document.createElement('li');
        listItem.classList.add('bin__list__item');
        listItem.style.border = "1px solid black";
        list.append(listItem);
        let itemName = document.createElement('p');
        itemName.textContent = itemBin.name;
        let itemPrice = document.createElement('p');
        itemPrice.textContent = itemBin.price;
    })
}