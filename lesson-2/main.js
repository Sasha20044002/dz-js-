// Задание #1

{
	let a = 1, b = 1, c, d;
	c = ++a; alert(c);           // 2
	d = b++; alert(d);           // 1
	c = (2+ ++a); alert(c);      // 5
	d = (2+ b++); alert(d);      // 4
	alert(a);                    // 3
	alert(b);                    // 3
}

/*
Объяснение:

a = 1, b=1, c - существует, d - существует.
c получает значение => ++a (a сначало увеличилось на 1, потом присвоилось. Теперь a = 2, вместо 1)
d получает значение => b++ (b сначало присвоилось, потом увеличилось, то есть d приняло первоначальное значение b, потом b увеличилось на 1, то есть d = 1, b = 2;)
c получает новое значение => (2+ ++a, как мы знаем из предыдущей операции (++a), a = 2, то есть a снова увеличилось на 1, тем самым стало не 2, а 3 (a = 3) и прибавилось к 2. Теперь c = 5)
d получает новое значение => (2+ b++, как мы знаем из предыдущей операции (b++), b =2, то есть b сначало увеличивается на 2, тем самым d = 4, а b увеличилось на 1. Таким образом, b становится 3, b = 3)

Вывод:
a = 3
b = 3
*/

// Задание #2

{
	var a = 2;
	var x = 1 + (a *= 2);
}

/*
Объяснение:

a = 2, в операции (a *= 2), a умножается на 2 и сразу присваевается, то есть a = 4, затем 1 + а (a = 4) = 5.

Ответ: 5
*/

// Задание #3

{
	{
		a = Number(prompt('Введите число а: '));
		b = Number(prompt('Введите число b: '));

		if (a >= 0 && b >= 0) {
			let c = a - b;
			console.log(c);
		} else if (a <= 0 && b <= 0) {
			let c = a * b;
			console.log(c);
		} else if ((a <= 0 && b >= 0) || (a >= 0 && b <= 0)){
			let c = a + b;
			console.log(c);
		}
	};

	{
		f = prompt('Введите число от 1 до 15');
		switch (f) {
			case 1:
			alert ( 'Ваше число 1');
			break;
			case 2:
			alert ( 'Ваше число 2');
			break;
			case 3:
			alert ( 'Ваше число 3');
			break;
			case 4:
			alert ( 'Ваше число 4');
			break;
			case 5:
			alert ( 'Ваше число 5');
			break;
			case 6:
			alert ( 'Ваше число 6');
			break;
			case 7:
			alert ( 'Ваше число 7');
			break;
			case 8:
			alert ( 'Ваше число 8');
			break;
			case 9:
			alert ( 'Ваше число 9');
			break;
			case 10:
			alert ( 'Ваше число 10');
			break;
			case 11:
			alert ( 'Ваше число 11');
			break;
			case 12:
			alert ( 'Ваше число 12');
			break;
			case 13:
			alert ( 'Ваше число 13');
			break;
			case 14:
			alert ( 'Ваше число 14');
			break;
			case 15:
			alert ( 'Ваше число 15');
			break;
		}
	};

	{
		a = prompt('Введите число а: ');
		b = prompt('Введите число b: ');

		function plus (a, b) {
			return a + b;
		}

		function minec (a, b) {
			return a -b;
		}

		function delenie (a, b) {
			return a / b;
		}

		function umnozh (a, b) {
			return a * b;
		}
	};

	{
		function mathOperation(arg1, arg2, operation) {
			switch (operation) {
				case 'сложение':
				return arg1 + arg2;
				break;
				case 'вычитание':
				return arg1 - arg2;
				break;
				case 'умножение':
				return arg1 * arg2;
				break;
				case 'деление':
				return arg1 / arg2;
				break;
				default:
				alert('Вы не правильно написали операцию. Попробуйте еще раз.')
				break;
			}
		}
	}

		// На объяснение "Сравнение bull и 0", не до конца понял, поэтому не могу ответить.

		{
			function power (val, pow) {
				if (pow == 1) {
					return val;
				} else {
					return val * power(val, pow - 1)
				}
			}

			console.log(power(5, 2));
		}
	}