'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    checkIsTime(time);
    var arraySplitTime = time.split(':');
    if (arraySplitTime.length !== 2) {
        exept(time);
    }
    if (checkInt(arraySplitTime[0]) || checkInt(arraySplitTime[1])) {
        exept(time);
    }
    time = parseTime(arraySplitTime, time);

    return time;
}

function parseTime(arraySplitTime, time) {
    var hour = Number(arraySplitTime[0]);
    var minute = Number(arraySplitTime[1]);
    if (hour > 23) {
        exept(time);
    }
    if (minute > 59) {
        exept(time);
    }
    hour = convertTime(hour);
    minute = convertTime(minute);
    var newTime = hour + ':' + minute;

    return newTime;
}

function convertTime(partTime) {
    var arab = [1, 4, 5, 9, 10, 40, 50];
    var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    if (partTime === 0) {

        return 'N';
    }
    var elementRom = '';
    var index = arab.length - 1;
    while (partTime > 0) {
        if (partTime >= arab[index]) {
            elementRom += roman[index];
            partTime -= arab[index];
        } else {
            index--;
        }
    }

    return elementRom;
}

function checkInt(strElem) {
    for (var i = 0; i < strElem.length; i++) {
        var checkI = strElem.charAt(i);
        if (isNaN(parseInt(checkI, 10))) {

            return true;
        }
    }

    return false;
}

function checkIsTime(time) {
    if (time === null || time === undefined || typeof time !== 'string') {
        exept(time);
    }
    if (time.indexOf(':') === (-1)) {
        exept(time);
    }
    if (time.length !== 5) {
        exept(time);
    }
}

function exept(time) {
    throw new TypeError(time + ': Неверное время');
}

module.exports = romanTime;
