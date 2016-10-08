'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (!isCorrectTimeFormat(time)) {
        throw new TypeError('Invalid time');
    }
    var parsedTime = parseTime(time);
    if (!isCorrectHoursRange(parsedTime)) {
        throw new TypeError('Invalid time');
    }
    var hours = convertRomanToArabic(parsedTime[0]);
    var minutes = convertRomanToArabic(parsedTime[1]);
    return hours + ':' + minutes;

}

function parseTime(time) {
    var parsedTime = time.split(':');
    return parsedTime.map( function(e) {
        return Number(e);
    });

}

function isCorrectHoursRange(time) {
    return time[0] >= 0 && time[0] <= 23;

}

function isCorrectTimeFormat(time) {
    return /^[0-2][0-9]:[0-5][0-9]$/.test(time);

}

function convertRomanToArabic(value) {
    if (value === 0) {
        return 'N';
    }
    var arabic = [50, 40, 10, 9, 5, 4, 1];
    var roman = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var result = "";
    for (var i = 0; i < arabic.length && value !== 0; i++) {
        while (value >= arabic[i]) {
            value -= arabic[i];
            result += roman[i];
        }
    }
    return result;

}

module.exports = romanTime;
