'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (time.length > 5 || time === "24:00") {
        throw new TypeError();
    }
    var str = time.split(':');
    var hour = parseInt(str[0]);
    var minuts = parseInt(str[1]);
    var newTime = findStr(hour) + ':';
    newTime += findStr(minuts);

    return newTime;
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
