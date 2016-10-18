'use strict';

/**
 * @param {String} string
 * @returns {String}
 */
function arabicToRoman(string) {
    var rTime = '';
    var number = Number(string);
    var xList = ['X', 'XX', 'XXX', 'XL', 'L'];
    var iList = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    if (number === 0) {
        return 'N';
    }
    if (number > 9) {
        rTime += xList[Math.floor(number / 10) - 1];
    }
    number = number % 10;
    if (number > 0) {
        rTime += iList[number - 1];
    }

    return rTime;
}

/**
 * @param {String} hours
 * @param {String} minutes
 * @returns {Boolean}
 */
function isCorrect(hours, minutes) {
    var corHours = (hours.length === 2) && (typeof hours === 'string') && (Number(hours) >= 0) &&
    (Number(hours) < 24);
    var corMinutes = (hours.length === 2) && (typeof hours === 'string') &&
    (Number(minutes) >= 0) && (Number(minutes) < 60);
    if (corHours && corMinutes) {
        return true;
    }

    throw new TypeError('Bad input');
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var splitedTime = time.split(':');

    if (isCorrect(splitedTime[0], splitedTime[1])) {
        return arabicToRoman(splitedTime[0]) + ':' + arabicToRoman(splitedTime[1]);
    }
}

module.exports = romanTime;
