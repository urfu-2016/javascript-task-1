'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var splittedTime = time.split(':');
    if (splittedTime.length !== 2) {
        throw new TypeError('Неверное время');
    }
    var answer = [];
    answer.push(romanNumber(filterInt(splittedTime[0]), 23));
    answer.push(romanNumber(filterInt(splittedTime[1]), 59));

    return answer.join(':');
}

function filterInt(value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
        return Number(value);
    }
    
    return NaN;
}

function romanNumber(number, maxValue) {
    if (isNaN(number) || number < 0 || number > maxValue) {
        throw new TypeError('Неверное время');
    }
    var romanNum = "";
    if (number > 9) {
        romanNum += romanTens(Math.floor(number / 10));
    }
    number %= 10;
    romanNum += romanNumerals(number);

    return romanNum === "" ? "N" : romanNum;
}

var TENS_DICTIONARY = {
    1: 'X',
    2: 'XX',
    3: 'XXX',
    4: 'XL',
    5: 'L'
};
function romanTens(num) {
    if (typeof TENS_DICTIONARY[num] !== 'undefined') {
        return TENS_DICTIONARY[num];
    }
}

var NUMERAL_DICTIONARY = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX'
};
function romanNumerals(num) {
    if (typeof NUMERAL_DICTIONARY[num] !== 'undefined') {
        return NUMERAL_DICTIONARY[num];
    }
}

module.exports = romanTime;
