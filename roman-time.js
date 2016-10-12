'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var romanDigits = {
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
    0: 'N'
};

function getMaxRomanNumber(num) {
    var keys = Object.keys(romanDigits);

    return Math.max.apply(null, keys.filter(function (e) {
        return e <= num;
    }));
}

function convertToRoman(num) {
    if (num === 0) {
        return romanDigits[0];
    }
    var roman = '';
    while (num > 0) {
        var key = getMaxRomanNumber(num);
        roman = roman.concat(romanDigits[key]);
        num -= key;
    }

    return roman;
}

function romanTime(time) {
    if (!/^\d{2}:\d{2}$/.test(time)) {
        throw TypeError();
    }
    var parsedTime = time.split(':');
    var hours = parseInt(parsedTime[0], 10);
    var minutes = parseInt(parsedTime[1], 10);
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw TypeError();
    }

    return convertToRoman(hours).toString() + ':' + convertToRoman(minutes).toString();
}

module.exports = romanTime;
