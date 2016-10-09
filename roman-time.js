'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
  */
function romanTime(time) {
    var timeParse = tryParse(time);
    if (!timeParse || !checkHours(timeParse[0]) || !checkMinutes(timeParse[1])) {
        throw new TypeError("Неверное время");
    }

    return toRoman(timeParse[0]) + ":" + toRoman(timeParse[1]);
}

function tryParse(time) {
    try {
        var listTime = time.split(":");
        if (listTime.length !== 2) {
            return null;
        }

        return listTime.map(
            function (num) {
                return parseInt(num);
            });
    } catch (e) {
        return null;
    }
}

var conformity = {
    1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",
    6: "VI", 7: "VII", 8: "VIII", 9: "IX" };

function toRoman(number) {
    if (number === 0) {
        return "N";
    }

    var result = "";

    var countL = Math.floor(number / 50);
    result += "L".repeat(countL);

    var countX = Math.floor((number % 50) / 10);
    if (countX === 4) {
        result += "XL";
    } else {
        result += "X".repeat(countX);
    }

    var last = ((number % 50) % 10);
    if (last !== 0) {
        result += conformity[last];
    }

    return result;
}

function checkHours(hours) {
    return hours >= 0 && hours < 24;
}

function checkMinutes(minutes) {
    return minutes >= 0 && minutes < 60;
}

module.exports = romanTime;
