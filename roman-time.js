'use strict';

var arabicToRomanTable = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L'
};

var orderedArabicNumbers = [50, 40, 10, 9, 5, 4, 1];

function romanTime(time) {
    var normalizedTime = normalize(time);
    time = convertTimeToRoman(normalizedTime.hours, orderedArabicNumbers) + ':' +
    convertTimeToRoman(normalizedTime.minutes, orderedArabicNumbers);

    return time;
}

function determineTheOrder(arabicToConvert, orderedNumbers) {
    var orderOfRomanDigits = [];
    var arabicRemain = arabicToConvert;
    var numberOfDigits;
    for (var i = 0; i < orderedNumbers.length; i++) {
        if (arabicRemain < 0) {
            break;
        }
        numberOfDigits = 0;
        var divisionRemain = arabicRemain % orderedNumbers[i];
        if (arabicRemain != divisionRemain) {
            numberOfDigits = (arabicRemain - divisionRemain) / orderedNumbers[i];
            arabicRemain = divisionRemain;
        }

        while (numberOfDigits) {
            orderOfRomanDigits.push(orderedNumbers[i]);
            numberOfDigits--;
        }
    }

    return orderOfRomanDigits;
}

function renderResult(orderOfRoman) {
    var result = '';
    for (var i = 0; i < orderOfRoman.length; i++) {
        result += arabicToRomanTable[orderOfRoman[i]];
    }

    return result;
}

function convertTimeToRoman(time, orderedNumbers) {
    if (time === 0) {
        return 'N';
    }
    var orderOfDigits = determineTheOrder(time, orderedNumbers);

    return renderResult(orderOfDigits);
}

function normalize(time) {
    var splittedTime;
    if (time !== null) {
        splittedTime = time.split(':');
    } else {
        throw new TypeError('Неверное время');
    }
    var hours = parseInt(splittedTime[0]);
    var minutes = parseInt(splittedTime[1]);
    validate(hours, minutes);

    return {
        hours: hours,
        minutes: minutes
    };
}

function validate(hours, minutes) {
    if (isNotValid(hours, 0, 23) || isNotValid(minutes, 0, 59)){
        throw new TypeError('Неверное время');
    }
}

function isNotValid (value, minValue, maxValue) {
    if (isNaN(value) || value < minValue || value > maxValue) {

        return true;
    }

    return false;
}
module.exports = romanTime;
