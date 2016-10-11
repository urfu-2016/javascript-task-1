'use strict';

function transformNum(arabicNumeral) {
    var romanNumeral = '';
    var romanNumerals = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    var arabicNumerals = [1, 4, 5, 9, 10, 40, 50];
    var position = romanNumerals.length - 1;
    if (arabicNumeral === 0) {
        return 'N';
    }
    while (arabicNumeral > 0) {
        if (arabicNumeral >= arabicNumerals[position]) {
            romanNumeral += romanNumerals[position];
            arabicNumeral -= arabicNumerals[position];
        }
        --position;
    }

    return romanNumeral;
}

function toRomanTime(parseHour, parseMinute) {
    var romanHour = transformNum(parseHour);
    var romanMinute = transformNum(parseMinute);

    return romanHour + ':' + romanMinute;
}

function checkTime(time) {
    if (time === undefined || time === null) {
        throw new TypeError();
    }
}

function checkNum(num) {
    if (isNaN(parseHour) || isNaN(parseMinute) || parseHour > 23 || parseMinute > 59) {
        throw new TypeError();
    }
}

function romanTime(time) {
    checkTime(time);
    var splitTime = time.split(':');
    var parseHour = parseInt(splitTime[0]);
    var parseMinute = parseInt(splitTime[1]);
    checkNum(parseHour);
    checkNum(parseMinute);

    return toRomanTime(parseHour, parseMinute);
}

module.exports = romanTime;
