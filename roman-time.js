'use strict';

var ROMAN_NUMS = {
    0: 'N',
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
};


var numSorterDesc = function (a, b) {
    return b - a;
};


var _reducer = function (previousValue, currentValue, currentIndex, array) {
    if (typeof previousValue !== 'object') {
        previousValue = ['', previousValue];
    }

    var currentRoman = previousValue[0];
    var currentNumber = previousValue[1];

    if (currentNumber <= 0 || currentNumber < currentValue) {
        return currentIndex === array.length - 1
            ? currentRoman
            : previousValue;
    }

    var newRoman = currentRoman + ROMAN_NUMS[currentValue];
    var newNumber = currentNumber - currentValue;
    var newValue = [newRoman, newNumber];

    return _reducer(newValue, currentValue, currentIndex, array);
};


var toSmallRoman = function (number) {
    if (typeof number !== 'number') {
        throw new TypeError('Argument must be a number');
    }

    if (number < 0 || number > 3999) {
        throw new RangeError('Argument must be in a range between 0 and 3999');
    }

    return ROMAN_NUMS[number] ||
        Object.keys(ROMAN_NUMS)
            .sort(numSorterDesc)
            .reduce(_reducer, number);
};


var romanTime = function (time) {
    if (typeof time !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    if (!time.match(/([01][0-9]|[2][0-3]):[0-5][0-9]/)) {
        throw new TypeError('Argument must be in HH:MM format');
    }

    return time
        .split(':')
        .map(Number)
        .map(toSmallRoman)
        .join(':');
};


module.exports = romanTime;
