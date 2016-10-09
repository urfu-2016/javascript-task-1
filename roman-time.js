'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (!time) {
        throw new TypeError('Неверное время');
    }
    var splitTime = time.split(':');
    var hours = splitTime[0];
    var minutes = splitTime[1];
    if (isNaN(hours) || isNaN(minutes)) {
        throw new TypeError('Неверное время');
    } else {
        hours = parseInt(hours);
        minutes = parseInt(minutes);
    }
    if (((hours >= 0) && (hours < 24)) && ((minutes >= 0) && (minutes < 60))) {
        var romanHours = toRoman(hours);
        var romanMinutes = toRoman(minutes);
        time = romanHours + ':' + romanMinutes;
    } else {
        throw new TypeError('Неверное время');
    }

    return time;
}

function toRoman(number) {
    if (number === 0) {
        return 'N';
    }
    var roman = '';
    var ARABIC_NUMBERS = [50, 40, 10, 9, 5, 4, 1];
    var ROMAN_NUMBERS = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < ARABIC_NUMBERS.length; i++) {
        while (number >= ARABIC_NUMBERS[i]) {
            roman += ROMAN_NUMBERS[i];
            number -= ARABIC_NUMBERS[i];
        }
    }

    return roman;
}

module.exports = romanTime;
