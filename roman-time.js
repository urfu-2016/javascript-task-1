'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var newMap = {'0': 'N', '1':'I', '5':'V', '10':'X', '50':'L'};

function convertValue(num) {
    if (num in newMap) {
        return newMap[num]}

    var lists = [50, 10, 5, 1];
    var i = 0;
    var outStr = '';
    while(i < lists.length) {
        if (num+1 in newMap) {
            outStr += 'I' + newMap[num + 1];

            return outStr;
        } else if (num+10 in newMap) {
            outStr += 'I' + newMap[num + 10];

            return outStr;
        } else {
            outStr += newMap[lists[i]];
            num -= lists[i];
        }
        if (num < lists[i]) {
            i++; }
    }

    return outStr;
}


function romanTime(time) {
    var splitTime = time.split(':');
    var hour = parseInt(splitTime[0]);
    var minute = parseInt(splitTime[1]);
    if (hour > 23 || minute > 59 || isNaN(hour) || isNaN(minute) ||
    hour < 0 || minute < 0) {
        throw new TypeError('Error'); }

    var newHour = convertValue(hour);
    var newMinute = convertValue(minute);
    // Немного авторского кода и замечательной магии

    return newHour + ':' + newMinute;
}

module.exports = romanTime;
