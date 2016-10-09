'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    checkInputValidity(time);
    checkInputFormat(time);

    var parsedInput = tryParseInput(time);
    var hours = parsedInput[0];
    var minutes = parsedInput[1];

    return intToRomanNumber(hours) + ':' + intToRomanNumber(minutes);
}

function checkInputValidity(time) {
    try {
        time.toString();
    } catch (err) {
        throw new TypeError('Некорректный ввод');
    }
}

function checkInputFormat(time) {
    if (time.length !== 5 || time.indexOf(':') === -1) {
        throw new TypeError('Неправильный формат времени');
    }
}

function tryParseInput(time) {
    var splittedString = time.split(':');
    if (splittedString.length === 2) {
        var hours = parseInt(splittedString[0]);
        var minutes = parseInt(splittedString[1]);
        var isHoursCorrect = !isNaN(hours) && hours >= 0 && hours <= 23;
        var isMinutesCorrect = !isNaN(minutes) && minutes >= 0 && minutes <= 59;
        if (isHoursCorrect && isMinutesCorrect) {
            return [hours, minutes];
        }
    }

    throw new TypeError('Неправильный формат времени');
}

function intToRomanNumber(number) {
    if (number === 0) {
        return 'N';
    }

    var result = '';
    var romanIntegers = [0, 1, 5, 10, 50];
    var romanDigits = ['N', 'I', 'V', 'X', 'L'];

    var index = 4; // Индекс наибольшей возможной римской цифры
    while (number !== 0) {
        var indexOfSubtrahend = getIndexOfPossibleSubtractedDigit(index);
        while (number >= romanIntegers[index] - romanIntegers[indexOfSubtrahend]) {
            number -= romanIntegers[index];
            if (number < 0) {
                number += romanIntegers[indexOfSubtrahend];
                result += romanDigits[indexOfSubtrahend];
            }
            result += romanDigits[index];
        }
        index--;
    }

    return result;
}

function getIndexOfPossibleSubtractedDigit(index) {
    if (index > 1) {
        return index - index % 2 - 1;
    }

    return 0;
}

module.exports = romanTime;
