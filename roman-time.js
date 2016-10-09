'use strict';

var romanNumbers = ["N", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var romanDecade = ["X", "XX", "XXX", "XL", "L"];

function getRomanType(number) {
    var decade = (number - number % 10) / 10;
    var units = number % 10;
    var time = "";
    if (number === 0) {
        time += "N";

        return time;
    }
    if (decade > 0) {
        time += romanDecade[decade - 1];
    }
    if (units > 0) {
        time += romanNumbers[units];
    }

    return time;
}

function checkFormat(time) {
    if (time.length !== 5 || time === null || time === undefined) {
        throw new TypeError('Неверное время');
    }
}

function checkHours(hours) {
    if (hours >= 24 || hours < 0 || isNaN(hours)) {
        throw new TypeError('Неверное время');
    }
}

function checkMinutes(minutes) {
    if (minutes >= 60 || minutes < 0 || isNaN(minutes)) {
        throw new TypeError('Неверное время');
    }
}

function romanTime(time) {
    checkFormat(time);
    var numbers = time.split(":");
    var hours = parseInt(numbers[0]);
    var minutes = parseInt(numbers[1]);
    checkHours(hours);
    checkMinutes(minutes);
    time = getRomanType(hours) + ":" + getRomanType(minutes);

    return time;
}
module.exports = romanTime;
