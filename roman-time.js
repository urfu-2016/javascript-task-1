'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var roman = {
    0: 'N',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L'
};

function romanTime(time) {
    var newTime = parseTime(time);
    var hours = toInt(newTime[0]);
    var minutes = toInt(newTime[1]);

    if (!isValidHours(hours) || !isValidMinutes(minutes)) {
        throw new TypeError('Input time is invalid');
    }

    return toRoman(hours) + ":" + toRoman(minutes);
}

function parseTime(time) {
    try {
        var numbersTime = time.split(':');
        if (numbersTime.length === 2 && numbersTime[0].length === 2 &&
            numbersTime[1].length === 2) {
            return numbersTime;
        }
    } catch (e) {
        throw new TypeError('Input time is invalid');
    }
}

function toInt(number) {
    try {
        if (!isNaN(number)) {
            return parseInt(number, 10);
        }
    } catch (e) {
        throw new TypeError('Input time is invalid');
    }
}

function toRoman(number) {
    if (number === 0) {
        return roman[0];
    }

    if (number.toString().length === 1) {
        return roman[number];
    }

    if (number % 10 === 0) {
        return roman[Math.floor(number / 10) * 10];
    }

    return roman[Math.floor(number / 10) * 10] + roman[number % 10];
}

function isValidHours(hours) {
    return hours >= 0 && hours < 24;
}

function isValidMinutes(minutes) {
    return minutes >= 0 && minutes < 60;
}

module.exports = romanTime;
