'use strict';

/*
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var ROMAN_NUMERALS = ["I", "IV", "V", "IX", "X", "XL", "L"];
var ARABIC_NUMERALS = [1, 4, 5, 9, 10, 40, 50];

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (typeof time !== 'string') {
        throw new TypeError();
    }
    if (!isValidString) {
        throw new TypeError();
    }
    var splitedTime = time.split(':');

    var hour = convertNumber(splitedTime[0], 23);
    var minute = convertNumber(splitedTime[1], 59);

    return hour + ':' + minute;

}
function convertNumber(number, maxValue) {

    number = parseInt(number, 10);
    if (number === 0) {
        return 'N';
    }
    if (number > maxValue || number < 0) {
        throw new TypeError();
    }

    return romanNumeral(number);
}

function romanNumeral(arabicNumeral) {

    var position = ARABIC_NUMERALS.length - 1;
    var romNumeral = '';

    while (arabicNumeral > 0) {
        if (arabicNumeral >= ARABIC_NUMERALS[position]) {
            romNumeral += ROMAN_NUMERALS[position];
            arabicNumeral -= ARABIC_NUMERALS[position];
        } else {
            position--;
        }
    }

    return romNumeral;
}

function isValidString(time) {
    var regexp = /^\d{2}:\d{2}$/;

    return regexp.test(time);
}

module.exports = romanTime;
