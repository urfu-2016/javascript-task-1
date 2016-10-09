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

function romanTime(time) {
    var numbers = time.split(":");
    var hours = 0;
    var minutes = 0;
    try {
        hours = parseInt(numbers[0]);
        minutes = parseInt(numbers[1]);
    } catch (e) {
        console.error(e.message);
    }
    if (hours >= 24 || hours < 0 || minutes >= 60 || minutes < 0) {
        throw new TypeError('Неверное время');
    }
    time = getRomanType(hours) + ":" + getRomanType(minutes);

    return time;
}
module.exports = romanTime;
