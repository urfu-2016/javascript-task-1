'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var splittedTime = time.split(':');
    if (splittedTime.length !== 2) {
        throw new TypeError('Неверное время');
    }
    var answer = [];
    answer.push(romanNumber(parseInt(splittedTime[0]), 23));
    answer.push(romanNumber(parseInt(splittedTime[1]), 59));
    // Немного авторского кода и замечательной магии
    return answer.join(':');
}

function romanNumber(number, maxValue) {
    if (isNaN(number) || number < 0 || number > maxValue) {
        throw new TypeError('Неверное время');
    }
    var romanNumber = "";
    if (number > 9) {
        var num = Math.floor(number / 10);
        switch (num) {
            case 3: romanNumber += "X";
            case 2: romanNumber += "X";
            case 1: romanNumber += "X";
                break;
            case 4: romanNumber += "X";
            case 5: romanNumber += "L";
                break;
        }
    }
    number %= 10;
    switch (number) {
        case 3: romanNumber += "I";
        case 2: romanNumber += "I";
        case 1: romanNumber += "I";
            break;
        case 4: romanNumber += "IV";
            break;
        case 5: romanNumber += "V";
        case 8: romanNumber += "I";
        case 7: romanNumber += "I";
        case 6: romanNumber += "I";
            break;
        case 9: romanNumber += "IX"
    }

    return romanNumber === "" ? "N" : romanNumber;
}

module.exports = romanTime;
