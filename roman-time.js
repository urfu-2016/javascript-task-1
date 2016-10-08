'use strict';

var romanAnalogues = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L"
};
function slicing(string) {
    var values = string.split(":");
    if (values.length > 2) {
        throw new TypeError("Not a Time");
    }

    return values;
}
function checkTime(time, tag) {
    var result = parseInt(time, 10);
    if (isNaN(result)) {
        throw new TypeError("Incorrect time");
    }
    if ((tag === "hours") && (result >= 0) && (result <= 23)) {
        return result;
    }

    if ((tag === "minutes") && (result >= 0) && (result <= 59)) {
        return result;
    }

    throw new TypeError("Incorrect time");
}

function getMaximumInsideDict(elem) {
    var difference = Number.MAX_SAFE_INTEGER;
    var searchFor;
    var keys = Object.keys(romanAnalogues);

    for (var id = 0; id < keys.length; id++) {
        var curDiff = elem - keys[id];
        if (curDiff < difference && curDiff >= 0) {
            difference = curDiff;
            searchFor = keys[id];
        }

    }

    return searchFor;
}

function convertArabicToRoman(measure) {
    var number = getMaximumInsideDict(measure);

    if (measure === 0) {
        return "";
    }

    if (number === measure) {
        return romanAnalogues[number];
    }

    return romanAnalogues[number] + convertArabicToRoman(measure - number);

}

function returnRomanResult(hours, minutes) {
    var convertedHours = (hours === 0) ? "N" : convertArabicToRoman(hours);
    var convertedMinutes = (minutes === 0) ? "N" : convertArabicToRoman(minutes);

    return convertedHours + ":" + convertedMinutes;

}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    try {

        var value = slicing(time);
        
        var hours = checkTime(parseInt(value[0]), "hours");
        var minutes = checkTime(parseInt(value[1]), "minutes");

        return returnRomanResult(hours, minutes);
    } catch (exception) {
        throw new TypeError("Incorrect time");
    }

}

module.exports = romanTime;
