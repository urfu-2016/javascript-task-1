'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (time.Length > 5 || time === undefined || time === null) {
        throw new TypeError();
    }
    if (!time.includes(':'))
        throw new TypeError();
    var parsedTime = time.split(':');
    var hours = parseInt(parsedTime[0], 10);
    var min = parseInt(parsedTime[1], 10);
    if (Number.isNaN(hours) || Number.isNaN(min)) {
        throw new TypeError();
    }
    if (hours > 23 || hours < 0 || min > 59 || min <0) {
        throw new TypeError()
    }
    var digits = ["N", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var decade = ["X", "XX", "XXX", "XL", "L"];
    var romTime;
    return romTime;
}

module.exports = romanTime;
