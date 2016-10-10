'use strict';

/*
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function toRoman(x) {
    var arab = [0, 1, 4, 5, 9, 10, 40, 50];
    var roman = ["N", "I", "IV", "V", "IX", "X", "XL", "L"];
    var n = arab.length - 1;
    var Res = '';
    if (x === 0) {
        return "N";
    }
    while (x > 0) {
        if (x >= arab[n]) {
            Res = Res + roman[n];
            x = x - arab[n];
        }
        else
        {
            n = n - 1;
        }
    }

    return Res;
}

function correctTime(hours, minutes) {
    return (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59);
}

function romanTime(time) {
    var partTime = time.split (':');
    if (partTime.length === 2) {
        var hours = parseInt (partTime[0], 10);
        var minutes = parseInt (partTime[1], 10);
        if (correctTime (hours, minutes)) {
            return toRoman (hours) + ':' + toRoman (minutes);
        }
    }

    return new TypeError ("Неверное время");
}

module.exports = romanTime;
