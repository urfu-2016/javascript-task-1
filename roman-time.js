'use strict';

/**
 * @param {number} num – число, в арабской системе
 * @returns {String} – строку римских цифр
 */
function toRoman(num) {
    var arab = [1, 4, 5, 9, 10, 40, 50];
    var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    var j = arab.length - 1;
    var res = '';
    if (num === 0) {
        res = 'N';
    }
    while (num > 0) {
        if (num >= arab[j]) {
            res += roman[j];
            num -= arab[j];
        }
        else { j--; }
    }
    return res;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var strs = time.split(':');
    var numTime = [parseInt(strs[0], 10), parseInt(strs[1], 10)];
    if (numTime[0].isNaN || numTime[1].isNaN || numTime[0] * numTime[1] < 0
      || numTime[0] > 23 || numTime[1] > 59) {
        throw new TypeError('Неверное время');

        return NaN;
    }
    time = toRoman(numTime[0]) + ':' + toRoman(numTime[1]);

    return time;
}
module.exports = romanTime;
