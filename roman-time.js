"use strict";

function isInRange(value, start, end) {
    return value >= start && value < end;
}

function toRoman(value, dict) {
    var result = "";
    while (value >= 0) {
        var keys = Object.keys(dict);
        var i = keys.length - 1;
        while (i >= 0 && keys[i] > value) {
            i--;
        }
        value -= keys[i];
        result += dict[keys[i]];
        if (value === 0) {
            break;
        }
    }

    return result;
}

function isCorrectTime(parts) {
    return parts.length !== 2 ||
        parts[0].length !== 2 ||
        parts[1].length !== 2 ||
        !isInRange(parts[0], 0, 24) ||
        !isInRange(parts[1], 0, 60);
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (time === undefined || time === null) {
        throw new TypeError();
    }
    var parts = time.split(":");
    if (isCorrectTime(parts)) {
        throw new TypeError();
    }
    var dict = {
        "0": "N",
        "1": "I",
        "4": "IV",
        "5": "V",
        "9": "IX",
        "10": "X",
        "40": "XL",
        "50": "L"
    };
    var result = "";
    for (var i = 0; i < parts.length; i++) {
        if (result !== "") {
            result += ":";
        }
        result += toRoman(parseInt(parts[i]), dict);
    }

    return result;
}

module.exports = romanTime;
