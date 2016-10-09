'use strict';

var roman = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
var arab = [50, 40, 10, 9, 5, 4, 1];

function arabToRoman(num) {
    if (num === 0) {
        return 'N';
    }
    var result = '';
    for (var i = 0; i < arab.length; i++) {
        while (num % arab[i] < num) {
            result += roman[i];
            num -= arab[i];
        }
    }

    return result;
}

function isString(time) {
    var isNullOrUndefined = time === null || time === undefined;

    return typeof time === 'string' || time instanceof String || !isNullOrUndefined;
}

function isTimeInBounds(hours, mins) {
    return mins >= 0 && mins < 60 && hours >= 0 && hours < 24;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var error = new TypeError('Неверное время');
    if (!isString(time)) {
        throw error;
    }

    time = time.match(/^(\d{2}):(\d{2})$/);
    if (time === null || time[1] === undefined || time[2] === undefined) {
        throw error;
    }

    var mins = Number(time[2]);
    var hours = Number(time[1]);
    if (!isTimeInBounds(hours, mins)) {
        throw error;
    }

    return arabToRoman(hours) + ':' + arabToRoman(mins);
}

module.exports = romanTime;
