'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */


function isValidHour(hour) {
    return (hour >= 0 && hour <= 23);
}

function isValidMinute(minute) {
    return (minute >= 0 && minute <= 59);
}

function getHHMM(time) {
    var hhmm = Object();
    var splitted = time.split(":");
    if (splitted.length !== 2) {
        throwError();
    }
    var hours = splitted[0];
    var minutes = splitted[1];
    hhmm.hours = hours;
    hhmm.minutes = minutes;

    return hhmm;
}


function getFirstDigit(num) {
    if (num === 0) {
        return "";
    }
    if (num >= 1 && num <= 3) {
        return repeat("X", num);
    }
    if (num === 4) {
        return "XL";
    }

    return "L";
}


function getDigit(num, first) {
    if (first) {
        return getFirstDigit(num);
    }
    if (num === 0) {
        return "N";
    }
    if (num >= 1 && num <= 3) {
        return repeat("I", num);
    }
    if (num >= 5 && num <= 8) {
        return "V" + repeat("I", num - 5);
    }
    if (num === 9) {
        return "IX";
    }

    return "IV";
}

function repeat(str, n) {
    var res = "";
    for (var i = 0; i < n; i++) {
        res += str;
    }

    return res;
}

function deleteExcess(num) {
    if (num.length === 2 && num[1] === "N") {
        return num[0];
    }

    return num;
}

function getPartRoman(num) {
    var decimals = Math.floor(num / 10);
    var units = num % 10;

    return deleteExcess(getDigit(decimals, true) + getDigit(units, false));
}

function romanTime(time) {
    if (typeof time !== "string") {
        throwError();
    }
    var hhmm = getHHMM(time);
    var hours = hhmm.hours;
    var minutes = hhmm.minutes;
    if (hours.length !== 2 || minutes.length !== 2) {
        throwError();
    }
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    throwIfInvalid(hours, minutes);

    return getPartRoman(hours) + ":" + getPartRoman(minutes);
}

function throwIfInvalid(hours, minutes) {
    if (isNaN(hours) || isNaN(minutes)) {
        throwError();
    }
    if (!(isValidHour(hours) && isValidMinute(minutes))) {
        throwError();
    }
}

function throwError() {
    throw new TypeError("Неверное время");
}

module.exports = romanTime;
