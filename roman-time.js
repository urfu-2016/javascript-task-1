'use strict';

function arabToRoman(number) {
    var arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    if (!number) {
        return 'N';
    }
    var ret = '';
    var i = arab.length - 1;
    while (number > 0) {
        if (number >= arab[i]) {
            ret += roman[i];
            number -= arab[i];
        } else {
            i--;
        }
    }

    return ret;
}

function romanTime(time) {
    var hours = Number(time.split(':')[0]);
    var minutes = Number(time.split(':')[1]);
    if (typeof time === 'undefined' || isNaN(hours) ||
        isNaN(minutes) || hours > 23 || minutes > 59) {
        throw new TypeError();
    }

    return arabToRoman(Number(hours)) + ':' + arabToRoman(Number(minutes));
}

module.exports = romanTime;
