'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var unitsRoman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VII", "IX"];
var tensRoman = ["", "X", "XX", "XXX", "XL", "L"];

function convertUnitsRoman(units) {
    return unitsRoman[units];
}

function convertTensRoman(tens) {
    return tensRoman[tens];
}

function timeInRoman(time) {
    var splitedTime = time.split("");
    var hourTen = convertTensRoman(parseInt(splitedTime[0]));
    var hourUnits = convertUnitsRoman(parseInt(splitedTime[1]));
    var minuteTen = convertTensRoman(parseInt(splitedTime[2]));
    var minuteUnits = convertUnitsRoman(parseInt(splitedTime[3]));
    if (hourTen + hourUnits === "") {
        hourUnits = "N";
    }
    if (minuteTen + minuteUnits === "") {
        minuteUnits = "N";
    }
    time = hourTen + hourUnits + ":" + minuteTen + minuteUnits;
    return time;
}

function romanTime(time) {
    if (!/^([0-2][0-3]|[0-1]\d):[0-5]\d$/.test(time)) {
        throw new TypeError("Неверное время");
    }
    if (time === "00:00") {
        time = "N:N";
    }
    if (/^([0-2][0-3]|[0-1]\d):[0-5]\d$/.test(time)) {
        time = time.replace(/:/, "");
        time = timeInRoman(time);
    }
	return time;
}


module.exports = romanTime;
