'use strict';

function isTime(time) {
    var regexn = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (regexn.test(time)) {
        return true;
    }
}

function translationFromArabicToRoman(number) {
    if (!number) {
        return 'N';
    }
    var alphabet = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90,
        'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 };
    var i;
    var rom = '';
    for (i in alphabet) {
        if ({}.hasOwnProperty.call(alphabet, i)) {
            while (number >= alphabet[i]) {
            rom = rom + i;
            number = number - alphabet[i];
        }
        }
    }

    return rom;
}

function romanTime(time) {
    try {
        if (!isTime(time)) {
            throw new TypeError('Неверное время!');
        }
        time = time.split(':');
        var hour = parseInt(time[0]);
        var minute = parseInt(time[1]);

        return translationFromArabicToRoman(hour) + ':' + translationFromArabicToRoman(minute);
    } catch (e) {
        return e;
    }
}

module.exports = romanTime;
