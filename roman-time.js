'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (typeof time !== 'string') {
        throw new TypeError('Неверное время');
    }

    var arr = time.split(':');

    if (arr.length > 2) {
        throw new TypeError('Неверное время');
    }

    var hours = Number(arr[0]);
    var minutes = Number(arr[1]);

    if ((isNaN(hours)) || (isNaN(minutes)) || isWrongTime(hours, minutes)) {
        throw new TypeError('Неверное время');
    }

    return convertToRoman(hours) + ':' + convertToRoman(minutes);
}

function isWrongTime(hours, minutes) {
    return (hours !== parseInt(hours)) || (minutes !== parseInt(minutes)) ||
        (hours < 0) || (hours > 23) || (minutes < 0) || (minutes > 59);
}

function convertToRoman(number) {
    if (number === 0) {
        return 'N';
    }

    var tens = parseInt(number / 10);
    var ones = number % 10;
    var romanTens = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var romanOnes = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    return romanTens[tens] + romanOnes[ones];
}

module.exports = romanTime;
