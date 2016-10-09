'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var romanMap = new Map();
romanMap.set(0, 'N');
romanMap.set(1, 'I');
romanMap.set(5, 'V');
romanMap.set(10, 'X');
romanMap.set(50, 'L');

function convertValue(num) {
    var lists = [50, 10, 5, 1];
    var i = 0;
    var outStr = '';
    while(i < lists.length) {
        while (num >= lists[i]) {
            if (romanMap.has(num + 1)) {
                outStr += 'I' + romanMap.get(num + 1);
                return outStr;
            } else if (romanMap.has(num + 10)) {
                outStr += 'I' + romanMap.get(num + 10);
                return outStr;
            } else {
                outStr += romanMap.get(lists[i]);
                num -= lists[i];
            }
        }
        i++;
    }

    return outStr;
}

function romanTime(time) {
    var splitTime = time.split(':');
    var hour = parseInt(splitTime[0]);
    var minute = parseInt(splitTime[1]);
    if (hour > 23 || minute > 59 || isNaN(hour) || isNaN(minute) ||
    hour < 0 || minute < 0) {
        throw new TypeError('Error');
    }
    var newHour;
    if (romanMap.has(hour)) {
        newHour = romanMap.get(hour);
    } else {
        newHour = convertValue(hour)
    }
    var newMinute;
    if (romanMap.has(minute)) {
        newMinute = romanMap.get(minute);
    } else {
        newMinute = convertValue(minute)
    }
    // Немного авторского кода и замечательной магии
    return newHour + ':' + newMinute;
}

module.exports = romanTime;
