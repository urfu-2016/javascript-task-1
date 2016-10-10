'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var UNITS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var TENS = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
var TIME_PATTERN = /^(([0-1][0-9])|(2[0-3])):[0-5][0-9]$/;

function romanTime(time) {
    time = String(time);
    if (!TIME_PATTERN.test(time)) {
        throw new TypeError();
    }

    var romanNumbers = time.split(':')
    .map(Number)
    .map(toRoman);

    return romanNumbers.join(':');
}

function toRoman(number) {
    if (number === 0) {
        return 'N';
    }

    return TENS[Math.floor(number / 10)] + UNITS[number % 10];
}

module.exports = romanTime;
