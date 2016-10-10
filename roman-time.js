'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var reTime = /\d\d[:]\d\d/
    if (time.search(reTime) == -1) {
        throw new TypeError();
    }
    var hoursAndMinutes = time.split(':');
    var hours = parseInt(hoursAndMinutes[0]);
    var minutes = parseInt(hoursAndMinutes[1]);
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw new TypeError();
    }
    var decimal = {
    '0': '',
    '1': 'I',
    '2': 'II',
    '3': 'III',
    '4': 'IV',
    '5': 'V',
    '6': 'VI',
    '7': 'VII',
    '8': 'VIII',
    '9': 'IX'
    };
    var tens = {
    '0': '',
    '1': 'X',
    '2': 'XX',
    '3': 'XXX',
    '4': 'XL',
    '5': 'L',
    '6': 'LX'
    };

    return (hours == 0 ? 'N' : tens[Math.floor(hours / 10)] + decimal[hours % 10]) + ':' + 
           (minutes == 0 ? 'N' : tens[Math.floor(minutes / 10)] + decimal[minutes % 10]);
}

module.exports = romanTime;
