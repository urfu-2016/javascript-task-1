'use strict';

function romanTime(time) {
    checkTime(time);
    var arrayOfTime = (time.toString()).split(':');
    var hourArab = parseInt(arrayOfTime[0], 10);
    var minArab = parseInt(arrayOfTime[1], 10);
    if (checkHour(hourArab, arrayOfTime[0]) + checkMinute(minArab, arrayOfTime[1]) > 0) {
        throw new TypeError('Неверное время');
    }
    var hourRoman = hourChange(hourArab);
    var minRoman = minChange(minArab);
    time = hourRoman + ':' + minRoman;

    return time;
}

function checkTime(time) {
    var arrayTime = (time.toString()).split(':');
    if (time === null || time === undefined || arrayTime.length !== 2 || time.length !== 5) {
        throw new TypeError('Неверное время');
    }
    if (/[^[0-9,:]/.test(time)) {
        throw new TypeError('Неверное время');
    }
}

function checkHour(hourArab) {
    if (isNaN(hourArab) || hourArab > 23 || hourArab < 0) {
        return 1;
    }

    return 0;
}

function checkMinute(minArab) {
    if (isNaN(minArab) || minArab > 59 || minArab < 0) {
        return 1;
    }

    return 0;
}

function hourChange(hourArab) {
    var hour = null;
    if (hourArab === 0) {
        hour = 'N';
    } else {
        hour = parseNumber(hourArab);
    }

    return hour;
}

function minChange(minArab) {
    var minute = null;
    if (minArab === 0) {
        minute = 'N';
    } else {
        minute = parseNumber(minArab);
    }

    return minute;
}

function parseNumber(num) {
    var arabic = [1, 4, 5, 9, 10, 40, 50];
    var romanic = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    var roman = '';
    var index = arabic.length - 1;
    while (num !== 0) {
        if (num >= arabic[index]) {
            num -= arabic[index];
            roman += romanic[index];
        } else {
            index--;
        }
    }

    return roman;
}

module.exports = romanTime;
