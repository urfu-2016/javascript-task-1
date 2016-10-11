'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var magicDigits = [50, 40, 10, 9, 5, 4, 1];
var dict = { 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I' };

function romanTime(time) {
    var hour = time.split(':')[0];
    var minute = time.split(':')[1];
    if (isCorrect(time)) {
        return toRoman(hour) + ':' + toRoman(minute);
    }
    throw new TypeError('Неверное время', 'roman-time.js', 16);
}

function isCorrect(time) {
    var hour = time.split(':')[0];
    var minute = time.split(':')[1];

    hour = parseInt(hour);
    minute = parseInt(minute);

    if (isNaN(hour) || isNaN(minute)) {
        return false;
    }
    else if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
        return false;
    }
    else return true;
}

function toRoman(digit) {
    digit = parseInt(digit);
    var str = '';

    magicDigits.forEach(function (current) {
        if (digit >= current) {
            var a = parseInt(digit / current);
            digit -= a * current;
            while (a > 0) {
                str += dict[current];
                a--;
            }
        }
    });

    // for (var i = 0; i < magicDigits.length; i++) {
    //     var current = magicDigits[i];
    //     if (digit >= current) {
    //         var a = parseInt(digit / current);
    //         digit -= a * current;
    //         while (a > 0) {
    //             str += dict[current];
    //             a--;
    //         }
    //     }
    // }

    return str === '' ? 'N' : str;
}

module.exports = romanTime;
