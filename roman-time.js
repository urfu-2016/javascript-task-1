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
    switch (switchTime[1]) {
        case '0' :
            break;
        case '1' :
            switchTime[1] = 'I';
            break;
        case '2' :
            switchTime[1] = 'II';
            break;
        case '3' :
            switchTime[1] = 'III';
            break;
        case '4' :
            switchTime[1] = 'IV';
            break;
        case '5' :
            switchTime[1] = 'V';
            break;
        case '6' :
            switchTime[1] = 'VI';
            break;
        case '7' :
            switchTime[1] = 'VII';
            break;
        case '8' :
            switchTime[1] = 'VIII';
            break;
        case '9' :
            switchTime[1] = 'IX';
            break;
        default: TypeError();
    }

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
        Console.log(e instanceof TypeError);
        Console.log(e.message);
    }
    switch (hours[0]) {
        case '1' :
            hours[0] = 'X';
            romanTens(hours);
            break;
        case '2' :
            hours[0] = 'XX';
            romanTens(hours);
            break;
        case '0' :
            romanTens(hours);
            break;
        default: TypeError();
    }
    switch (minutes[0]) {
        case '1' :
            minutes[0] = 'X';
            romanTens(minutes);
            break;
        case '2' :
            minutes[0] = 'XX';
            romanTens(minutes);
            break;
        case '3' :
            minutes[0] = 'XXX';
            romanTens(minutes);
            break;
        case '4' :
            minutes[0] = 'XL';
            romanTens(minutes);
            break;
        case '5' :
            minutes[0] = 'L';
            romanTens(minutes);
            break;
        case '0' :
            romanTens(minutes);
            break;
        default: TypeError();
    }
    time = hours + ':' + minutes;

    return time;
}

module.exports = romanTime;


