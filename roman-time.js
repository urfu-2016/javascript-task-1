'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var newMap = { '0': 'N', '1': 'I', '5': 'V', '10': 'X', '50': 'L' };


function checkSpecialState(num) {
    if (num + 1 in newMap) {
        return 'I' + newMap[num + 1];
    } else if (num + 10 in newMap) {
        return 'I' + newMap[num + 10];
    }

    return null;
}

function convertValue(num) {
    if (num in newMap) {
        return newMap[num];
    }

    var lists = [50, 10, 5, 1];
    var i = 0;
    var outStr = '';
    while (i < lists.length) {
        var special = checkSpecialState(num);
        if (special !== null) {
            return outStr + special;
        }

        outStr += newMap[lists[i]];
        num -= lists[i];

        if (num < lists[i]) {
            i++;
        }
    }

    return outStr;
}

function checkValid(time) {
    var splitTime = time.split(':');
    var hour = parseInt(splitTime[0]);
    var minute = parseInt(splitTime[1]);
    var hourCheck = isNaN(hour) || hour > 23;
    var minuteCheck = isNaN(minute) || minute > 59;
    if (hourCheck || minuteCheck) {
        throw new TypeError('Error');
    }

    return [hour, minute];
}

function romanTime(time) {
    var parsed = checkValid(time);
    var newHour = convertValue(parsed[0]);
    var newMinute = convertValue(parsed[1]);

    return newHour + ':' + newMinute;
}

module.exports = romanTime;
