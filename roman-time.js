'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    checkTime(time);
    if (!time.includes(':')) {
        throw new TypeError();
    }
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
    checkNumb(time);
    checkNaN(time);
}

function checkNaN(time) {
    if (Number.isNaN(hours) || Number.isNaN(min)) {
        throw new TypeError();
    }
}

function checkNumb(time) {
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
