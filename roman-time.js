'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var reg = /^([0-9]{2}):([0-9]{2})$/;
    if (!reg.test(time)) {
        throw new TypeError('Неверное время', 'roman-time.js', 10);
    }
    var parseTime = time.match(reg);
    var hour = Number(parseTime[1]);
    var min = Number(parseTime[2]);
    if (hour < 0 || hour > 23 || min < 0 || min > 59) {
        throw new TypeError('Неверное время', 'roman-time.js', 18);
    }
    function convertArabiсToRoman(integer) {
        if (integer === 0) {
            return 'N';
        }
        var romanNumerals = [[1, 'I'], [4, 'IV'], [5, 'V'],
            [9, 'IX'], [10, 'X'], [40, 'XL'], [50, 'L']];
        var roman = '';
        var i = romanNumerals.length - 1;
        while (integer > 0) {
            if (integer >= romanNumerals[i][0]) {
                roman += romanNumerals[i][1];
                integer -= romanNumerals[i][0];
            } else {
                i--;
            }
        }

        return roman;
    }

    return convertArabiсToRoman(hour) + ':' + convertArabiсToRoman(min);
}

module.exports = romanTime;
