'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanNumber(number) {
	var ROMAN_NUMERALS = {50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'};
	var result = '';
	var numerals = Object.keys(ROMAN_NUMERALS).sort(function(a, b) {return b - a});
	if (number == 0) {
		return 'N';
	}
	var i;
	for (i = 0; i < numerals.length; i++) {
		while (numerals[i] <= number) {
			result += ROMAN_NUMERALS[numerals[i]];
			number -= numerals[i];
		}
	}
	return result;
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var hours = time.split(':')[0];
    var minutes = time.split(':')[1];
    var hoursCheck = Number(hours) < 24 && Number(hours) >= 0;
    var minutesCheck = Number(minutes) >= 0 && Number(minutes) < 60;
    if (hoursCheck && minutesCheck) {
    	return romanNumber(Number(hours)) + ':' + romanNumber(Number(minutes));
    }
    else {
    	throw new TypeError('Неверное время');
    }
}

module.exports = romanTime;
