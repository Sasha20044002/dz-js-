// Задание #1
// let x = 0;
// let arr = [];

// while (x <= 100) {
// 	x++;
// 	arr.push(x);
// }

// Задание #3
let array = [];

let y = confirm('Вы хотите добавить товар?');

while (y) {
	let u = prompt('Введите цену товара: (в рублях) ')
	array.push(u);
	for (var i = 0; i < array.length; i++) {
		array[i] = Number(array[i]);
	}
	y = confirm('Вы хотите добавить товар?');
}

let summ = array.reduce(function (acc, element) {
	return acc + element;
}, 0);

console.log('Ваша корзина наполнена на сумму: ' + summ + ' руб');
alert('Ваша корзина наполнена на сумму: ' + summ + ' руб');

// Задагие 4

for (var i = 0; i <= 9; i++) {
	console.log(i)
}

// Задание #5
let g = 0;
let array2 = [];

while (g <= 20) {
	g++;
	array2.push('x');
	console.log(array2.join('', ','));
}
