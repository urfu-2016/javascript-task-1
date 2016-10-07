'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function toRoman(num) {
    var roman = "";
    var i = 0;
    if (num === 0) {
        return "N";
    }
    var Romanic = ["L", "XL", "X", "IX", "V", "IV", "I", "N"];
    var Arab = [50, 40, 10, 9, 5, 4, 1, 0];
    for (i = 0; i < Arab.length; i++) {
        if (num >= Arab[i] && num !== 0) {
            roman += Romanic[i];
            num -= Arab[i];
            i = 0;
        }
    }
    return roman;
}
 
function romanTime(time) {
    var error = new TypeError("Неверное время");
    if ((time === undefined) || (time === null)) {
        throw error;
    }
    var hours = time.split(":")[0];
    var min = time.split(":")[1];
    if (isNaN(Number(min)) || isNaN(Number(hours)) || hours.length !== 2 || min.length !== 2) {
        throw error;
    }
    hours = Number(hours);
    min = Number(min);
    if ((hours < 0) || (hours > 23) || (min < 0) || (min > 60)) {
        throw error;
    }
    var Romanic = ["L", "XL", "X", "IX", "V", "IV", "I", "N"];
    var Arab = [50, 40, 10, 9, 5, 4, 1, 0];
    var hoursStr = toRoman(hours);
    var minStr = toRoman(min);
    time = hoursStr + ":" + minStr;
    return time;
}

module.exports = romanTime;
