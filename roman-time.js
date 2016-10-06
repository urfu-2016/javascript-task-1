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

function getRomanNumber(number) {
    var roman = '';
    var keys = Object.keys(romanMap);
    do {
        for (var i = keys.length - 1; i >= 0; i--) {
            if (number >= keys[i]) {
                number -= keys[i];
                roman += romanMap[keys[i]];
                break;
            }
        }
    } while (number > 0);
    return roman;
}

function isInRange(number, start, end) {
    return number >= start && number <= end;
}

Object.prototype.throwIf = function(f) {
    if (f(this))
        throw new TypeError('Неверное время');
    return this;
};

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    return (time || '')
        .throwIf(s => !/\d\d:\d\d/.test(s))
        .split(':')
        .map(i => parseInt(i))
        .throwIf(arr => !isInRange(arr[0], 0, 23) || !isInRange(arr[1], 0, 59))
        .map(getRomanNumber)
        .join(':');
}

module.exports = romanTime;
