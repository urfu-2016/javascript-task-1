'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    var hour = null;
    var minute = null;
    var arrayOfTime = time.split(':');
    var hourArabic = parseInt(arrayOfTime[0], 10);
    var minuteArabic = parseInt(arrayOfTime[1], 10);
    if (parseInt(arrayOfTime[0], 10) === 0) {
        hour = 'N';
    } else if (isNaN(hourArabic) || hourArabic > 23 || hourArabic < 0) {
        throw new TypeError('Неверное время');
    } else if (!isNaN(parseInt(arrayOfTime[0], 10))) {
        hour = parseNumber(parseInt(arrayOfTime[0], 10));
    }
    if (parseInt(arrayOfTime[1], 10) === 0) {
        minute = 'N';
    } else if (isNaN(minuteArabic) || minuteArabic > 59 || minuteArabic < 0) {
        throw new TypeError('Неверное время');
    } else {
        minute = parseNumber(parseInt(arrayOfTime[1], 10));
    }
    time = hour + ':' + minute;

    return time;
}

function parseNumber(num) {
    var arabic = [1, 4, 5, 9, 10, 40, 50];
    var romanic = ['I','IV','V','IX','X','XL','L'];
    var roman = '';
    var index = arabic.length - 1;
    while(num > 0)
    {
        if(num >= arabic[index])
        {
            roman += romanic[index];
            num -= arabic[index];
        } else {
            index--;
        }
    }

    return roman;
}

module.exports = romanTime;
