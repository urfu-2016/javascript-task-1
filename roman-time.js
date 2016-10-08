'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function convertNumber(arabicNumber) {
    var FIRST_DIGITS = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var SECONDS_DIGITS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VII', 'IX', 'X'];
    if (arabicNumber === 0) {
        return ('N');
    }

    return FIRST_DIGITS[Math.floor(arabicNumber / 10)] + SECONDS_DIGITS[arabicNumber % 10];
}

function checkTime(time, up, down, message) {
    if (time === undefined || time >= up || time < down) {
        throw new TypeError(message);
    }
}

function romanTime(time) {
    var timeGroups = time.split(':');

    if (timeGroups === null || timeGroups.length !== 2) {
        throw new TypeError('строка не является временем');
    }
    var hours = parseInt(timeGroups[0]);
    var minutes = parseInt(timeGroups[1]);
    checkTime(hours, 24, 0, 'часы вне корректного диапозона');
    checkTime(minutes, 60, 0, 'минуты вне корректного диапозона');

    return convertNumber(hours) + ':' + convertNumber(minutes);
}

module.exports = romanTime;
