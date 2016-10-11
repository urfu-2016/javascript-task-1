'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var ROMAN = { 0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V',
    6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L' };

function isNull(time) {
    if (time === null) {
        throw new TypeError('NUL');
    }
    if ((time + ' ').length < 4) {
        throw new TypeError('Length < 3');
    }
}
function error(time) {
    time += ' ';
    time = time.split(':');
    if (isNaN(parseInt(time[0], 10)) || (parseInt(time[0], 10) > 23) ||
        (parseInt(time[0], 10) < 0) || (parseInt(time[1], 10) > 59) ||
        (parseInt(time[1], 10) < 0)) {
        throw new TypeError('NaN or Range');
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
    time = time.split(':');
    if (time[0].length === 1) {
        time[0] = '0' + time[0];
    }
    if (time[1].length === 1) {
        time[1] = '0' + time[1];
    }

    return time[0] + ':' + time[1];
}
function romanTime(time) {
    isNull(time);
    error(time);
    if ((time + ' ').indexOf('.') >= 0) {
        throw new TypeError('Not Int');
    }
    time = correct(time);
    time = time.split(':');
    var ten = parseInt(time[0][0]) * 10;
    var union = parseInt(time[0][1]);
    var hour = isZero(union, ten);
    ten = parseInt(time[1][0]) * 10;
    union = parseInt(time[1][1]);
    var min = isZero(union, ten);

    return hour + ':' + min;
}

module.exports = romanTime;
