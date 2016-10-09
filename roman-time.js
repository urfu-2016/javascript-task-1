'use strict';

/**
 * @param {String} arabTime – арабское число
 * @returns {String} – число римскими цифрами
 */
function arabToRoman(arabTime) {
    var tenDigits = ["", "X", "XX", "XXX", "XL", "L"];
    var oneDigits = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    if (parseInt(arabTime, 10) === 0) {
        return 'N';
    }
    var res = tenDigits[Math.floor(arabTime / 10)];
    res = res + oneDigits[arabTime % 10];

    return res;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var tArr = time.split(':');
    if (tArr.length <= 2 && time.length <= 5) {
        if (tArr[0] < 24 && tArr[1] < 60 && tArr[0] >= 0 && tArr[1] >= 0) {
            return arabToRoman(tArr[0]) + ':' + arabToRoman(tArr[1]);
        }
    }
    throw new TypeError('TypeError');
}
module.exports = romanTime;
