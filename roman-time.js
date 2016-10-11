'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var romanArrayTens = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var romanArrayOnes = ['X', 'XX', 'XXX', 'XL', 'L'];
var splitTime;
var separator = ':';
function translateToRoman(string) {
    if (string[1] === 0) {
        if (string[0] === 0) {
            string = romanArrayTens[0];
        }
        string = romanArrayOnes[parseInt(splitTime[0][0]) - 1];
    }
    if (string[0] === 0) {
        string = romanArrayTens[parseInt(splitTime[0])];
    } else {
        string = romanArrayOnes[parseInt(splitTime[0][0]) - 1]
            + romanArrayTens[parseInt(splitTime[0][1])];
    }

    return string;
}
var minutesInteger;
var hoursInteger;
function romanTime(time) {
    splitTime = time.split(separator);
    hoursInteger = parseInt(splitTime[0]);
    minutesInteger = parseInt(splitTime[1]);
    if (hoursInteger < 24 && hoursInteger >= 0) {
        translateToRoman(splitTime[0]);
        if (minutesInteger < 60 && minutesInteger >= 0) {
            translateToRoman(splitTime[1]);
        } else throw new TypeError('TypeError: Неверное время');
    } else throw new TypeError('TypeError: Неверное время');
    time = splitTime[0] + ':' + splitTime[1];

    return time;
}

module.exports = romanTime;


