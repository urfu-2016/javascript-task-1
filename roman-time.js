'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var __ROMAN_TIME = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L'
};

function romanTime(time) {
    var parseTime = getParsedTime(time) || 'notTime';

    if (parseTime !== 'notTime') {
        var minutes = parseTime[0];
        var hours = parseTime[1];
        var romanTimeFormat = getRomanHours(minutes) + ':' + getRomanMinutes(hours);

        return romanTimeFormat;
    }
    throw new TypeError('Неверное время');
}

function getRomanHours(hh) {
    var firstNum = Math.floor(hh / 10) * 10;
    var secondNum = Math.floor(hh % 10);
    var hours = __ROMAN_TIME[firstNum] + __ROMAN_TIME[secondNum];

    return hh === 0 ? 'N' : hours;
}

function getRomanMinutes(mm) {
    var firstNum = Math.floor(mm / 10) * 10;
    var secondNum = Math.floor(mm % 10);
    var minutes = __ROMAN_TIME[firstNum] + __ROMAN_TIME[secondNum];

    return mm === 0 ? 'N' : minutes;
}

function getParsedTime(time) {
    var hours = parseInt(time.split(':')[0]);
    var minutes = parseInt(time.split(':')[1]);

    return checkValidTime(hours, minutes) ? [hours, minutes] : false;
}

function checkValidTime(hh, mm) {
    var timeNaN = isNaN(hh) || isNaN(mm);
    var dataNotTime = hh < 0 || hh > 23 || mm < 0 || mm > 59;

    return !timeNaN && !dataNotTime;
}

module.exports = romanTime;
