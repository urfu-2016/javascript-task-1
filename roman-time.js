'use strict';

function toRoman(num) {
    var arab = [0, 1, 4, 5, 9, 10, 40, 50];
    var roman = ['N', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    var rezult = '';
    var n = arab.length - 1;
    if (num === 0) {
        return 'N';
    }
    while (num > 0) {
        if (num >= arab[n]) {
            rezult += roman[n];
            num -= arab[n];
        } else {
            n--;
        }
    }

    return rezult;
}
function romanTime(time) {
    var hours = Number(time.substring(0, 2));
    var minutes = Number(time.substring(3, 5));
    if (hours >= 24 || minutes >= 60 || time.length !== 5 || isNaN(hours) || isNaN(minutes)) {
        throw new TypeError();
    }

    return toRoman(hours) + ':' + toRoman(minutes);
}

module.exports = romanTime;
