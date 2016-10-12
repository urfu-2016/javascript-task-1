'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var tokens = time.split(':');

    var hours = parseInt(tokens[0], 10);
    var minutes = parseInt(tokens[1], 10);

    if (checkHours(hours) || checkMinutes(minutes)) {
        throw new Error('TypeError: Неверное время');
    }

    return toRoman(hours) + ':' + toRoman(minutes);
}

function checkHours(hours) {
    return isNaN(hours) || hours < 0 || hours > 23;
}

function checkMinutes(minutes) {
    return isNaN(minutes) || minutes < 0 || minutes > 60;
}

function toRoman(number) {
    var ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];
    var zero = 'N';

    var result = '';
    result += ones[number % 10];
    result += tens[(number / 10) % 10];

    if (result === '') {
        result = zero;
    }

    return result;
}

module.exports = romanTime;
