'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var ROME_NUMBERS_DICTIONARY = {
    '0': 'N',
    '1': 'I',
    '2': 'II',
    '3': 'III',
    '4': 'IV',
    '5': 'V',
    '6': 'VI',
    '7': 'VII',
    '8': 'VIII',
    '9': 'IX',
    '10': 'X',
    '20': 'XX',
    '30': 'XXX',
    '40': 'XL',
    '50': 'L'
};

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    checkInputCorrectness(time);
    var splittedTime = time.split(':');
    var hours = splittedTime[0];
    var minutes = splittedTime[1];

    var hoursDigits = getTimeDigits(hours);
    var minutesDigits = getTimeDigits(minutes);

    var romeHours = getRomeNumber(hoursDigits);
    var romeMinutes = getRomeNumber(minutesDigits);
    time = romeHours + ':' + romeMinutes;

    return time;
}

function getTimeDigits(time) {
    var decimalDigit = parseInt(time[0]);
    var unitDigit = parseInt(time[1]);

    return { 'decimalDigit': decimalDigit, 'unitDigit': unitDigit };
}

function checkInputCorrectness(time) {
    var re = /^\d\d:\d\d$/g;
    if (typeof(time) !== 'string') {
        throw new TypeError('Неверный тип введенных данных');
    } else if (time.match(re) === null) {
        throw new TypeError('Неверный формат времени');
    } else {
        var splittedTime = time.split(':');
        if (isTimeIncorrect(splittedTime)) {
            throw new TypeError('Неверное время');
        }
    }
}

function isTimeIncorrect(splittedTime) {
    var hours = parseInt(splittedTime[0]);
    var minutes = parseInt(splittedTime[1]);

    return !(hours <= 23 && hours >= 0 && minutes <= 59 && minutes >= 0);
}

function getRomeNumber(decimalNumber) {
    var romeTime = '';
    var decimalPart = decimalNumber.decimalDigit * 10;
    if (ROME_NUMBERS_DICTIONARY.hasOwnProperty(decimalPart.toString()) &&
        decimalPart !== 0) {
        romeTime += ROME_NUMBERS_DICTIONARY[decimalPart.toString()];
    } else {
        romeTime += ROME_NUMBERS_DICTIONARY['10'].repeat(decimalNumber.decimalDigit);
    }

    romeTime += ROME_NUMBERS_DICTIONARY[decimalNumber.unitDigit.toString()];

    return romeTime;
}

module.exports = romanTime;
