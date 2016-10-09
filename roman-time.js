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
    var parseTime = getParsedTime(time);
    var minutes = parseTime[1];
    var hours = parseTime[0];
    var romanTimeFormat = getRomanNum(hours) + ':' + getRomanNum(minutes);

    return romanTimeFormat;
}

function getRomanNum(num) {
    var firstNum = Math.floor(num / 10) * 10;
    var secondNum = Math.floor(num % 10);
    var romanNum = __ROMAN_TIME[firstNum] + __ROMAN_TIME[secondNum];

    return num === 0 ? 'N' : romanNum;
}

function getParsedTime(time) {
    var hours = time.split(':')[0];
    var minutes = time.split(':')[1];
    hours = hours.length < 3 ? Number(hours) : 24;
    minutes = minutes.length < 3 ? Number(minutes) : 60;
    if (checkValidTime(hours, minutes) && time.split(':').length < 3) {

        return [hours, minutes];
    }
    throw new TypeError('Неверное время');
}

function checkValidTime(hh, mm) {
    var timeNaN = isNaN(hh) || isNaN(mm);
    var dataNotTime = hh < 0 || hh > 23 || mm < 0 || mm > 59;

    return !timeNaN && !dataNotTime;
}

module.exports = romanTime;
