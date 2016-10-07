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
    var minutes = time.split(":")[1];
    if (isNaN(+minutes) || isNaN(+hours)) {
        throw error;
    }
    if ((hours.length !== 2) || (minutes.length !== 2)) {
        throw error;
    }
    hours = +hours;
    minutes = +minutes;
    if ((hours < 0) || (hours > 23) || (minutes < 0) || (minutes > 60)) {
        throw error;
    }
    var Romanic = ["L", "XL", "X", "IX", "V", "IV", "I", "N"];
    var Arab = [50, 40, 10, 9, 5, 4, 1, 0];
    var hoursStr = "";
    var minutesStr = "";
    if (hours === 0) {
        hoursStr = "N";
    }
    else {
        for (var i = 0; i < Arab.length; i++) {
            if ((hours >= Arab[i]) && (hours !== 0)) {
                hoursStr += Romanic[i];
                hours -= Arab[i];
                i = 0;
            }
        }
    }
    if (minutes === 0) {
        minutesStr = "N";
    }
    else {
        for (i = 0; i < Arab.length; i++) {
            if ((minutes >= Arab[i]) && (minutes != 0)) {
                minutesStr += Romanic[i];
                minutes -= Arab[i];
                i = 0;
            }
        }
    }
    time = hoursStr + ":" + minutesStr;
    
    return time;
}

module.exports = romanTime;
