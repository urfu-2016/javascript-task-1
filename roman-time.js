'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var fontAr = [0, 1, 4, 5, 9, 10, 40, 50];
var fontRom = ['N', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

function getRoman(time) {
    if (Number(time) === 0) {

        return 'N';
    }
    var rezult = '';
    var n = fontAr.length - 1;
    while (time > 0) {
        if (time >= fontAr[n]) {
            rezult += fontRom[n];
            time -= fontAr[n];
        } else {
            n--;
        }
    }

    return rezult;
}

function getIsNan(hours, minutes) {
    if (isNaN(hours) || isNaN(minutes)) {

        return true;
    }

    return false;
}

function getRightMinutes(time) {
    var part = time.split(':', 2);
    if (part.length !== 2 || !time ||
        Number(part[1]) > 59 || Number(part[1]) < 0) {

        return true;
    }

    return false;
}

function getRightHours(time) {
    var part = time.split(':', 2);
    if (part.length !== 2 || !time ||
        Number(part[0]) > 23 || Number(part[0]) < 0) {

        return true;
    }

    return false;
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var part = time.split(':', 2);
    if (getRightMinutes(time) || getRightHours(time)) {
        throw new TypeError('Неверное время');
    }
    var hours = Number(part[0]);
    var minutes = Number(part[1]);
    var romHour = getRoman(hours);
    var romMinute = getRoman(minutes);
    if (getIsNan(hours, minutes)) {
        throw new TypeError('Неверное время');
    }
    time = romHour + ':' + romMinute;

    return time;
}
module.exports = romanTime;
