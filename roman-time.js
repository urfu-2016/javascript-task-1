'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var ROMAN = { 0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V',
    6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L' };
function errorRange(time) {
    time = time.split(':');
    if ((parseInt(time[0], 10) > 23) ||
        (parseInt(time[0], 10) < 0) || (parseInt(time[1], 10) > 59) ||
        (parseInt(time[1], 10) < 0)) {
        throw new TypeError('Range');
    }
}
function isZero(union, ten) {
    var result = ROMAN[ten] + ROMAN[union];
    if (union + ten === 0) {
        result = 'N';
    }

    return result;
}
function correct(time) {
    if (!(/\d\d:\d\d/.test(time))) {
        throw new TypeError('No correct');
    }
}
function romanTime(time) {
    correct(time);
    errorRange(time);
    time = time.split(':');
    var ten = parseInt(time[0][0]) * 10;
    var union = parseInt(time[0][1]);
    var hour = isZero(union, ten);
    ten = parseInt(time[1][0]) * 10;
    union = parseInt(time[1][1]);

    return hour + ':' + isZero(union, ten);
}
module.exports = romanTime;
