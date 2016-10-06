'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var ROMAN_NUMBERS = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX'
};

function timeHasErrors(hours, minutes) {
    return isNaN(hours) || isNaN(minutes) ||
        hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60;
}

function numberToRoman(number) {
    if (number === 0) {
        return 'N';
    }
    var result = '';
    if (number >= 50) {
        result += 'L';
        number -= 50;
    }
    if (number >= 40) {
        result += 'XL';
        number -= 40;
    }
    while (number >= 10) {
        result += 'X';
        number -= 10;
    }

    return result + ROMAN_NUMBERS[number];
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (typeof(time) !== 'string') {
        throw new TypeError();
    }
    var splitedTime = time.split(':');
    if (splitedTime.length !== 2) {
        throw new TypeError();
    }
    var hours = parseInt(splitedTime[0]);
    var minutes = parseInt(splitedTime[1]);
    if (timeHasErrors(hours, minutes)) {
        throw new TypeError();
    }

    return numberToRoman(hours) + ':' + numberToRoman(minutes);
}

module.exports = romanTime;
