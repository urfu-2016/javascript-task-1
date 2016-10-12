'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var timeArray = time.split(':');
    var hours = filterInt(timeArray[0]);
    var minutes = filterInt(timeArray[1]);
    if (isItNaN(hours) + isItNaN(minutes) +
        Number(isCorrectHour(hours)) + Number(isCorrectMinute(minutes)) === 4) {
        return convert(hours) + ':' + convert(minutes);
    }

    return new TypeError('Время указано неверно!');
}
function filterInt(value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
        return Number(value);
    }

    return NaN;
}
function convert(numb) {
    var arabArray = [1, 4, 5, 9, 10, 40, 50];
    var romArray = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    if (numb === 0) {
        return 'N';
    }
    var result = '';
    var n = arabArray.length - 1;
    while (numb > 0) {
        if (numb >= arabArray[n]) {
            result += romArray[n];
            numb -= arabArray[n];
        } else {
            n--;
        }
    }

    return result;
}
function isItNaN(value) {
    if (Number.isNaN(value) === true) {
        return 0;
    }

    return 1;
}
function isCorrectHour(value) {
    if (value >= 24 || value < 0) {
        return 0;
    }

    return 1;
}
function isCorrectMinute(value) {
    if (value > 59 || value < 0) {
        return 0;
    }

    return 1;
}
module.exports = romanTime;
