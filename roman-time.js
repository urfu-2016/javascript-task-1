'use strict';
var firstDigit = ["", "X", "XX", "XXX", "XL", "L"];
var secondDigit = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */


function arabToRoman(number) {
    if (number === 0) {
        return "N";
    }
    var fDigit = parseInt(number / 10);
    var sDigit = parseInt(number % 10);

    return firstDigit[fDigit] + secondDigit[sDigit];
}

function inDistance(value, max) {

    return (value < 0 || value > max);
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var splitTime = time.split(":");
    var hourMinute = [Number(splitTime[0]), Number(splitTime[1])];
    if (inDistance(hourMinute[0], 23) || inDistance(hourMinute[1], 59) || splitTime.length !== 2) {
        throw new TypeError("Bad format");
    }
    if (isNaN(hourMinute[0]) || isNaN(hourMinute[1])) {
        throw new TypeError("Bad format");
    }
    time = arabToRoman(hourMinute[0]) + ":" + arabToRoman(hourMinute[1]);

    return time;
}

module.exports = romanTime;
