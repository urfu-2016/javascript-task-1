'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var arabic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60];
var roman = ["N", "I", "II", "III", "IV", "V", "VI", "VII", "VIII",
        "IX", "X", "XX", "XXX", "XL", "L", "LX"];

var hour;
var minute;
var romanHour = "";
var romanMinute = "";
var romanNumber = "";

function isCorrect(hour, minute) {
    if (hour.length > 2 || minute.length > 2) {
        return false;
    }
    if (parseInt(hour, 10) > 23 || parseInt(hour, 10) < 0 ||
            parseInt(minute, 10) > 59 || parseInt(minute, 10) < 0) {
        return false;
    }

    return true;
}

function translate(number) {
    var i = 0;
    if (number === 0) {
        romanNumber += "N";

        return romanNumber;
    }

    for (i = 0; i < arabic.length; i += 1) {
        if (number < arabic[i]) {
            number -= arabic[i - 1];
            romanNumber += roman[i - 1];
            if (number !== 0) {
                i = 0;
                translate(number);
            }

            return romanNumber;
        }
    }
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    hour = parseInt(time.split(":")[0], 10);
    minute = parseInt(time.split(":")[1], 10);
    if (isCorrect(hour, minute)) {
        romanHour = translate(hour);
        romanNumber = "";
        romanMinute = translate(minute);
        romanNumber = "";
        time = romanHour + ":" + romanMinute;
    } else {
        throw new TypeError("Неверное время");
    }

    return time;
}

module.exports = romanTime;
