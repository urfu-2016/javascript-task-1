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
    var cTime = time.split(":");
    if ((cTime.length !== 2) ||
       (Number(cTime[0]) < 0) ||
       (Number(cTime[0]) > 23) ||
       (Number(cTime[1]) < 0) ||
       (Number(cTime[1]) > 60)) {

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
    if ((hours.length !== 2) || 
       (minutes.length !== 2) ||
       (isNaN(Number(hours))) ||
       (isNaN(Number(minutes)))){
        throw error;
    }
    if (!checkTime(time)) {
        throw error;
    }
    var hoursStr = toRoman(Number(hours));
    var minutesStr = toRoman(Number(minutes));
    time = hoursStr + ":" + minutesStr;

    return time;
}

module.exports = romanTime;
