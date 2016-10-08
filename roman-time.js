'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var parsedInput = tryParseInput(time);
    var hours = parsedInput[0];
    var minutes = parsedInput[1];
    return intToRomanNumber(hours) + " " + intToRomanNumber(minutes);
}

function tryParseInput(time) {
    var hours = 0;
    var minutes = 0;
    return [hours, minutes];
}

function intToRomanNumber(number) {
    var result = "";
    return result;
}

module.exports = romanTime;
