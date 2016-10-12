'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var splittedTime = time.split(':');
    if (splittedTime.length !== 2) {
        throw new TypeError();
    }
    var hours = parseInt(splittedTime[0]);
    var minutes = parseInt(splittedTime[1]);
    if (isNaN(minutes) || minutes < 0 || minutes > 59) { 
        throw new TypeError();
    }
    if (isNaN(hours) || hours < 0 || hours > 23) {
        throw TypeError;
    }
    var convertedMinutes = convertToRoman(minutes);
    var convertedHours = convertToRoman(hours);
	
    return (convertedHours + ':' + convertedMinutes);
}
function convertToRoman(number) {
    var decadesCount = Math.floor(number / 10);
    var onesCount = number % 10;
    if (decadesCount === 0) {
        return digitToRoman(onesCount);
    }
	
    return digitToRoman(decadesCount, true) + digitToRoman(onesCount);
}
function digitToRoman(digit, isDecade) {
    if (typeof(isDecade) === 'undefined') {
        isDecade=false;
    }
    var one = 'I';
    var five = 'V';
    var ten = 'X';
    var fifty = 'L';
    var remainder = digit % 5;
    switch (remainder) {
        case 0:
            if (digit === 5) {
                return isDecade ? fifty : five;
            }
			
            return 'N';
        case 4:
            if (digit > 5) {
                return isDecade ? 'NotImplenented' : one + ten;
            }
			
            return isDecade ? ten + fifty : one + five;
        default:
            if (digit > 5) {
                return isDecade ? fifty + ten.repeat(remainder) : five + one.repeat(remainder);
            }
			
            return isDecade ? ten.repeat(remainder) : one.repeat(remainder);
    }
}
module.exports = romanTime;
