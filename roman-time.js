'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var romanArrayTens = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var romanArrayOnes = ['X', 'XX', 'XXX', 'XL', 'L'];
var splitTime;
function translateToRoman(string, index) {
    if (string[1] === '0') {
        if (string[0] === '0') {
            string = romanArrayTens[0];
        } else {
            string = romanArrayOnes[parseInt(splitTime[index][0]) - 1];
        }
    } else if (string[0] === '0') {
        string = romanArrayTens[parseInt(splitTime[index][1])];
    } else {
        string = romanArrayOnes[parseInt(splitTime[index][0]) - 1] +
            romanArrayTens[parseInt(splitTime[index][1])];
    }

    return string;
}
var minutesInteger;
var hoursInteger;
var romanHours;
var romanMinutes;
var separator = ':';
function romanTime(time) {
    splitTime = time.split(separator);
    hoursInteger = parseInt(splitTime[0]);
    minutesInteger = parseInt(splitTime[1]);
    if (hoursInteger < 24 && hoursInteger >= 0) {
        romanHours = translateToRoman(splitTime[0], 0);
        if (minutesInteger < 60 && minutesInteger >= 0) {
            romanMinutes = translateToRoman(splitTime[1], 1);
        } else {
            throw new TypeError('TypeError: Неверное время');
        }
    } else {
        throw new TypeError('TypeError: Неверное время');
    }
    time = romanHours + ':' + romanMinutes;

    return time;
}

module.exports = romanTime;
