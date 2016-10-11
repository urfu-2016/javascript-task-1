'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var arabicNumbers = [0, 1, 4, 5, 9, 10, 40, 50];
var romanNumbers = ['N', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

function checkStringToStandartTime(time) {
    if (time.length !== 5) {
        return false;
    }

    return (!isNaN(parseInt(time[0])) && !isNaN(parseInt(time[1])) &&
            time[2] === ':' && !isNaN(parseInt(time[3])) &&
            !isNaN(parseInt(time[4])));
}


function checkToCorrect(time) {
    if (typeof(time) !== 'string') {
        return false;
    }
    if (!checkStringToStandartTime(time)) {
        return false;
    }
    var timeInArray = time.split(':');
    var hours = parseInt(timeInArray[0]);
    var minutes = parseInt(timeInArray[1]);

    return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
}


function translateArabNumberToRoman(number) {
    if (!number) {
        return romanNumbers[0];
    }
    var arabicNumberInStr = '';
    var indexOfRomanNumber = romanNumbers.length - 1;
    while (number > 0) {
        if (number >= arabicNumbers[indexOfRomanNumber]) {
            arabicNumberInStr += romanNumbers[indexOfRomanNumber];
            number -= arabicNumbers[indexOfRomanNumber];
        } else {
            indexOfRomanNumber--;
        }
    }

    return arabicNumberInStr;
}


function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (!checkToCorrect(time)) {
        throw new TypeError();
    }
    var timeInArray = time.split(':');
    var hours = parseInt(timeInArray[0]);
    var minutes = parseInt(timeInArray[1]);
    var hourInRoman = translateArabNumberToRoman(hours);
    var minutesInRoman = translateArabNumberToRoman(minutes);

    return hourInRoman + ':' + minutesInRoman;
}

module.exports = romanTime;
