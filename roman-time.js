'use strict';


var UNITS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var TENS = ['', 'X', 'XX', 'XXX', 'XL', 'L'];


function parseTime(time) {
    var splited = time.toString().split(':');
    if (splited.length != 2) {
        throw new TypeError('Неверное время');
    }
    var hours = parseInt(splited[0]);
    var minutes = parseInt(splited[1]);
    if (isNaN(hours) || isNaN(minutes)) {
        throw new TypeError('Неверное время');
    }
    if (hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60) {
        throw new TypeError('Неверное время');
    }
    
    return [hours, minutes]
}


function intToRoman(number) {
    if (number == 0) {
        return 'N';
    }

    return TENS[Math.floor(number / 10)] + UNITS[number % 10];
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var [hours, minutes] = parseTime(time);
    
    return intToRoman(hours) + ':' + intToRoman(minutes);
}

module.exports = romanTime;
