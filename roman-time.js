'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var hours = Number(time.slice(0, 2));
    var minutes = Number(time.slice(3, 5));

    if (!/^(?:[0-2][0-3]|[0-1][0-9]):[0-5][0-9]$/.test(time)) {
       throw new TypeError('Неверное время');
    }

    return getRoman(hours) + ":" + getRoman(minutes);
}

function getRoman(number) {
    if (number === 0) {
        return 'N';
    }

    var ROMAN_DICTIONARY = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XL', 'L'];
    var ARABIAN_DICTIONARY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40, 50];
    var result = '';

    var i = ARABIAN_DICTIONARY.length - 1;

    while (number > 0) {
        if (number >= ARABIAN_DICTIONARY[i]) {
            result = result + ROMAN_DICTIONARY[i];
            number = number - ARABIAN_DICTIONARY[i];
        } else {
            i--;
        }
    }

    return result;
}
module.exports = romanTime;
