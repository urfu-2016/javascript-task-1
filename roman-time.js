'use strict';

function checkTime(time) {
    return /^(([0-1][0-9])|(2[0-3])):([0-5][0-9])$/.test(time);
}

function decimalToRoman(number) {
    number = parseInt(number, 10);
    if (number === 0) {
        return 'N';
    }

    var result = '';
    var decimal = [50, 40, 10, 9, 5, 4, 1];
    var roman = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    decimal.forEach(function (item, i) {
        while (number >= item) {
            number -= item;
            result += roman[i];
        }
    });

    return result;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (!checkTime(time)) {
        throw new TypeError('Wrong input format');
    }

    time = time.split(':');

    return decimalToRoman(time[0]) + ':' + decimalToRoman(time[1]);
}

module.exports = romanTime;
