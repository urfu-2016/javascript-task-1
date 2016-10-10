'use strict';

/*
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function toRoman(x) {
    //var arab = [0,1,4,5,9,10,40,50];
    //var roman = ["N","I","IV","V","IX","X","XL","L"];
    if (x === 0) {
        return "N";
    }
    var Res = '';
    var a = x % 10;
    var b = x - a;
    while (a > 0) {
        if (a == 9) {
            Res = "IX";
            a = 0;
        }
        if (a >= 5) {
            Res = Res + "V";
            a = a - 5;
        }
        if (a >= 4) {
            Res = Res + "IV";
            a = a - 4;
        }
        if (a >= 1) {
            Res = Res + "I";
            a = a - 1;
        }
    }
    if (b == 50) {
        return "L" + Res;
    }
    if (b == 40) {
        return "XL" + Res;
    }
    while (b > 0) {
        if (b >= 10) {
            Res = "I" + Res;
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
