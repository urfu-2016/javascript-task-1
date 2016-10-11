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
    if (isNaN(arr[0]) || isNaN(arr[1]) || arr[0].indexOf('.') !== -1 ||
        arr[1].indexOf('.') !== -1) {
        return true;
    }

    return false;
}

function notNull(time) {
    if (time === '' || time === ':' || typeof time !== 'string') {
        return true;
    }

    return false;
}

function notNan(arr) {
    if (arr[0] === ' ' || arr[1] === ' ' || arr[2] !== undefined) {
        return true;
    }

    return false;
}

function leng(arr) {
    if (arr[0].length == 1 || arr[1].length == 1) {
        throw new TypeError('Неверное время', 'roman-time.js');
    }
}

function romanTime(time) {
    var arr = time.split(':');
    var hour = parseInt(arr[0]);
    var minutes = parseInt(arr[1]);
    leng(arr);

    if (range(hour, minutes, arr) || whole(arr) || notNull(time) || notNan(arr)) {
        throw new TypeError('Неверное время', 'roman-time.js');
    } else {
        time = translate(hour) + ':' + translate(minutes);
    }

    return time;
}

module.exports = romanTime;
