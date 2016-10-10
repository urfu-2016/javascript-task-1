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
    var arrHM = time.split(':');
    var hours = parseInt(arrHM[0], 10);
    var min = parseInt(arrHM[1], 10);
    if (hours < 24 && min < 60 && arrHM[0].length === 2 && arrHM[1].length === 2 && time.length < 6) {
        hours = convertToRomanNum(hours);
        min = convertToRomanNum(min);
        time = hours + ':' + min;

        return time;
    }
    throw new TypeError('Неверное время');
}

module.exports = romanTime;
