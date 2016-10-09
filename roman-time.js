'use strict';


function convertNumber(time) {

    var romeTime = ["I", "IV", "V", "IX", "X", "XL", "L"];
    var arabicTime = [1, 4, 5, 9, 10, 40, 50];
    var timeIsInt = parseInt(time, 10);
    var bufferTime = (time > 0) ? "" : "N";

    for (var i = romeTime.length - 1; i >= 0; i--) {
        while (timeIsInt >= arabicTime[i]) {
            bufferTime += romeTime[i];
            timeIsInt -= arabicTime[i];
        }
    }

    return bufferTime;

}

function convertTime(timeArray) {

    for (var key in timeArray) {
        if (timeArray.hasOwnProperty(key)) {
            timeArray[key] = convertNumber(timeArray[key]);
        }
    }

    return timeArray.join(":");

}


/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    var TimePattern = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;

    if (TimePattern.test(time) && time.length === 5) {

        var timeArray = time.split(":");
        time = convertTime(timeArray);

    } else {
        throw new TypeError('Неверное время');
    }

    return time;

}

module.exports = romanTime;
