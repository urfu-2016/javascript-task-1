'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function convertToRoman(arab) {
    var arrDec = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var arrUnit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var roman;

    if (arab === 0) {
        roman = 'N';
    } else {
        roman = arrDec[Math.floor(arab / 10)] + arrUnit[arab % 10];
    }

    return roman;
}

function romanTime(time) {
    var arrSymb = time.split(':');
    var hour = parseInt(arrSymb[0], 10);
    var min = parseInt(arrSymb[1], 10);

    if ((arrSymb.length !== 2) || (hour < 0) || (hour > 23) || (min < 0) || (min > 59)) {
        throw new TypeError("Wrong format of input");
    }

    time = convertToRoman(hour) + ':' + convertToRoman(min);

    return time;
}

module.exports = romanTime;
