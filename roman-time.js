'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var timeArgs = time.split(':');

    if (isIncorrectFormat(timeArgs) || isIncorrectTime(timeArgs)) {
        throw new TypeError();
    }

    var dict = { 1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L" };
    var result = [];

    for (var i = 0; i < 2; i++) {
        result.push(convertToRoman(timeArgs[i], dict));
    }

    return result.join(':');
}

function convertToRoman(number, romanNumbers) {
    if (number === 0) {
        return "N";
    }

    var arabicNumbers = Object.keys(romanNumbers);
    var result = "";
    var index = arabicNumbers.length - 1;

    while (number > 0) {
        while (arabicNumbers[index] > number) {
            index--;
        }
        var arabic = arabicNumbers[index];
        number -= arabic;
        result += romanNumbers[arabic];
    }

    return result;
}

function isIncorrectTime(time) {
    var hours = parseInt(time[0], 10);
    var mins = parseInt(time[1], 10);

    return isNaN(hours) || isNaN(mins) ||
        hours < 0 || hours > 23 ||
        mins < 0 || mins > 59;
}

function isIncorrectFormat(time) {
    return time[0].length !== 2 || time[1].length !== 2;
}

module.exports = romanTime;
