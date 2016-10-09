'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    rightTimeLength(time);
    var str = time.split(':');
    rightNoteTime(str);
    var hour = Number(str[0]);
    var minuts = Number(str[1]);
    isNan(hour, minuts);
    rightTime(hour, minuts);
    var newTime = findStr(Number(hour)) + ':';
    newTime += findStr(Number(minuts));

    return newTime;
}
function rightTimeLength(time) {
    if (time.length !== 5 || time === null || typeof time === "undefined") {
        throw new TypeError();
    }
}
function rightNoteTime(str) {
    if (str.length !== 2) {
        throw new TypeError();
    }
    if (str[1].length !== 2) {
        throw new TypeError();
    }
}
function isNan(hour, minuts) {
    if (isNaN(hour) || isNaN(minuts)) {
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
               'IX', 'X', 'XX', 'XXX', 'XL', 'L'];
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
