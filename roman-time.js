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
    if (!time || typeof time !== 'string') {

        return;
    }
    var splitTime = time.split(':');
    var hours = splitTime[0];
    var minutes = splitTime[1];

    if (isNaN(hours) || isNaN(minutes) || !hours || !minutes) {

        return;
    }
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    if (checkTimeInterval(hours, minutes)) {

        return [hours, minutes];
    }
}

function checkTimeInterval(hours, minutes) {

    return !(hours > 23 || hours < 0 || minutes > 59 || minutes < 0);
}

function toRoman(number) {
    if (number === 0) {
        return 'N';
    }
    var roman = '';
    var ARABIC_NUMBERS = [50, 40, 10, 9, 5, 4, 1];
    var ROMAN_NUMBERS = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i <= ARABIC_NUMBERS.length; i++) {
        while (number % ARABIC_NUMBERS[i] < number) {
            roman += ROMAN_NUMBERS[i];
            number -= ARABIC_NUMBERS[i];
        }
    }

    return roman;
}

module.exports = romanTime;
