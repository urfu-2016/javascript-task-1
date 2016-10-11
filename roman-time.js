'use strict';

function transformNum(arabicNumeral) {
    var romanNumeral = '';
    var romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'IX', 'X', 'XX', 'XXX', 'XL', 'L'];
    var arabicNumerals = [1, 2, 3, 4, 5, 9, 10, 20, 30, 40, 50];
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
    var timeRegExp = /^\d\d:\d\d$/;
    if (time === undefined || time === null || time.length !== 5 || !timeRegExp.test(time)) {
        throw new TypeError();
    }
}

function checkNum(num, isHour) {
    if (isNaN(num) || (isHour ? num > 23 : num > 59)) {
        throw new TypeError();
    }
}

function romanTime(time) {
    checkTime(time);
    var splitTime = time.split(':');
    var parseHour = parseInt(splitTime[0], 10);
    var parseMinute = parseInt(splitTime[1], 10);
    checkNum(parseHour, true);
    checkNum(parseMinute, false);

    return toRomanTime(parseHour, parseMinute);
}

module.exports = romanTime;
