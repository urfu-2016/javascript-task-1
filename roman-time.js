'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
 
function transform(arabicTime) {
    var i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var x = ["", "X", "XX", "XXX", "XL", "L"];
    var romanTime = '';
    var n = Number(arabicTime);
    if ((arabicTime == '0') || (arabicTime == '00')) {
        return 'N';
    }
    romanTime += x[Math.floor(n / 10)];
    n %= 10;
    romanTime += i[n];
    return romanTime;
    
}
function romanTime(time) {
    var timeList = time.split(':');
    var isHours = (timeList[0].length == 2) & (timeList[0] <= 24) & (timeList[0] >= 0);
    var isMinutes = (timeList[1].length == 2) & (timeList[1] <= 60) & (timeList[1] >= 0);
    if  (isHours & isMinutes & isNaN(timeList[2])) {
        return transform(timeList[0]) + ':' + transform(timeList[1])
    }
    return new TypeError();
}
module.exports = romanTime;

