'use strict';

var filterInt = function (value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {

        return Number(value);
    }

    return NaN;
};

function isValidTime2(time) {
    var splitted = time.split(':');
    for (var i = splitted.length - 1; i >= 0; i--) {
        if (filterInt(splitted[i]).isNaN) {

            return false;
        }
    }
    if (parseInt(splitted[0]) > 23) {

        return false;
    }
    if (parseInt(splitted[1]) > 59) {

        return false;
    }

    return true;
}

function isValidTime1(time) {
    if (time === undefined) {

        return false;
    }
    var splitted = time.split(':');
    if (splitted.length !== 2) {

        return false;
    }

    return true;
}

function castToRoman(twoDigits) {
    var answer = "";
    var digitsCast = { 0: "", 1: "I", 2: "II", 3: "III", 4: "IV",
               5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX" };
    if (twoDigits === "00") {

        return "N";
    }
    for (var i = 0; i < parseInt(twoDigits.charAt(0)); i++) {
        answer += "X";
    }
    answer += digitsCast[parseInt(twoDigits.charAt(1))];

    return answer;
}

function castHours(hours) {
    var answer = castToRoman(hours);

    return answer;
}

function castMinutes(minutes) {
    var answer = castToRoman(minutes);
    answer = answer.replace("XXXXX", "L");
    answer = answer.replace("XXXX", "XL");

    return answer;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    if (isValidTime1(time)) {
        if (isValidTime2(time)) {
            return castHours(time.split(':')[0]) + ":" + castMinutes(time.split(':')[1]);
        }
    }
    throw new TypeError("Неверное время");
}


module.exports = romanTime;
