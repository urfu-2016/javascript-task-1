'use strict';

var magicDigits = [50, 40, 10, 9, 5, 4, 1];
var dict = { 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I' };

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    if (isCorrect(time)) {
        return toRoman(time.split(':')[0]) + ':' + toRoman(time.split(':')[1]);
    }
    throw new TypeError('Неверное время', 'roman-time.js', 16);
}

function isCorrect(time) {
    return (typeof(time) === 'string' && inRange(time));
}

function inRange(time) {
    var hour = parseInt(time.split(':')[0]);
    var minute = parseInt(time.split(':')[1]);

    return (!isNaN(hour) && !isNaN(minute) &&
        hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59);
}

function toRoman(digit) {
    digit = parseInt(digit);
    var str = '';

    magicDigits.forEach(function (current) {
        if (digit >= current) {
            var a = parseInt(digit / current);
            digit -= a * current;
            str += dict[current].repeat(a);
        }
    });

    return str === '' ? 'N' : str;
}

module.exports = romanTime;
