'use strict';

function arabtoroman(arab) {
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
    // Немного авторского кода и замечательной магии

    var splitTime = time.split(':');
    var hours = parseInt(splitTime[0]);
    var minutes = parseInt(splitTime[1]);
    if ((time === '00:00') || (time === '0:0')) {
        return 'N:N';
    } else if ((hours >= 0) && (hours < 24) && (minutes >= 0) && (minutes < 60)) {
        time = arabtoroman(hours) + ':' + arabtoroman(minutes);

        return time;
    }
    throw new TypeError();
}

module.exports = romanTime;
