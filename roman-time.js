'use strict';

var firstNumeral = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
var secondNumeral = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var hours;
var minuts;
var colon = ':';
var arrayOfStrings = [];
var firstIndex;
var secondIndex;

function splitSpring(stringToSplit, separator) {
    arrayOfStrings = stringToSplit.split(separator);
    hours = parseInt(arrayOfStrings[0]);
    minuts = parseInt(arrayOfStrings[1]);
}

function checkArrayIsNan(checkArrayOfStrings) {
    if (isNaN(checkArrayOfStrings[0]) || isNaN(checkArrayOfStrings[1])) {
        throw new TypeError('Некорректный формат');
    }
}

function checkValue(checkArrayOfStrings) {
    if (checkArrayOfStrings === null || checkArrayOfStrings.length !== 2) {
        throw new TypeError('Некорректный формат');
    }
}

function checkLength(checkArrayOfStrings) {
    if (checkArrayOfStrings[0].length !== 2 || checkArrayOfStrings[1].length !== 2) {
        throw new TypeError('Длина числа больше двух символов');
    }
}

function checkTime(checkHours, checkMinuts) {
    if (checkHours < 0 || checkHours > 23 || checkMinuts < 0 || checkMinuts > 59) {

        return true;
    }
}

function convertToRome(arabicNumber) {
    if (arabicNumber == '00') {

        return ('N');
    }
    firstIndex = arabicNumber / 10;
    firstIndex = parseInt(firstIndex, 10);
    secondIndex = arabicNumber % 10;

    return firstNumeral[firstIndex] + secondNumeral[secondIndex];
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    splitSpring(time, colon);
    if (checkTime(hours, minuts)) {
        throw new TypeError('Время указано в некорректном диапазоне');
    } else {
        checkLength(arrayOfStrings);
        checkArrayIsNan(arrayOfStrings);
        checkValue(arrayOfStrings);

        return convertToRome(hours) + ':' + convertToRome(minuts);
    }
}

module.exports = romanTime;
