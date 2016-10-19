'use strict';

var ou = 'N';
var first = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var second = ['X', 'XX', 'XXX', 'XL', 'L', 'LX'];

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */


function romanTime(time) {

    var parts = time.split(':');

    var hours = parseInt(parts[0], 10);
    var minutes = parseInt(parts[1], 10);

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 60) {
         throw new TypeError();
    }

    time = arToRom(hours) + ':' + arToRom(minutes);
    return time;

}

function arToRom(pattern) {

    var resPattern = '';

    resPattern += first[pattern % 10];
    resPattern += second[(pattern / 10) % 10];

    if (resPattern === '') {
         resPattern = ou; 
    }

    return resPattern;

}

module.exports = romanTime;
