'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var romanUnits = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var romanTens = ['X', 'XX', 'XXX', 'XL', 'L'];

function arabToRoman(arabNumber) {
    if (arabNumber === 0) {
        return romanUnits[0];
    }

    var rom = '';
    var dec = Math.floor(arabNumber / 10);
    var units = arabNumber % 10;

    if (dec > 0) {
        rom += romanTens[dec - 1];
    }
    if (units > 0) {
        rom += romanUnits[units];
    }

    return rom;
}

function parseNumber(number, min, max) {
    var num = parseInt(number, 10);
    if (isNaN(num) || num < min || number > max) {
        throw new TypeError();
    }

    return num;
}

function romanTime(time) {
    if (typeof time !== 'string') {
        throw new TypeError('Неверное время');
    }

    var hoursAndMinutes = time.split(':');
    if (hoursAndMinutes.length !== 2) {
        throw new TypeError('Неверное время');
    }

    var hours = '';
    var minutes = '';
    try {
        hours = parseNumber(hoursAndMinutes[0], 0, 23);
        minutes = parseNumber(hoursAndMinutes[1], 0, 59);
    } catch (e) {
        throw new TypeError('Неверное время');
    }

    return arabToRoman(hours) + ':' + arabToRoman(minutes);
}

module.exports = romanTime;
