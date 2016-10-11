'use strict';

function toRoman(num) {
    var numArabic = [1, 4, 5, 9, 10, 40, 50];
    var numRoman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    var result = '';
    var n = numArabic.length - 1;
    if (num === 0) {
        result = 'N';
    }
    while (num > 0) {
        if (num >= numArabic[n]) {
            result += numRoman[n];
            num -= numArabic[n];
        } else {
            n--;
        }
    }

    return result;
}

function wrongTime(time) {
    if (time === null || time === undefined || time === Infinity || time === -Infinity) {

        return true;
    }

    return false;
}

function wrongHour(hour) {
    if (hour >= 24 || hour < 0 || isNaN(hour)) {

        return true;
    }

    return false;
}

function wrongMinutes(minutes) {
    if (minutes >= 60 || minutes < 0 || isNaN(minutes)) {

        return true;
    }

    return false;
}

function romanTime(time) {
    // var e = new TypeError('Неверное время');
    if (wrongTime(time) || time.length > 5) {
        throw new TypeError('Неверное время');
    //    return e.name + ': ' + e.message;
    }
    var splitTime = time.split(':');
    var hour = Number(splitTime[0]);
    var minutes = Number(splitTime[1]);
    if (wrongHour(hour) || wrongMinutes(minutes)) {
        throw new TypeError('Неверное время');
    //    return e.name + ': ' + e.message;
    }

    return toRoman(hour) + ':' + toRoman(minutes);
}

module.exports = romanTime;
