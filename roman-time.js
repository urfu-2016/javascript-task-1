'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var ARABIAN_TO_ROMAN = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L'
};


function parseTime(timeString) {
    var match = timeString.match(/^([01]\d|2[0-3]):([0-5]\d)$/);

    if (match) {
        return {
            hours: Number(match[1]),
            minutes: Number(match[2])
        };
    }

    throw new TypeError();
}

function arabianToRoman(int) {
    if (int === 0) {
        return 'N';
    }

    var secondDigit = int % 10;
    var firstDigit = int - secondDigit;

    return ARABIAN_TO_ROMAN[firstDigit] + ARABIAN_TO_ROMAN[secondDigit];
}

function romanTime(timeString) {
    var time = parseTime(timeString);

    return arabianToRoman(time.hours) + ':' + arabianToRoman(time.minutes);
}

module.exports = romanTime;
