'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
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
    var hoursStr = "";
    var minStr = "";
    (hours === 0) ? hoursStr = "N" : hoursStr = "";
    (min === 0) ? minStr = "N" : hoursStr = "";
    for (var i = 0; i < Arab.length; i++) {
        if (hours >= Arab[i] && hours != 0) {
            hoursStr += Romanic[i];
            hours -= Arab[i];
            i = 0;
        }
    }
    for (var i = 0; i < Arab.length; i++) {
        if (min >= Arab[i] && min != 0) {
            minStr += Romanic[i];
            min -= Arab[i];
            i = 0;
        }
    }
    time = hoursStr + ":" + minStr;
    return time;
}

module.exports = romanTime;
