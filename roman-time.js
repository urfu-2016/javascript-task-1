'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var checkTimeResult = checkTime(time);
    if (!checkTimeResult) {
        throw new TypeError('Неверное время');
    } else {
        var romanHours = toRoman(checkTimeResult[0]);
        var romanMinutes = toRoman(checkTimeResult[1]);
        time = romanHours + ':' + romanMinutes;
    }

    return time;
}

function checkTime(time) {
    if (!time || typeof time !== 'string' || time.length !== 5) {

        return;
    }
    var splitTime = time.split(':');
    var hours = splitTime[0];
    var minutes = splitTime[1];


    if (timeIsNan(hours, minutes)) {

        return;
    }
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);
    if (checkTimeInterval(hours, minutes)) {

        return [hours, minutes];
    }
}

function timeIsNan(hours, minutes) {

    return (isNaN(hours) || isNaN(minutes) || !hours || !minutes || checkTimeParts(hours, minutes));
}

function checkTimeParts(hours, minutes) {
    if (hours.length !== 2 || minutes.length !== 2) {

        return true;
    }
}

function checkTimeInterval(hours, minutes) {

    return !(hours > 23 || hours < 0 || minutes > 59 || minutes < 0);
}

function toRoman(number) {
    if (number === 0) {
        return 'N';
    }
    var decimal = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var numbers = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    return decimal[parseInt(number / 10, 10)] + numbers[number % 10];
}

module.exports = romanTime;
