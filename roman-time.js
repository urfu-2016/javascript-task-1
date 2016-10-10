'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var result = "";
    if (!isValidTime(time)) {
        throw new TypeError("Некорректное время");
    }
    var timeArray = time.split(':');
    var arabicHour = parseInt(timeArray[0]);;
    var arabicMinute = parseInt(timeArray[1]);
    result = convertTime(arabicHour) + ":" + convertTime(arabicMinute);

    return result;
}

function isValidTime(time) {
    var timeArray = time.split(':');
    var arabicHour = parseInt(timeArray[0]);;
    var arabicMinute = parseInt(timeArray[1]);
    checkNaN(arabicHour, arabicMinute);

    return (/\d\d:\d\d/.test(time) && arabicHour >= 0 && arabicMinute >= 0 &&
     arabicHour < 24 && arabicMinute < 60 && isValidLength(time));
} 

function checkNaN(arabicHour, arabicMinute) {
    if (isNaN(arabicHour) || isNaN(arabicMinute)) {
        throw new TypeError("Некорректное время");
    }
}

function isValidLength(time) {
    if (time.length === 5) {
        return true;
    } else {
        return false;     
    }
}

function convertTime(number) {
    var dozens = { 0: "", 1: "X", 2: "XX", 3: "XXX", 4: "XL", 5: "L" };
    var units = { 0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",
     6: "VI", 7: "VII", 8: "VIII", 9: "IX" };
    var result = "";
    if (number === 0) {
        result = "N";
    } else {
        result = dozens[parseInt(number / 10)] + units[parseInt(number % 10)];
    }

    return result;
}

module.exports = romanTime;
