'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    var romanOnes = ["L", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    var romanTens = ["L", "X", "XX", "XXX", "XL", "L"];

    var arrayOfDateDatas = time.split(":");
    var hours = Number(arrayOfDateDatas[0]);
    var minutes = Number(arrayOfDateDatas[1]);

    var romanTimeString;

    if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 &&
            hours % 1 === 0 && minutes % 1 === 0) {

        var hoursOnes = hours % 10;
        var minutesOnes = minutes % 10;

        romanTimeString = romanTens[(hours - hoursOnes) / 10] + romanOnes[hoursOnes] +
                ":" + romanTens[(minutes - minutesOnes) / 10] + romanOnes[minutesOnes];
        romanTimeString = romanTimeString.replace(/LL/g, "N");
        romanTimeString = romanTimeString.replace(/L/g, "");

    } else {
        throw new TypeError();
    }

    return romanTimeString;
}

module.exports = romanTime;
