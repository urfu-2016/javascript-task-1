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

function romanTime(time) {
    var arr = time.split(':');
    var hour = parseInt(arr[0]);
    var minutes = parseInt(arr[1]);

    if (isNaN(hour) || hour > 23 || isNaN(minutes) || minutes >= 60) {
        time = new TypeError('Неверное время');
    } else {
        time = translate(hour) + ':' + translate(minutes);
    }

    return time;
}

module.exports = romanTime;
