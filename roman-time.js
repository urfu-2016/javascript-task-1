'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var arrOfTime = time.split(":");
    var hours = Number(arrOfTime[0]);
    var minutes = Number(arrOfTime[1]);
    if (checkValid(time, hours, minutes)) {

        return (getHours(hours) + getMinutes(minutes));
    }
    throw new TypeError("Incorrect data");
}

function checkValid(time, hours, minutes) {
    if (isNaN(hours + minutes)) {

        return false;
    }
    if (!(/^[0-2]\d:[0-6]\d$/).test(time) || (hours >= 24) || (minutes >= 60)) {

        return false;
    }

    return true;
}

module.exports = romanTime;

function getFifty(numb) {
    if (numb === 1) {

        return "L";
    }

    return "";
}

function getTen(numb) {
    if (numb === 0) {

        return "N";
    }
    if (numb === 4) {

        return "XL";
    }
    if ((numb !== 0) && (numb < 4)) {
        var i = 0;
        var a = "";
        while (i < numb) {
            a += "X";
            i++;
        }

        return a;
    }

    return "";
}

function getNum(numb) {
    var a = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    return a[numb];
}

function getHours(hours) {
    if (hours === 0) {

        return ("N:");
    }
    if (hours < 10) {

        return (getNum(hours) + ":");
    }

    return (getTen(Math.floor(hours / 10)) + getNum(hours % 10) + ":");
}

function getMinutes(minutes) {
    if (minutes === 0) {

        return "N";
    }
    if (minutes < 10) {

        return getNum(minutes);
    }
    var stringMinutes;
    stringMinutes = getFifty(Math.floor(minutes / 50));
    stringMinutes += getTen(Math.floor(minutes / 10)) + getNum(minutes % 10);

    return stringMinutes;
}
