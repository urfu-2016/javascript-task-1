'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (time === undefined) {
        throw new TypeError('Неверный формат времени!');
    }
    var partsOfTime = time.split(':');
    if (partsOfTime.length !== 2) {
        throw new TypeError('Неверный формат времени!');
    }
    var resultTime = '';
    for (var i = 0; i < partsOfTime.length; i++) {
        if (isNaN(partsOfTime[i]) || (!isValidNumber(partsOfTime[i]))) {
            throw new TypeError('Неверный формат времени!');
        }
    }
    var romanHours = translateValidTime(partsOfTime[0], 24);
    resultTime += romanHours;
    resultTime += ':';
    var romanMinutes = translateValidTime(partsOfTime[1], 60);
    resultTime += romanMinutes;

    return resultTime;
}

function translateValidTime(number, border) {
    if (parseInt(number) < border) {
        return decimalToRoman(number);
    }
    throw new TypeError('Неверный формат времени!');
}

function isValidNumber(number) {
    if (number.length !== 2) {
        return false;
    } else if (isNaN(number.charAt(0)) || isNaN(number.charAt(1))) {
        return false;
    }

    return true;
}

function decimalToRoman(number) {
    var romanNumber = '';
    if (number === '00') {
        romanNumber = 'N';

        return romanNumber;
    }
    romanNumber += changeFirstDigit(number.charAt(0));
    romanNumber += changeSecondDigit(number.charAt(1));

    return romanNumber;
}

function changeFirstDigit(digit) {
    var firstDigit = {
        '0': '',
        '1': 'X',
        '2': 'XX',
        '3': 'XXX',
        '4': 'XL',
        '5': 'L'
    };

    return firstDigit[digit];
}

function changeSecondDigit(digit) {
    var secondDigit = {
        '0': '',
        '1': 'I',
        '2': 'II',
        '3': 'III',
        '4': 'IV',
        '5': 'V',
        '6': 'VI',
        '7': 'VII',
        '8': 'VIII',
        '9': 'IX'
    };

    return secondDigit[digit];
}

module.exports = romanTime;
