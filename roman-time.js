'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function convertDecade(num) {
    if (num === 4) {
        return 'XL';
    }

    return 'L'.repeat(Math.floor(num / 5)) + 'X'.repeat(num % 5);
}

function convertUnits(num) {
    if (num === 9) {
        return 'IX';
    }
    if (num === 4) {
        return 'IV';
    }

    return 'V'.repeat(Math.floor(num / 5)) + 'I'.repeat(num % 5);
}


function convertValue(num) {
    if (num === 0) {
        return 'N';
    }

    return convertDecade(Math.floor(num / 10)) + convertUnits(num % 10);
}

function checkValidMore(num, max, min) {
    return isNaN(num) || num > max || num < min;
}

function checkValid(time) {
    var splitTime = time.split(':');
    var hour = parseInt(splitTime[0]);
    var minute = parseInt(splitTime[1]);
    if (checkValidMore(hour, 23, 0) || checkValidMore(minute, 59, 0)) {
        throw new TypeError('Error');
    }

    return [hour, minute];
}

function romanTime(time) {
    var parsed = checkValid(time);
    var newHour = convertValue(parsed[0]);
    var newMinute = convertValue(parsed[1]);

    return newHour + ':' + newMinute;
}

module.exports = romanTime;
