'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var ROMAN = ['I', 'IV', 'V', 'IX', 'X', 'L'];
function getRoman(n, time) {
    var result = '';
    for (var i = 0; i < n; i++) {
        result += ROMAN[time];
    }

    return result;
}
function fourOrNine(list, i) {
    var time = '';
    if ((list[1 + i] === 1) && (list[2 + i] === 4)) {
        time = ROMAN[3];
    }
    if ((list[1 + i] === 0) && (list[2 + i] === 4)) {
        time = ROMAN[1];
    }

    return time;
}
function getTime(listH, listM) {
    var hours = getRoman(listH[0], 4);
    var minutes = getRoman(listM[0], 5) + getRoman(listM[1], 4);
    var time = fourOrNine(listH, 0);
    if (time === '') {
        hours += getRoman(listH[1], 2) + getRoman(listH[2], 0);
    } else {
        hours += time;
    }
    time = fourOrNine(listM, 1);
    if (time === '') {
        minutes += getRoman(listM[2], 2) + getRoman(listM[3], 0);
    } else {
        minutes += time;
    }

    return [hours, minutes];
}
function Error(time) {
    if (isNaN(parseInt(time[0], 10)) || (parseInt(time[0], 10) > 23) ||
        (parseInt(time[0], 10) < 0) || (parseInt(time[1], 10) > 59) ||
        (parseInt(time[1], 10) < 0)) {
        throw new TypeError('Неверное время');
    }
}
function romanTime(time) {
    try {
        time = time.split(':');
        Error(time);
    } catch (e) {

        return e;
    }
    var hours = parseInt(time[0], 10);
    var minutes = parseInt(time[1], 10);
    var listH = [parseInt(hours / 10, 10), parseInt(hours % 10 / 5, 10),
    parseInt(hours % 10 % 5, 10)];
    var listM = [parseInt(minutes / 50, 10), parseInt(minutes % 50 / 10, 10),
    parseInt(minutes % 10 / 5, 10), parseInt(minutes % 10 % 5, 10)];
    time = getTime(listH, listM);
    if (time[0] === '') {
        time[0] = 'N';
    }
    if (time[1] === '') {
        time[1] = 'N';
    }

    return time[0] + ':' + time[1];
}

module.exports = romanTime;
