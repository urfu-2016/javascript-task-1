'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var dozenToRoman = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
var unitsToRoman = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function convertIntToRoman(number) {
    var dozens = Math.floor(number / 10);
    var units = number % 10;
    if (dozens !== 0 || units !== 0) {
        return dozenToRoman[dozens] + unitsToRoman[units];
    }

    return 'N';
}

function romanTime(time) {
    try {
        var expr = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
        var timeMatch = time.match(expr);
        var romanHours = convertIntToRoman(parseInt(timeMatch[1]));
        var romanMinutes = convertIntToRoman(parseInt(timeMatch[2]));

        return romanHours + ':' + romanMinutes;
    } catch (e) {
        throw new TypeError('Неверное время');
    }
}

module.exports = romanTime;
