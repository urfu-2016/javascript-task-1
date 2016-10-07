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
 * @param {Number} num - число в арабской натации
 * @returns {String} - римский эквивалент
 */
function arabianToRoman(num) {
    return num === 0 ? 'N' : ROMAN_NUMBERS[num - num % 10] + ROMAN_NUMBERS[num % 10];
}

/**
 * @param {String} time - потенциальная строка времени
 * @returns {boolean} - да/нет
 */
function isTime(time) {
    return /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/.test(time);
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (!isTime(time)) {
        throw new TypeError('Неверное время');
    }
    time = time.split(':');
    var hours = parseInt(time[0]);
    var minutes = parseInt(time[1]);

    return arabianToRoman(hours) + ':' + arabianToRoman(minutes);
}

module.exports = romanTime;
