'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    var hour = null;
    var minute = null;
    var arrayOfTime = time.split(':');
    var hourArab = parseInt(arrayOfTime[0], 10);
    var minArab = parseInt(arrayOfTime[1], 10);
    if (isNaN(hourArab) || hourArab > 23 || hourArab < 0 || isNaN(minArab) || minArab > 59 || minArab < 0) {
        throw new TypeError('Неверное время');
    }
    if (hourArab === 0) {
        hour = 'N';
    } else {
        hour = parseNumber(hourArab);
    }
    if (minArab === 0) {
        minute = 'N';
    } else {
        minute = parseNumber(minArab);
    }
    time = hour + ':' + minute;

    return time;
}

function parseNumber(num) {
    var arabic = [1, 4, 5, 9, 10, 40, 50];
    var romanic = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    var roman = '';
    var index = arabic.length -1;
    while (num !== 0) {
        if (num >= arabic[index]) {
            num -= arabic[index];
            roman += romanic[index];
        } else {
            index--;
        }
    }

    return roman;
}

module.exports = romanTime;
