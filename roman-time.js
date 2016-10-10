'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var timeArray = time.split(':');
    var arabicHour = 0;
    var arabicMinute = 0;
    try{
        arabicHour = parseInt(timeArray[0]);
        arabicMinute = parseInt(timeArray[1]);
    }
    catch (e){
        throw new TypeError("Некорректное время");
    }
    if (isNaN(arabicHour) || isNaN(arabicMinute) || arabicHour > 23 || arabicMinute > 59){
        throw new TypeError("Некорректное время");
    }
    var result = "";
    result = convertTime(arabicHour) + ":" + convertTime(arabicMinute);

    return result;
}

function convertTime(number){
    var dozens = { 0: "", 1: "X", 2: "XX", 3: "XXX", 4: "XL", 5: "L" };
    var units = { 0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX" };
    var result = "";
    if (number === 0){
        result = "N";
    }
    else{
        result = dozens[parseInt(number / 10)] + units[parseInt(number % 10)];
    }

    return result;
}

module.exports = romanTime;
