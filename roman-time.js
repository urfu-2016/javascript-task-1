'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    rightTimeLength(time);
    var str = time.split(':');
    rightNoteTime(str);
    var hour = parseInt(str[0]);
    var minuts = parseInt(str[1]);
    rightTime(hour, minuts);
    var newTime = findStr(hour) + ':';
    newTime += findStr(minuts);

    return newTime;
}
function rightTimeLength(time) {
    if (time.length > 5) {
        throw new TypeError();
    }
}
function rightNoteTime(str) {
    if (str[0].length !== 2 || str[1].length !== 2) {
        throw new TypeError();
    }
}
function rightTime(hour, minuts) {
    if (hour > 23 || hour < 0 || minuts > 59 || minuts < 0) {
        throw new TypeError();
    }
}

function findStr(number) {
    var arr = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII',
               'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];
    var str = '';
    if ((number / 10) >= 1) {
        str += arr[Math.floor(number / 10) + 8];
    }
    if (number % 10 !== 0) {
        str += arr[number % 10 - 1];
    } else if (str.length === 0) {
        str = "N";
    }

    return str;
}

module.exports = romanTime;
