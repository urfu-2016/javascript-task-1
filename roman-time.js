"use strict";

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    function deleteZeroesFromRomanTime(romanTimeString) {
        romanTimeString = romanTimeString.replace(/oo/g, "N");
        romanTimeString = romanTimeString.replace(/o/g, "");

        return romanTimeString;
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

    var arrayOfDateDatas = time.split(":");
    if (arrayOfDateDatas[0] === "" || arrayOfDateDatas[1] === "") {
        throw new TypeError();
    }
    var hours = Number(arrayOfDateDatas[0]);
    var minutes = Number(arrayOfDateDatas[1]);

    var romanTimeString;

    if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 &&
            hours % 1 === 0 && minutes % 1 === 0) {

        romanTimeString = createRomanTimeString(hours, minutes);
        romanTimeString = deleteZeroesFromRomanTime(romanTimeString);

    } else {
        throw new TypeError();
    }

    return romanTimeString;
}

module.exports = romanTime;
