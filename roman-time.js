'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    checkTime(time);
    var parsedTime = time.split(':');
    var hours = parseInt(parsedTime[0], 10);
    var min = parseInt(parsedTime[1], 10);
    var digits = ["N", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var decade = ["X", "XX", "XXX", "XL", "L"];
    var romTime;
    return time;
}

function checkTime(time) {
    checkNull(time);
    if (!time.includes(':')) {
        throw new TypeError();
    }
    var splittedTime = time.split(':');
    checkNumb(splittedTime[0], splittedTime[1]);
    checkNaN(splittedTime[0], splittedTime[1]);
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
    if (time.Length > 5 || time === undefined || time === null) {
        throw new TypeError();
    }  
}

module.exports = romanTime;
