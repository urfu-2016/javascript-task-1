"use strict";

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    function deleteZeroesFromRomanTime(romanTimeString) {
        var romanTimeStringWithoutZeroes = romanTimeString.replace(/oo/g, "N");
        romanTimeStringWithoutZeroes = romanTimeStringWithoutZeroes.replace(/o/g, "");

        return romanTimeStringWithoutZeroes;
    }

    function createRomanTimeString(hours, minutes) {
        var romanOnes = ["o", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        var romanTens = ["o", "X", "XX", "XXX", "XL", "L"];
        var hoursOnes = hours % 10;
        var minutesOnes = minutes % 10;
        var romanTimeString = romanTens[(hours - hoursOnes) / 10] + romanOnes[hoursOnes] +
                ":" + romanTens[(minutes - minutesOnes) / 10] + romanOnes[minutesOnes];

        return romanTimeString;
    }

    function getRomanTimeString(hours, minutes) {
        var romanTimeString;
        if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {

            romanTimeString = deleteZeroesFromRomanTime(createRomanTimeString(hours, minutes));

        } else {
            throw new TypeError();
        }

        return romanTimeString;
    }

    function isValid(timeString) {
        if (typeof timeString === "string" && timeString.match(/^\d{1,2}:\d{1,2}$/gi) !== null) {

            return true;
        }

        return false;
    }


    if (!isValid(time)) {
        throw new TypeError();
    }

    var arrayOfDateDatas = time.split(":");

    var hours = Number(arrayOfDateDatas[0]);
    var minutes = Number(arrayOfDateDatas[1]);

    var romanTimeString = getRomanTimeString(hours, minutes);

    return romanTimeString;
}

module.exports = romanTime;
