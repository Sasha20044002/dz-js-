let price = document.querySelectorAll('.block__price');
const add = document.querySelectorAll('.block__add');
let btnSumm = document.querySelector('.summ');
let arrayBacket = [];
let list = document.querySelector('.list');
let total = document.querySelector('.total');

for (var i = 0; i < price.length; i++) {
	let priceAll = price[i];
	for (var i = 0; i < add.length; i++) {
		let addAll = add[i];
		addAll.addEventListener('click', function () {
			let addPrice = addAll.getAttribute('value');
			addPrice = Number(addPrice);
			arrayBacket.push(addPrice);
			list.textContent = arrayBacket.join(' + ', '');
		})
	}
}


btnSumm.addEventListener('click', function () {
	let summ = arrayBacket.reduce(function (acc, elem) {
		return acc + elem
	})
	total.textContent = summ;
})