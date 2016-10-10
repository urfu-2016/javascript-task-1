'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var arr = time.split(':'),
        hour = parseInt(arr[0]),
        minutes = parseInt(arr[1]),
        romanNumber = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII',
                       'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'],
        arabicNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60];

    var timeHour;
    if (hour <= 10) {
        timeHour = romanNumber[arabicNumber.indexOf(hour)];
    } else {
        timeHour = romanNumber[arabicNumber.indexOf(parseInt(hour / 10) * 10)] +
        romanNumber[arabicNumber.indexOf(hour % 10)];
    }

    var timeMinutes;
    if (minutes <= 10) {
        timeMinutes = romanNumber[arabicNumber.indexOf(minutes)];
    } else {
        timeMinutes = romanNumber[arabicNumber.indexOf(parseInt(minutes / 10) * 10)] +
        romanNumber[arabicNumber.indexOf(minutes % 10)];
    }

    if (isNaN(hour) || isNaN(minutes) || hour > 23 || minutes >= 60) {
        time = new TypeError('Неверное время');
    } else {
        time = timeHour + ':' + timeMinutes;
    }

    return time;
}

module.exports = romanTime;
