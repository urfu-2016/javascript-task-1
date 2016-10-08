'use strict';

/**
 * @param {String} arabicTime – арабское число, меньшее 60
 * @returns {String} – римский аналог
 */
function transform(arabicTime) {
    var i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var x = ["", "X", "XX", "XXX", "XL", "L"];
    var romTime = '';
    var n = Number(arabicTime);
    if ((arabicTime === '0') || (arabicTime === '00')) {
        return 'N';
    }
    romTime += x[Math.floor(n / 10)];
    n %= 10;
    romTime += i[n];

    return romTime;

}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var timeList = time.split(':');
    var isHours = (timeList[0].length === 2) && (timeList[0] <= 23) && (timeList[0] >= 0);
    var isMinutes = (timeList[1].length === 2) && (timeList[1] <= 59) && (timeList[1] >= 0);
    if (isHours && isMinutes && timeList.length === 2) {
        return transform(timeList[0]) + ':' + transform(timeList[1]);
    }

    throw new TypeError('TypeError');

}
module.exports = romanTime;

