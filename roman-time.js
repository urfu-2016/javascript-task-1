'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var arabianNumbers = [50, 40, 10, 9, 5, 4, 1];
var romanNumbers = ["L", "XL", "X", "IX", "V", "IV", "I"];

function romanTime(time) {
    var arr = time.split(':');
    var hours = parseInt(arr[0], 10);
    var minutes = parseInt(arr[1], 10);

    if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0) {
        throw new TypeError('Неверное время');
    }

    return toRoman(hours) + ':' + toRoman(minutes);
}

function toRoman(number) {
    if (number === 0) {
        return "N";
    }

    var result = '';

    for (var i = 0; i < arabianNumbers.length; i++) {
        if (number >= arabianNumbers[i]) {
            number -= arabianNumbers[i];
            result += romanNumbers[i];
            i = 0;
        }
    }

    return result;
}

module.exports = romanTime;
