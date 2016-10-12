'use strict';

var ONE = 'I';
var FIVE = 'V';
var TEN = 'X';
var FIFTY = 'L';
function checkMinutesArgument(minutes) {
    if (isNaN(minutes) || minutes < 0 || minutes > 59) {
        throw new TypeError();
    }
}
function checkHoursArgument(hours) {
    if (isNaN(hours) || hours < 0 || hours > 23) {
        throw new TypeError();
    }
}

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
    checkMinutesArgument(minutes);
    checkHoursArgument(hours);
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
function processNoRemainder(digit) {
    if (digit === 5) {
        return isDecade ? FIFTY : FIVE;
    }
    
    return 'N';
}
function processMinusOneRemainder(digit) {
    if (digit > 5) {
        return isDecade ? 'NotImplenented' : ONE + TEN;
    }

    return isDecade ? TEN + FIFTY : ONE + this.FIVE;
}
function processDefaultRemainder(digit, remainder) {
    if (digit > 5) {
        return isDecade ? FIFTY + TEN.repeat(remainder) : FIVE + ONE.repeat(remainder);
    }

    return isDecade ? TEN.repeat(remainder) : ONE.repeat(remainder);
}
function digitToRoman(digit, isDecade) {
    if (typeof(isDecade) === 'undefined') {
        isDecade = false;
    }
    var remainder = digit % 5;
    switch (remainder) {
        case 0:
            return processNoRemainder(digit);
        case 4:
            return processMinusOneRemainder(digit);
        default:
            return processDefaultRemainder(digit, remainder);
    }
}
module.exports = romanTime;
