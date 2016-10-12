'use strict';

function checkMinutesArgument(minutes) {
    if (isNaN(minutes) || minutes < 0 || minutes > 59) {
        throw new TypeError();
    }
}
function checkHoursArguments(hours) {
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
        return isDecade ? this.FIFTY : this.FIVE;
    }
    
    return 'N';
}
function processMinusOneRemainder(digit) {
    if (digit > 5) {
        return isDecade ? 'NotImplenented' : this.ONE + this.TEN;
    }

    return isDecade ? this.TEN + this.FIFTY : this.ONE + this.FIVE;
}
function processDefaultRemainder(digit, remainder) {
    if (digit > 5) {
        return isDecade ? this.FIFTY + this.TEN.repeat(remainder) : this.FIVE + this.ONE.repeat(remainder);
    }

    return isDecade ? thisTEN.repeat(remainder) : this.ONE.repeat(remainder);
}
function digitToRoman(digit, isDecade) {
    if (typeof(isDecade) === 'undefined') {
        isDecade = false;
    }
    this.ONE = 'I';
    this.FIVE = 'V';
    this.TEN = 'X';
    this.FIFTY = 'L';
    var remainder = digit % 5;
    switch (remainder) {
        case 0:
            return processNoRemainder(digit);
        case 4:
            return processMinusOneDelimiter(digit);
        default:
            return processDefault(digit, remainder);
    }
}
module.exports = romanTime;
