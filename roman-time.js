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

function isTypeOk(time) {
    return typeof time === 'string' || time instanceof String;
}

function isTimeNaN(mins, hours) {
    return isNaN(mins) || isNaN(hours);
}

function isTimeInBounds(mins, hours) {
    return mins >= 0 && mins < 60 && hours >= 0 && hours < 24;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var error = new TypeError('Неверное время');
    if (time === null || time === undefined || !isTypeOk(time)) {
        throw error;
    }
    time = time.split(':');
    var mins = Number(time[1]);
    var hours = Number(time[0]);
    if (isTimeNaN(mins, hours) || !isTimeInBounds(mins, hours)) {
        throw error;
    }

    return arabToRoman(hours) + ':' + arabToRoman(mins);
}

module.exports = romanTime;
