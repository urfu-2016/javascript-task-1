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
    if (((hours >= 0) && (hours < 24)) && (minutes >= 0) && (minutes < 60)) {
        var romanHours = toRoman(hours);
        var romanMinutes = toRoman(minutes);
        time = romanHours + ':' + romanMinutes;
    } else {
        throw new TypeError('неверное время');
    }

    return time;
}

function toRoman(number) {
    if (number === 0) {
        return 'N';
    }
    var roman = '';
    var decimals = [50, 40, 10, 9, 5, 4, 1];
    var romanNumbers = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimals.length; i++) {
        while (number >= decimals[i]) {
            roman += romanNumbers[i];
            number -= decimals[i];
        }
    }

    return roman;
}

module.exports = romanTime;
