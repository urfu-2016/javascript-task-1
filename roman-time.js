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
    if (NaN != hours) || NaN != min) {
        throw new TypeError();
    }
    var rom = ["N", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
    var romTime = rom[hours % 12] + ":" + rom[min % 12];

    return romTime;
}

module.exports = romanTime;
