'use strict';

function arabtoroman(arab) {
    if ((arab === '0') || (arab === '00')) {
        return 'N';
    }
    var smallDig = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var bigDig = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var newArab = bigDig[Math.floor(Number(arab) / 10)] + smallDig[(Number(arab) % 10)];

    return newArab;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    var splitTime;
    var hours;
    var minutes;
    if ((isNaN(time))) {
        splitTime = time.split(':');
        hours = splitTime[0];
        minutes = splitTime[1];
    }
    // Немного авторского кода и замечательной магии
    if ((hours >= 0) && (isNaN(time)) && (hours < 24) && (minutes >= 0) && (minutes < 60) &&
        (splitTime[0].length === 2) && splitTime[1].length === 2) {
        time = arabtoroman(hours) + ':' + arabtoroman(minutes);

        return time;
    }
    throw new TypeError();
}
module.exports = romanTime;
