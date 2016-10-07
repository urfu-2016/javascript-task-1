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
    if (stringNumber.match(/^\d\d?$/) === null) {
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

    return joinSymbols('', 'X', digit);
}

function convertLowerOrderDigit(digit) {
    if (digit >= 0 && digit <= 3) {
        return joinSymbols('', 'I', digit);
    }
    if (digit === 4) {
        return 'IV';
    }
    if (digit >= 5 && digit <= 8) {
        return joinSymbols('V', 'I', digit - 5);
    }
    if (digit === 9) {
        return 'IX';
    }
}

function joinSymbols(thisSymbol, thatSymbol, count) {
    for (var i = 1; i <= count; i++) {
        thisSymbol += thatSymbol;
    }

    return thisSymbol;
}

module.exports = romanTime;
