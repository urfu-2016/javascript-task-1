'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function translate(timeRoman) {
    var romanNumber = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII',
                       'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];
    var arabicNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60];

    var timeTranslate;
    if (timeRoman <= 10) {
        timeTranslate = romanNumber[arabicNumber.indexOf(timeRoman)];
    } else {
        timeTranslate = romanNumber[arabicNumber.indexOf(parseInt(timeRoman / 10) * 10)] +
        romanNumber[arabicNumber.indexOf(timeRoman % 10)];
    }

    return timeTranslate;
}

function range(hour, minutes) {
    if (hour > 23 || minutes >= 60 || hour < 0 || minutes < 0) {
        return true;
    }

    return false;
}

function whole(arr) {
    if (arr[0].indexOf('.') !== -1 || arr[1].indexOf('.') !== -1 ||
        isNaN(arr[0]) || isNaN(arr[1])) {
        return true;
    }

    return false;
}

function romanTime(time) {
    var arr = time.split(':');
    var hour = parseInt(arr[0]);
    var minutes = parseInt(arr[1]);

    if (range(hour, minutes, arr) || time === '' || whole(arr)) {
        time = new TypeError('Неверное время');
    } else {
        time = translate(hour) + ':' + translate(minutes);
    }

    return time;
}

module.exports = romanTime;
