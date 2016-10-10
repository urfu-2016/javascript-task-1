'use strict';

var ARABIC = [1, 4, 5, 9, 10, 40, 50];
var ROMAN = ["I", "IV", "V", "IX", "X", "XL", "L"];
var separator = ":";

function isCorrectTime(time) {
    if ((canSeparate(time)) && (parseInt(splitTime(time)[0], 10) > -1) &&
    (parseInt(splitTime(time)[0], 10) < 24) && (parseInt(splitTime(time)[1], 10) > -1) &&
    (parseInt(splitTime(time)[1], 10) < 60) && (time.length === 5)) {
        return true;
    }

    return false;
}

function splitTime(time) {
    var separatedTime = time.split(separator);

    return separatedTime;
}

function canSeparate(time) {
    var REG_EXP = /\d{2}:\d{2}/;
    if (REG_EXP.test(time)) {
        return true;
    }

    return false;
}

function convertTime(number) {
    if (number === 0) {
        return "N";
    }

    var result = "";
    var n = ARABIC.length - 1;
    while (number > 0) {
        if (number >= ARABIC[n]) {
            result += ROMAN[n];
            number -= ARABIC[n];
        } else {
            n--;
        }
    }

    return result;
}

function romanTime(time) {
    if (!isCorrectTime(time)) {
        throw new TypeError('Неверное время');
    } else {
        var hours = parseInt(splitTime(time)[0], 10);
        var minutes = parseInt(splitTime(time)[1], 10);

        return convertTime(hours) + separator + convertTime(minutes);
    }
}

module.exports = romanTime;
