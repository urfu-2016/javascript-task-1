'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (time === 0) {

        return 'N';
    }
    isValid(time);
    // Немного авторского кода и замечательной магии
    var hoursMin = time.split(':');
    var hours = parseInt(hoursMin[0], 10);
    var min = parseInt(hoursMin[1], 10);
    if (Number.isInteger(hours) && Number.isInteger(min) && hoursMin.length === 2) {
        if (hours < 24 && min < 60 && hoursMin[0].length === 2 && hoursMin[1].length === 2) {
            hours = convertToRomanNumber(hours);
            min = convertToRomanNumber(min);
            time = hours + ':' + min;

            return time;
        }
    }
    throw new TypeError('Неверное время');
}

function isValid(time) {
    if (time === null || time === undefined || time.length > 5 || time.length !== 5) {
        throw new TypeError('Неверное время');
    }
}

function convertToRomanNumber(number) {
    var romanNumber = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    var romanNumberTens = ['X', 'XX', 'XXX', 'XL', 'L'];
    if (number < 11) {
        number = romanNumber[number];
    } else {
        var tempNum = romanNumberTens[(number - number % 10) / 10 - 1];
        if (number % 10 !== 0) {
            number = tempNum + romanNumber[number % 10];
        } else {
            number = tempNum;
        }
    }

    return number;
}

module.exports = romanTime;
