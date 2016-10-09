'use strict';

var numbersMap = [
    {arabic: 50, roman: 'L'},
    {arabic: 40, roman: 'XL'},
    {arabic: 10, roman: 'X'},
    {arabic: 9, roman: 'IX'},
    {arabic: 5, roman: 'V'},
    {arabic: 4, roman: 'IV'},
    {arabic: 1, roman: 'I'}
];

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    if (!isCorrectFormat(time)) {
        throw new TypeError('Некорректный формат времни. Ожидался: HH:MM');
    }

    var numbers = time.split(':').map(function (el) {
        return parseInt(el);
    });

    if (!isCorrectTimeRange(numbers[0], numbers[1])) {
        throw new Error('Неверный формат времени. Часы в диапозоне от 0 до 23, минуты от 0 до 59.');
    }
    console.log(numbers);
    var romanTime = numbers.map(convertNumberFromArabicToRoman).join(':');

    return romanTime;
}

function convertNumberFromArabicToRoman(number) {
    if (number === 0) {
        return 'N';
    }

    var romanNumber = '';
    for (var i = 0; i < numbersMap.length && number !== 0; i++) {
        var curr = numbersMap[i];
        while (number >= curr.arabic) {
            romanNumber += curr.roman;
            number -= curr.arabic;
        }
    }

    return romanNumber;
}

function isCorrectFormat(time) {
    if (time.length !== 5 || time[2] !== ':') {
        return false;
    }
    for (var i = 0; i < time.length; i++) {
        if (i !== 2 && isNaN(parseInt(time[i]))) {
            return false;
        }
    }

    return true;
}

function isCorrectTimeRange(hour, minute) {
    return hour >= 0 && hour < 24 && minute >= 0 && minute < 60;
}

module.exports = romanTime;
