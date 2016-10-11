'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function toRoman(num) {
    var numArabic = [1,4,5,9,10,40,50];
    var numRoman = ['I','IV','V','IX','X','XL','L'];
    var result = '';
    var n = numArabic.length - 1;
    if (num === 0) {
    	result = 'N'
    }
    while (num > 0) {
        if (num >= numArabic[n]) {
        result += numRoman[n];
        num -= numArabic[n];
        }
    else n--;
    }

return result;
}
function romanTime(time) {
    if (time == null || time == undefined || time.length > 5) {
        throw new TypeError ('Неверное время');
    }         
    var splitTime = time.split(':');
    var hour = parseInt(splitTime[0], 10);
    var minutes = parseInt(splitTime[1], 10);
    if (hour >= 24 || minutes >= 60 || isNaN(hour) || isNaN(minutes)) {
        throw new TypeError ('Неверное время');
    }    

    return toRoman(hour) + ':' + toRoman(minutes);
}

module.exports = romanTime;
