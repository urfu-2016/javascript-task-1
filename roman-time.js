'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var parsedTime = checkTime(time);
    var hours = parseInt(parsedTime[0], 10);
    var min = parseInt(parsedTime[1], 10);

    return translateToRome(hours, min);
}

function translateToRome(hours, min) {
    var romHours = calculate(hours);
    var romMin = calculate(min);
    var time = romHours + ':' + romMin;

    return time;
}

function calculate(num) {
    var digits = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var decade = ['X', 'XX', 'XXX', 'XL', 'L'];
    var romTime = '';
    if (num === 0) {
        romTime += 'N';

        return romTime;
    }
    var dec = Math.floor(num / 10);
    var dig = num % 10;
    if (dec > 0) {
        romTime += decade[dec - 1];
    }
    if (dig > 0) {
        romTime += digits[dig];
    }

    return romTime;
}

function checkTime(time) {
    checkNull(time);
    if (!time.includes(':')) {
        throw new TypeError();
    }
    var splittedTime = time.split(':');
    if (splittedTime.Length > 2) {
        throw new TypeError();
    }
    checkNumb(splittedTime[0], splittedTime[1]);
    checkNaN(splittedTime[0], splittedTime[1]);

    return splittedTime;
}

function checkNaN(hours, min) {
    if (Number.isNaN(hours) || Number.isNaN(min)) {
        throw new TypeError();
    }
}

function checkNumb(hours, min) {
    if (hours > 23 || hours < 0 || min > 59 || min < 0) {
        throw new TypeError();
    }
}

function checkNull(time) {
    if (time.Length !== 4 || time === undefined || time === null) {
        throw new TypeError();
    }
}

module.exports = romanTime;
