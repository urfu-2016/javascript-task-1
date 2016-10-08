'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var ARABIAN_NUMBERS = [50, 40, 10, 9, 5, 4, 1];
var ROMAN_NUMBERS = ["L", "XL", "X", "IX", "V", "IV", "I"];

function romanTime(time) {
    var arr = time.split(':');
    var hours = parseInt(arr[0], 10);
    var minutes = parseInt(arr[1], 10);

    if (hours > 23 || hours < 0 ||
        minutes > 59 || minutes < 0 ||
        arr.length !== 2) {
        throw new TypeError('Неверное время');
    }

    return toRoman(hours) + ':' + toRoman(minutes);
}

function toRoman(number) {
    number = parseInt(number, 10);
    var result = '';

    if (number === 0) {
        return "N";
    }

    for (var i = 0; i < ARABIAN_NUMBERS.length; i++) {
        if (number >= ARABIAN_NUMBERS[i]) {
            number -= ARABIAN_NUMBERS[i];
            result += ROMAN_NUMBERS[i];
            i = 0;
        }
    }

    return result;
}

module.exports = romanTime;
