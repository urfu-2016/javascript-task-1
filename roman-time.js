'use strict';

var tensTable = [];
tensTable['0'] = '';
tensTable['1'] = 'X';
tensTable['3'] = 'XXX';
tensTable['4'] = 'XL';
tensTable['5'] = 'L';
tensTable['2'] = 'XX';
var unitsTable = [];
unitsTable['0'] = '';
unitsTable['1'] = 'I';
unitsTable['2'] = 'II';
unitsTable['3'] = 'III';
unitsTable['4'] = 'IV';
unitsTable['5'] = 'V';
unitsTable['6'] = 'VI';
unitsTable['7'] = 'VII';
unitsTable['8'] = 'VIII';
unitsTable['9'] = 'IX';
/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var hours, minutes;
    var arrayOfTime = (time += '').split(':');
    if (isTimeCorrect(time) === true) {
        hours = convertTime(arrayOfTime[0]);
        minutes = convertTime(arrayOfTime[1]);
    }
    else {
        throw new TypeError ();
    }

    return hours + ':' + minutes;
}

function isTimeCorrect(time) {

    return (/[0-1][0-9]:[0-5][0-9]/.test(time) || /[2][0-3]:[0-5][0-9]/.test(time));
}

function convertTime(time) {
    var tens, units;
    tens = getTens(time);
    units = getUnits(time);
    if (tens == 0 && units == 0) {

        return 'N';
    }
    else {

        return tensTable[tens] + unitsTable[units] + '';
    }
}

function getTens(time) {

    return Math.floor(time / 10);
}

function getUnits(time) {

    return time % 10;
}

module.exports = romanTime;
