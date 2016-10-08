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
    var isString = typeof time === 'string' || time instanceof String;

    return isString || time !== null || time !== undefined;
}

function isTimeCorrect(mins, hours) {
    return !isNaN(mins) && !isNaN(hours) && parseInt(mins) === mins && parseInt(hours) === hours;
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
    if (!isTypeOk(time)) {
        throw error;
    }
    time = time.split(':');
    if (time[0] === '' || time[1] === '') {
        throw error;
    }
    var mins = Number(time[1]);
    var hours = Number(time[0]);
    if (!isTimeCorrect(mins, hours) || !isTimeInBounds(mins, hours)) {
        throw error;
    }

    return arabToRoman(hours) + ':' + arabToRoman(mins);
}

module.exports = romanTime;
