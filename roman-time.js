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

function romanTime(time) {
    if (time === undefined || time === null) {
        throw new TypeError();
    }
    var splitTime = time.split(':');
    var parseHour = parseInt(splitTime[0]);
    var parseMinute = parseInt(splitTime[1]);
    if (isNaN(parseHour) || isNaN(parseMinute) || parseHour > 23 || parseMinute > 59) {
        throw new TypeError();
    }

    return toRomanTime(parseHour, parseMinute);
}

module.exports = romanTime;
