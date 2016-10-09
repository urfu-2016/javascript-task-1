'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var arabic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60];
var roman = ["N", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XX", "XXX", "XL", "L", "LX"];

var hour;
var minute;
var roman_hour = "";
var roman_minute = "";
var roman_number = "";

function isCorrect(hour, minute) {
    if (hour.length > 2 || minute.length > 2) {
        return false;
    }
    if (parseInt(hour, 10) > 23 || parseInt(hour, 10) < 0 || parseInt(minute, 10) > 59 || parseInt(minute, 10) < 0) {
        return false;
    }

    return true;
}

function translate(number) {
    var i = 0;
    if (number === 0) {
        roman_number += "N";
        return roman_number;
    }
    for (i = 0; i < arabic.length; i += 1) {
        if (number < arabic[i]) {
            number -= arabic[i - 1];
            roman_number += roman[i - 1];
            if (number === 0) {
                return roman_number;
            } else {
                i = 0;
                translate(number);
            }
            return roman_number;
        }
    }
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    hour = parseInt(time.split(":")[0], 10);
    minute = parseInt(time.split(":")[1], 10);
    if (isCorrect(hour, minute)) {
        roman_hour = translate(hour);
        roman_number = "";
        roman_minute = translate(minute);
        roman_number = "";
        time = roman_hour + ":" + roman_minute;
        return time;
    } else {
        throw new TypeError("Неверное время");
    }
    
}

module.exports = romanTime;
