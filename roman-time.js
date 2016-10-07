'use strict';

var smallDigits = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var bigDigits = [[50, 'L'], [40, 'XL'], [10, 'X']];

function toRoman(number) {
    var result = '';
    if (number % 10 !== 0 || number === 0) {
        result += smallDigits[number % 10];
    }

    for (var i = 0; i < bigDigits.length; i++) {
        var tens = Math.floor(number / bigDigits[i][0]);
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
    if (!/^(?:[0-2][0-3]|[0-1][0-9]):[0-5][0-9]$/.test(time)) {
        throw new TypeError();
    }

    var parts = time.split(':');
    var hours = parseInt(parts[0]);
    var minutes = parseInt(parts[1]);
    var romanHours = toRoman(hours);
    var romanMinutes = toRoman(minutes);

    return romanHours + ':' + romanMinutes;
}

module.exports = romanTime;
