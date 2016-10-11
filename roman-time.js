'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (time.Length > 5 || time === undefined || time === null) {
        throw new TypeError();
    }
    var parsedTime = time.split(':');
    var hours = parseInt(parsedTime[0], 10);
    var min = parseInt(parsedTime[1], 10);
    if (Number.isNaN(hours) || Number.isNaN(min)) {
        throw new TypeError();
    }
    if ((hours > 23 && hours < 0) || (min > 60 && min <0)) {
        throw new TypeError()
    }
    var rom1 = ["N", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    var rom2 = ["N", "I", "XX", "XXX", "XL", "L", "LX"];
    var romTime;
    if (hours <= 10) {
        romTime = rom1[hours];
    } else {
        romTime = rom2[(hours / 10 | 0)] + rom1[hours % 10];
    }
    romTime += ":";
    if (min <= 10) {
        romTime += rom1[hours];
    } else {
        romTime += rom2[(hours / 10 | 0)] + rom1[hours % 10];

    return romTime;
}

module.exports = romanTime;
