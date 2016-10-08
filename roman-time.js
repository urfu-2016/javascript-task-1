'use strict';

function toRoman(num) {
    var result = '';
    var decimal = [50, 40, 10, 9, 5, 4, 1];
    var roman = ["L", "XL", "X", "IX", "V", "IV", "I"];
    if (num == 0) {
        result = 'N'
    }
    for (var i = 0; i <= decimal.length; i++) {
        while (num % decimal[i] < num) {
            result += roman[i];
            num -= decimal[i];
        }
    }

    return result;
}

function isTime(time) {
    return /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/.test(time);
}

function romanTime(time) {
    if (!isTime(time)) {
        throw new TypeError('Input time has wrong format!');
    }
    time = time.split(':');

    return toRoman(parseInt(time[0])) + ':' + toRoman(parseInt(time[1]));
}

module.exports = romanTime;
