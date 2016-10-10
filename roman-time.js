'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (!isTimeFormatCorrect(time)) {
        throwError(8, time);
    }
    var timeParts = time.split(':');
    if (isNaN(timeParts[0]) || isNaN(timeParts[1])) {
        throwError(12, time);
    }
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    if (isTimeOutOfRange(hours, minutes)) {
        throwError(17, time);
    }

    return getRomanRepresentation(hours) + ':' + getRomanRepresentation(minutes);
}

function isTimeFormatCorrect(time) {
    var timeNotEmpty = time !== null && time !== undefined;
    var isTimeCorrect = typeof time === 'string' && time.indexOf(':') !== -1;

    return timeNotEmpty && isTimeCorrect;
}

function isTimeOutOfRange(hours, minutes) {
    return (hours < 0 || hours > 23 || minutes < 0 || minutes > 59);
}

function throwError(line, incomingData) {
    throw new TypeError('incorrect data(' + line + '): ' + incomingData);
}

var romanDigits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function getRomanRepresentation(number) {
    if (number === 0) {
        return 'N';
    }
    var result = '';
    if (parseInt((number / 50)) > 0) {
        result += 'L';
    }
    number = number % 50;
    var xDigitsCount = parseInt(number / 10);
    if (xDigitsCount === 4) {
        result = 'XL';
    } else {
        for (var i = 1; i <= xDigitsCount; i++) {
            result += 'X';
        }
    }
    result += romanDigits[number % 10];

    return result;
}

module.exports = romanTime;
