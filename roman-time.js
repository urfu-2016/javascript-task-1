'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (time === undefined) {
        throw new TypeError("Некорректное время");
    }
    checkLength(time);
    var timeArray = [];
    if (time.charAt(2) === ":") {
        timeArray = time.split(':');
    } else {
        throw new TypeError("Некорректное время");
    }
    var arabicHour = 0;
    var arabicMinute = 0;
    try {
        arabicHour = parseInt(timeArray[0]);
        arabicMinute = parseInt(timeArray[1]);
    } catch (e) {
        throw new TypeError("Некорректное время");
    }
    checkNaN(arabicHour, arabicMinute);
    if (arabicHour < 0 || arabicMinute < 0 || arabicHour > 23 || arabicMinute > 59) {
        throw new TypeError("Некорректное время");
    }
    var result = "";
    result = convertTime(arabicHour) + ":" + convertTime(arabicMinute);

    return result;
}

function checkNaN(arabicHour, arabicMinute) {
    if (isNaN(arabicHour) || isNaN(arabicMinute)) {
        throw new TypeError("Некорректное время");
    }
}

function checkLength(time) {
    if (time.length > 5) {
        throw new TypeError("Некорректное время");
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
