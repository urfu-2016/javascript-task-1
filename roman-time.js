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
function checkSplittedTime(splittedTime) {
    if (splittedTime.length !== 2) {
        throw new TypeError();
    }
    if (splittedTime[0].length !== 2 || splittedTime[1].length !== 2) {
        throw new TypeError();
    }
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var splittedTime = time.split(':');
    checkSplittedTime(splittedTime);
    if (isNaN(parseInt(splittedTime[0][1]))) {
        throw new TypeError();
    }
    if (isNaN(parseInt(splittedTime[1][1]))) {
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
    if (onesCount === 0) {
        return digitToRoman(decadesCount, true);
    }

    return digitToRoman(decadesCount, true) + digitToRoman(onesCount);
}
function processNoRemainder(isDecade, digit) {
    if (digit === 5) {
        return isDecade ? FIFTY : FIVE;
    }

    return 'N';
}
function processMinusOneRemainder(isDecade, digit) {
    if (digit > 5) {
        return isDecade ? 'NotImplenented' : ONE + TEN;
    }

    return isDecade ? TEN + FIFTY : ONE + FIVE;
}
function processDefaultRemainder(isDecade, digit, remainder) {
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
            return processNoRemainder(isDecade, digit);
        case 4:
            return processMinusOneRemainder(isDecade, digit);
        default:
            return processDefaultRemainder(isDecade, digit, remainder);
    }
}
module.exports = romanTime;
