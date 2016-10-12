'use strict';


/**
 * @param {Number} number – входное число
 * @param {Number} min – нижняя граница диапазона
 * @param {Number} max – верхняя граница диапазона
 * @returns {Boolean} – является ли входное число целым числом из данного диапазона
 */
function isIntegerFromRange(number, min, max) {
    return (
        typeof number === 'number' &&
        !isNaN(number) &&
        number % 1 === 0 &&
        number >= min &&
        number <= max);
}


/**
 * @param {Number} number – натуральное число от 0 до 3999
 * @returns {String} – входное число, записанное римскими цифрами
 */
function naturalNumberToRomanNumeral(number) {
    if (!isIntegerFromRange(number, 0, 3999)) {
        throw new TypeError('The input is not a natural number from [0; 3999]');
    }

    var arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    if (number === 0) {
        return 'N';
    }

    var result = '';
    for (var i = arabic.length - 1; i >= 0; i--) {
        while (number >= arabic[i]) {
            number -= arabic[i];
            result += roman[i].toString();
        }
    }

    return result;
}


/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (typeof time !== 'string') {
        throw new TypeError('The parameter is not a string');
    }

    if (!/^\d+:\d+$/.test(time)) {
        throw new TypeError('The parameter is not a pair of numbers separated by a colon');
    }

    var parts = time.split(':');
    if (parts.length !== 2) {
        throw new TypeError(
            'The parameter is divided by colons into a number of parts other than two');
    }

    var hours = parseInt(parts[0], 10);
    var minutes = parseInt(parts[1], 10);

    if (!isIntegerFromRange(hours, 0, 23)) {
        throw new TypeError(
            'The hours part is not a valid natural number or lies outside of [0; 23]');
    }
    if (!isIntegerFromRange(minutes, 0, 59)) {
        throw new TypeError(
            'The minutes part is not a valid natural number or lies outside of [0; 59]');
    }

    return (
        naturalNumberToRomanNumeral(hours) +
        ':' +
        naturalNumberToRomanNumeral(minutes));
}


module.exports = romanTime;
