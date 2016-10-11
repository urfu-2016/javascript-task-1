'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var fontAr = [0, 1, 4, 5, 9, 10, 40, 50];
var fontRom = ['N', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

function getRoman(time) {
    if (!time) return '';
    var rezult = '';
    var n = fontAr.length - 1;
    while (time > 0) {
        if (time >= fontAr[n]) {
            rezult += fontRom[n];
            time -= fontAr[n];
        } else n--;
    }

    return rezult;
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var part = time.split(':', 2);
    if ((part.length === 2) && (isNaN(time))) {
        var hours = Number(part[0]);
        var minutes = Number(part[1]);
    } else {
        throw new TypeError('Неверное время');
    }
    if ((hours >= 1) && (hours <= 23) &&
        (minutes >= 1) && (minutes <= 59)) {
        var romHour = getRoman(hours);
        var romMinute = getRoman(minutes);

        return romHour + ':' + romMinute;
    } else {
        // ((hours === 0 || hours === 24) || (minutes === 0)); {
        throw new TypeError('Неверное время');
    }
}
module.exports = romanTime;
