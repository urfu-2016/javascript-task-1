'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (typeof time !== 'string') {
        throw new TypeError();
    }
    var numbers = time.split(':');
    if (numbers.length !== 2) {
        throw new TypeError();
    }

    return convertTime(numbers);
}

function convertTime(numbers) {
    var hours = convertNumber(numbers[0], 23);
    var minutes = convertNumber(numbers[1], 59);

    return hours + ':' + minutes;
}

function convertNumber(stringNumber, maxValue) {
    var number = parseNumber(stringNumber, maxValue);
    var highOrder = convertHighOrderDigit(Math.floor(number / 10));
    var lowerOrder = convertLowerOrderDigit(number % 10);
    var romeDigit = highOrder + lowerOrder;

    return romeDigit === '' ? 'N' : romeDigit;
}

function parseNumber(stringNumber, maxValue) {
    if (stringNumber.match(/^\d{2}$/) === null) {
        throw new TypeError();
    }
    var number = parseInt(stringNumber);
    if (number > maxValue) {
        throw new TypeError();
    }

    return number;
}

function convertHighOrderDigit(digit) {
    if (digit === 5) {
        return 'L';
    }
    var romeDigit = '';
    for (var i = 1; i <= digit; i++) {
        romeDigit += 'X';
    }

    return romeDigit;
}

function convertLowerOrderDigit(digit) {
    switch (digit) {
        case 1:
            return 'I';
        case 2:
            return 'II';
        case 3:
            return 'III';
        case 4:
            return 'IV';
        case 5:
            return 'V';
        case 6:
            return 'VI';
        case 7:
            return 'VII';
        case 8:
            return 'VIII';
        case 9:
            return 'IX';
        default:
            return '';
    }
}

module.exports = romanTime;
