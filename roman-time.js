'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanNumber(number) {
    var ROMAN_NUMERALS = { 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I' };
    var result = '';
    var numerals = Object.keys(ROMAN_NUMERALS);
    numerals = numerals.sort(
        function (a, b) {
            return b - a;
        }
    );
    if (number === 0) {
        return 'N';
    }
    var i;
    for (i = 0; i < numerals.length; i++) {
        while (numerals[i] <= number) {
            result += ROMAN_NUMERALS[numerals[i]];
            number -= numerals[i];
        }
    }

    return result;
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var formatCheck = /^[0-2][0-9]:[0-5][0-9]$/.test(time);
    if (!formatCheck) {
        throw new TypeError('Неверное время');
    }
    var timeArray = time.split(':');
    var hours = parseInt(timeArray[0], 10);
    var minutes = parseInt(timeArray[1], 10);
    var hoursCheck = hours <= 23 && hours >= 0;
    if (hoursCheck) {
        return romanNumber(hours) + ':' + romanNumber(minutes);
    }
    throw new TypeError('Неверное время');
}

module.exports = romanTime;
