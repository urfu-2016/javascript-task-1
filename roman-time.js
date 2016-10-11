'use strict';


var UNITS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var TENS = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
var PATTERN = /[0-9]+:[0-9]+/;

function isHoursCorrect(hours) {
    return !isNaN(hours) && hours >= 0 && hours < 24;
}

function isMinutesCorrect(minutes) {
    return !isNaN(minutes) && minutes >= 0 && minutes < 60;
}

function parseTime(time) {
	if (!PATTERN.test(time)) {
		throw new TypeError('Неверное время');
	}
    var splittedTime = time.split(':');
    var hours = parseInt(splittedTime[0]);
    var minutes = parseInt(splittedTime[1]);
    if (!isHoursCorrect(hours) || !isMinutesCorrect(minutes)) {
        throw new TypeError('Неверное время');
    }

    return [hours, minutes];
}


function intToRoman(number) {
    if (number === 0) {
        return 'N';
    }

    return TENS[Math.floor(number / 10)] + UNITS[number % 10];
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    return parseTime(time)
    .map(intToRoman)
    .join(':');
}

module.exports = romanTime;
