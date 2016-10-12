'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if ((isNaN(parseInt(time[0], 10)) === true) || (isNaN(parseInt(time[1], 10)) === true) ||
        (isNaN(parseInt(time[3], 10)) === true) || (isNaN(parseInt(time[4], 10)) === true)) {
        console.info(parseInt(time.slice(3, 5)));
        throw new TypeError();
    } else {
        var pattern = '';
        if ((time.length === 5) && (parseInt(time.slice(0, 2)) < 24) &&
            (parseInt(time.slice(3, 5)) < 60)) {
            pattern = patternOwn(pattern, time, 0);

            pattern += ':';
            pattern += patternOwn(pattern, time, 3);

            time = pattern;
        } else {
            throw new TypeError();
        }
    }

    return time;
}

module.exports = romanTime;

function patternOwn(pattern, time, n) {
    var hour = ['X', 'XX', 'XXX', 'XL', 'L'];
    var minute = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    var firstHour = parseInt(time[n], 10);
    if (firstHour === 0) {

        pattern = 'N';

        var secondHour = parseInt(time[n + 1], 10);
        if (secondHour !== 0) {
            pattern = minute[secondHour - 1];
        }
    } else {

        pattern = hour[firstHour - 1];
        var secondHour2 = parseInt(time[n + 1], 10);
        if (secondHour2 !== 0) {
            pattern += minute[secondHour2 - 1];
        }

    }

    return pattern;
}
