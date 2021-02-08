let number = 245; // prompt('Введите число: ') - Если использовать с HTML файлом.
let digital = {
    number: number,
    units: 0,
    tens: 0,
    hundreds: 0,
};

if (digital.number <= 9) {
    digital.units = digital.number;
} else if (digital.number <= 999) {
    digital.units = Math.floor(digital.number % 10);
    digital.tens = Math.floor(digital.number / 10 % 10);
    digital.hundreds = Math.floor(digital.number / 100 % 10);
} else {
    digital.number = 0;
    console.log('Число больше чем 999 и мы не можем его разложить на сотни, десятки и единицы. Повторите попытку перезагрузив страницу.');
}

console.log(digital);