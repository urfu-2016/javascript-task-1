'use strict';

/**
 * @param {String} num– любое положительное число
 * @returns {String} – число num в римском формате
 */
function romanize(num) {
    if (Number(num) === 0) {
        return "N";
    }
    if (!Number(num)) {
        return false;
    }
    var digits = String(num).split("");
    var key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
    ];
    var roman = "";
    var i = 3;
    while (i--) {
        roman = (key[Number(digits.pop()) + (i * 10)] || "") + roman;
    }

    return Array(Number(digits.join("")) + 1).join("M") + roman;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {bool} – true если время в правильном формате, false если нет
 */
function checkTime(time) {
    var splitedTime = time.split(":");
    if (splitedTime.length !== 2 ||
        Number(splitedTime[0]) > 23 ||
        Number(splitedTime[0]) < 0 ||
        Number(splitedTime[1]) > 59 ||
        Number(splitedTime[1]) < 0) {

        return false;
    }

    return true;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var timeError = new TypeError('Неверное время');
    if (!checkTime(time)) {
        throw timeError;
    }
    var splitedTime = time.split(":");
    var romanAray = [];
    for (var i = 0; i < 2; i++) {
        var romanized = romanize(splitedTime[i]);
        if (!romanized) {
            throw timeError;
        }
        romanAray.push(romanized);
    }
    time = romanAray.join(":");

    return time;
}

module.exports = romanTime;
