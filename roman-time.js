﻿'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    var romanOnes = ["N", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    var romanTens = ["", "X", "XX", "XXX", "XL", "L"];

    var arrayOfDateDatas = time.split(":");
    var hours = Number(arrayOfDateDatas[0]);
    var minutes = Number(arrayOfDateDatas[1]);

    if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && hours % 1 === 0 && minutes % 1 === 0) {
        var hoursOnes = hours % 10;
        var hoursTens = (hours - hoursOnes) / 10;

        var minutesOnes = minutes % 10;
        var minutesTens = (minutes - minutesOnes) / 10;

        var romanTimeString = romanTens[hoursTens] + romanOnes[hoursOnes] + ":" + romanTens[minutesTens] + romanOnes[minutesOnes];
        return romanTimeString;
    } else {
        throw new TypeError();
    }
}

module.exports = romanTime;
