'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var parsedTime = checkTime(time);

    return translateToRome(parsedTime[0], parsedTime[1]);
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
    if (num <= 9) {
        romTime += digits[num];
    } else {
        romTime += decade[(Math.floor(num / 10)) - 1];
        if (num % 10 !== 0) {
            romTime += digits[num % 10];
        }
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
    var hours = parseInt(splittedTime[0], 10);
    var min = parseInt(splittedTime[1], 10);
    checkNumb(hours, min);
    checkNaN(hours, min);

    return splittedTime;
}

function checkNaN(hours, min) {
    if (Number.isNaN(hours) || Number.isNaN(min)) {
        throw new TypeError();
    }
}

function checkNumb(hours, min) {
    if (hours >= 24 || hours < 0 || min >= 60 || min < 0) {
        throw new TypeError();
    }
}

function checkNull(time) {
    if (time.Length !== 5 || time === undefined || time === null) {
        throw new TypeError();
    }
}

module.exports = romanTime;
