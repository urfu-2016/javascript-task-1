'use strict';

var ROMAN_NUMBERS = {
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

/**
 * @param {integer} num - число в арабской натации
 * @returns {string} - римский эквивалент
 */
function arabianToRoman(num) {
    return num === 0 ? 'N' : ROMAN_NUMBERS[num - num % 10] + ROMAN_NUMBERS[num % 10];
}

/**
 * Проверка на валидность времени
 * @param {integer} hours - часы
 * @param {integer} minutes - минуты
 */
function isTime(hours, minutes) {
    if (hours > 23 || hours < 0 ||
        minutes > 59 || minutes < 0) {
        throw new TypeError('Неверное время');
    }
}

/**
 * Разбор строки времени на токены - часы, минты
 * @param {string} time - строка времени
 * @returns {{hours: Number, minutes: Number}} - объект время
 */
function timeParse(time) {
    if (time.indexOf(':') === -1 ||
        time.indexOf('.') !== -1 ||
        time.indexOf(',') !== -1) {
        throw new TypeError('Неверное время');
    }

    time = time.split(':');
    var hours = parseInt(time[0]);
    var minutes = parseInt(time[1]);
    if (isNaN(hours) || isNaN(minutes)) {
        throw new TypeError('Неверное время');
    }

    isTime(hours, minutes);

    return {
        hours: hours,
        minutes: minutes
    };
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии

    time = timeParse(time);

    return arabianToRoman(time.hours) + ':' + arabianToRoman(time.minutes);
}

module.exports = romanTime;
