'use strict';

var smallDigits = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var bigDigits = [[50, 'L'], [40, 'XL'], [10, 'X']];

function toRoman(number) {
    var result = '';
    if (number % 10 !== 0 || number === 0) {
        result += smallDigits[number % 10];
    }

    for (var i in bigDigits) {
        var tens = number / bigDigits[i][0] >> 0;
        for (var j = 0; j < tens; j++) {
            result = bigDigits[i][1] + result;
        }
        number %= bigDigits[i][0];
    }

    return result;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var parts = time.split(':');
    if (parts.length !== 2) {
        throw new TypeError();
    }

    var hours = parseInt(parts[0]);
    var minutes = parseInt(parts[1]);

    if (isNaN(hours) || isNaN(minutes) ||
        hours < 0 || hours > 23 ||
        minutes < 0 || minutes > 59) {
        throw new TypeError();
    }

    return toRoman(hours) + ':' + toRoman(minutes);
}

module.exports = romanTime;
