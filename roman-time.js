'use strict';

var romanMap = {
    0: 'N',
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L'
};

function getNextMaxNumber(number, keys) {
    return Math.max.apply(null, keys.filter(function (key) {
        return number >= key;
    }));
}

function getRomanNumber(number) {
    var roman = '';
    var keys = Object.keys(romanMap);
    do {
        var nextNumber = getNextMaxNumber(number, keys);
        number -= nextNumber;
        roman += romanMap[nextNumber];
    } while (number > 0);

    return roman;
}

function getInt(string) {
    return parseInt(string);
}

function isInvalidTime(string) {
    return !/^\d\d:\d\d$/.test(string);
}

function isInvalidTimeRange(time) {
    return !isInRange(time[0], 0, 23) || !isInRange(time[1], 0, 59);
}

function isInRange(number, start, end) {
    return number >= start && number <= end;
}

function throwIf(condition) {
    if (condition) {
        throw new TypeError('Неверное время');
    }
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    time = time || '';

    throwIf(isInvalidTime(time));
    var timeNumbers = time.split(':').map(getInt);
    throwIf(isInvalidTimeRange(timeNumbers));

    return timeNumbers.map(getRomanNumber).join(':');
}

module.exports = romanTime;
