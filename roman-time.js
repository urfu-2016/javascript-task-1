'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var parsedInput = tryParseInput(time);
    var hours = parsedInput[0];
    var minutes = parsedInput[1];

    return intToRomanNumber(hours) + ':' + intToRomanNumber(minutes);
}

function tryParseInput(time) {
    try {
        time.toString();
    } catch (err) {
        throw TypeError('Некорректный ввод');
    }
    if (time.length !== 5 || time.indexOf(':') === -1) {
        throw TypeError('Неправильный формат времени');
    }

    var splittedString = time.split(':');
    if (splittedString.length !== 2) {
        throw TypeError('Неправильный формат времени');
    }

    var hours = parseInt(splittedString[0]);
    var minutes = parseInt(splittedString[1]);
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw TypeError('Неправильный формат времени');
    }

    return [hours, minutes];
}

function intToRomanNumber(number) {
    // TODO: Придумать что-нибудь с именованием, ибо оно не очень
    var result = '';
    if (number === 0) {
        result = 'N';
    } else {
        var indexOfBiggestPossibleRomanDigit = 4;
        var romanInts = [0, 1, 5, 10, 50];
        var romanDigits = ['N', 'I', 'V', 'X', 'L'];
        while (number !== 0) {
            var indexOfPossibleDigitBefore = getIndexOfPossibleDigitBefore(indexOfBiggestPossibleRomanDigit);
            while (number >= romanInts[indexOfBiggestPossibleRomanDigit] - romanInts[indexOfPossibleDigitBefore]) {
                number -= romanInts[indexOfBiggestPossibleRomanDigit];
                if (number < 0) {
                    if (indexOfPossibleDigitBefore === 0)
                        throw new Error('Какая-то чушь произошла');
                    result += romanDigits[indexOfPossibleDigitBefore];
                    number += romanInts[indexOfPossibleDigitBefore];
                }
                result += romanDigits[indexOfBiggestPossibleRomanDigit];
            }
            indexOfBiggestPossibleRomanDigit--;
        }
    }

    return result;
}

function getIndexOfPossibleDigitBefore(index) {
    if (index > 1) {
        return index - index%2 - 1;
    }

    return 0;
}

function checkIntToRomanNumber() {
    var i = 0;
    while (i <= 60) {
        console.log('' + i + ' = ' + intToRomanNumber(i));
        i++;
    }
}

module.exports = romanTime;
