'use strict';
function convertToRomanNum(num) {
    var rN = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    var rNty = ['X', 'XX', 'XXX', 'XL', 'L'];
    if (num < 11) {
        num = rN[num];
    } else {
        var tempNum = rNty[(num - num % 10) / 10 - 1];
        if (num % 10 !== 0) {
            num = tempNum + rN[num % 10];
        }
    }

    return num;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var arrHoursMin = time.split(':');
    var hours = parseInt(arrHoursMin[0], 10);
    var min = parseInt(arrHoursMin[1], 10);
    if (hours < 24 && min < 60 && arrHoursMin[0].length === 2 && arrHoursMin[1].length === 2 && arrHoursMin.length === 2) {
        hours = convertToRomanNum(hours);
        min = convertToRomanNum(min);
        time = hours + ':' + min;

        return time;
    }
    throw new TypeError('Неверное время');
}

module.exports = romanTime;
