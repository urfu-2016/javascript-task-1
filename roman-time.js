"use strict";

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 * @throws TypeError
 */
function romanTime(time) {
    if (!time) {
        throw TypeError("Неверное время");
    }
    var splits = time.split(":");
    var hours = parseInt(splits[0], 10);
    var minutes = parseInt(splits[1], 10);
    if (!isValidPeriod(hours, minutes)) {
        throw TypeError("Неверное время");
    }

    return getRoman(hours) + ":" + getRoman(minutes);
}

function isValidPeriod(hours, minutes) {
    if (isNaN(hours) || isNaN(minutes)) {
        return false;
    }
    return (hours >= 0) && (hours < 24) && (minutes >= 0) && (minutes < 60);
}

var romanByDozens = {
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L"
};
var romanByDigit = {
    0: "N",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX"
};

function getRoman(number) {
    if (number in romanByDigit) {
        return romanByDigit[number];
    }
    if (number in romanByDozens) {
        return romanByDozens[number];
    }
    return getCompoundRoman(number);
}

function getCompoundRoman(number) {
    var digits = number.toString().split("");
    return romanByDozens[parseInt(digits[0], 10) * 10] + romanByDigit[parseInt(digits[1], 10)];
}

module.exports = romanTime;
