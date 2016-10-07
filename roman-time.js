'use strict';

/**
 * @param {int} num – целое число
 * @returns {String} – число римскими цифрами
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
/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {bool} – правильно введено или нет
 */
function checkTime(time) {
    var hours = time.split(":")[0];
    var minutes = time.split(":")[1];
    if (isNaN(Number(minutes)) || 
        isNaN(Number(hours)) || 
        hours.length !== 2 || 
        minutes.length !== 2) {

        return false;
    }
    if ((Number(hours) < 0) || 
       (Number(hours) > 23) || 
       (Number(minutes) < 0) || 
       (Number(minutes) > 60)) {

        return false;
    }

    return true;
}
/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var error = new TypeError("Неверное время");
    if ((time === undefined) || (time === null)) {
        throw error;
    }
    var hours = time.split(":")[0];
    var minutes = time.split(":")[1];
    if (!checkTime(time)) {
        throw error;
    }
    var hoursStr = toRoman(hours);
    var minutesStr = toRoman(minutes);
    time = hoursStr + ":" + minutesStr;

    return time;
}

module.exports = romanTime;
