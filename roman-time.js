'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    checkInput(time);
    var hours = time.split(':')[0];
    var minutes = time.split(':')[1];
    if (hours > 23 || minutes > 59) {
        throw new TypeError();
    }
    time = setRomanNumerals(hours);
    time += ':' + setRomanNumerals(minutes);

    return time;
}


function checkInput(time) {
    if (!time) {
        throw new TypeError();
    }
    var regLetter = /[^0-9:]/;
    if (time.search(regLetter) !== -1) {
        throw new TypeError();
    }
    if (time.length > 5) {
        throw new TypeError();
    }
}


function setRomanNumerals(number) {
    var dozens = ['X', 'XX', 'XXX', 'XL', 'L'];
    var numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    return dozens[Number(number[0]) - 1] + numerals[Number(number[1]) - 1];
}


module.exports = romanTime;
