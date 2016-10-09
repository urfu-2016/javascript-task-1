'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var partsTime = time.split(':');
    var hours = parseInt(partsTime[0], 10);
    var minutes = parseInt(partsTime[1], 10);

    if (typeof hours !== 'number' || typeof minutes !== 'number' ||
        partsTime[0].length !== 2 || partsTime[1].length !== 2 ||
        hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60) {
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
