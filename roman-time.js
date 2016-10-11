'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
new TypeError(["TypeError: Неверное время"]);

function romanTens(switchTime) {
    if (switchTime[0] === '0') {
        switchTime[1] = 'N';
    }
    /*if (switchTime[1] === '0') {
    }*/
    if (switchTime[1] === '1') {
        switchTime[1] = 'I';
    }
    if (switchTime[1] === '2') {
        switchTime[1] = 'II';
    }
    if (switchTime[1] === '3') {
        switchTime[1] = 'III';
    }
    if (switchTime[1] === '4') {
        switchTime[1] = 'IV';
    }
    if (switchTime[1] === '5') {
        switchTime[1] = 'V';
    }
    if (switchTime[1] === '6') {
        switchTime[1] = 'VI';
    }
    if (switchTime[1] === '7') {
        switchTime[1] = 'VII';
    }
    if (switchTime[1] === '8') {
        switchTime[1] = 'VIII';
    }
    if (switchTime[1] === '9') {
        switchTime[1] = 'IX';
    } /*else {
        TypeError();
    }*/

    return switchTime;
}
var hours;
var minutes;
var separator = ':';
var i = 0;
function romanTime(time) {
    try {
        while (time[i] !== separator) {
            hours[i] = time[i];
            i++;
        }
        i++;
        while (i < time.length) {
            minutes[i] = time[i];
            i++;
        }
    } catch (e) {
        console.log(e.message);
    }
    if (hours[0] === '1') {
        hours[0] = 'X';
        romanTens(hours);
    }
    if (hours[0] === '2') {
        hours[0] = 'XX';
        romanTens(hours);
    }
    if (hours[0] === '0') {
        romanTens(hours);
    } /*else {
        TypeError();
    }*/
    if (minutes[0] === '1') {
        minutes[0] = 'X';
        romanTens(minutes);
    }
    if (minutes[0] === '2') {
        minutes[0] = 'XX';
        romanTens(minutes);
    }
    if (minutes[0] === '3') {
        minutes[0] = 'XXX';
        romanTens(minutes);
    }
    if (minutes[0] === '4') {
        minutes[0] = 'XL';
        romanTens(minutes);
    }
    if (minutes[0] === '5') {
        minutes[0] = 'L';
        romanTens(minutes);
    }
    if (minutes[0] === '0') {
        romanTens(minutes);
    } /*else {
        TypeError();
    }*/
    time = hours + ':' + minutes;

    return time;
}

module.exports = romanTime;


