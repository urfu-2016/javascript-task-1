'use strict';

function isCorrectValue(value, minValue, maxValue) {
    return !(isNaN(value) || value < minValue || value > maxValue);
}

function isCorrectHour(hour) {
    return isCorrectValue(hour, 0, 23);
}

function isCorrectMinute(minute) {
    return isCorrectValue(minute, 0, 59);
}

var dict = {
    0: "N",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L"
};

function decToRoman(value) {
    var firstDigit = Math.floor(value / 10);
    var secondDigit = value % 10;

    if (firstDigit === 0) {
        return dict[secondDigit];
    }

    if (secondDigit === 0) {
        return dict[firstDigit * 10];
    }

    return dict[firstDigit * 10] + dict[secondDigit];
}


/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (!time || time.length !== "HH:MM".length) {
        throw new TypeError("Неверное время");
    }

    var data = time.split(":");
    data.filter(function (value) {
        if (!isNaN(parseInt(value[0])) ||
            !isNaN(parseInt(value[1]))) {

            throw new TypeError("Неверное время");
        }

        return value;
    });

    var hour = parseInt(data[0]);
    var minute = parseInt(data[1]);

    if (!isCorrectHour(hour) || !isCorrectMinute(minute)) {
        throw new TypeError("Неверное время");
    }

    var romanHour = decToRoman(hour);
    var romanMinute = decToRoman(minute);

    return romanHour + ':' + romanMinute;
}

module.exports = romanTime;
