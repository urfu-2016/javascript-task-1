'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var timeArgs = time.split(':');
    var hours = parseInt(timeArgs[0], 10);
    var mins = parseInt(timeArgs[1], 10);

    if (isNaN(hours) || isNaN(mins) ||
        hours < 0 || hours > 23 ||
        mins < 0 || mins > 59) {
        throw TypeError();
    }

    timeArgs[0] = hours;
    timeArgs[1] = mins;

    var dict = {1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L"};
    var result = [];

    for (var i = 0; i < 2; i++) {
        result.push(convertToRoman(timeArgs[i], dict));
    }

    return result.join(':');
}

function convertToRoman(number, romanNumbers) {
    if (number === 0)
        return "N";

    var numbers = Object.keys(romanNumbers);
    var result = "";

    while (number > 0) {
        for (var i = numbers.length - 1; i >= 0; i--) {
            var arabic = numbers[i];
            if (number >= arabic) {
                number -= arabic;
                result += romanNumbers[arabic];
                break;
            }
        }
    }

    return result;
}

module.exports = romanTime;
