'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var ROMAN_NUMBER_1 = ['N', 'X', 'XX', 'XXX', 'XL', 'L'];
var ROMAN_NUMBER_2 = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function romanTime(time) {

    if (time === undefined || time === null || isNaN(parseInt(time)) || time.length !== 5) {
        throw new TypeError('Неверный формат даты');
    }

    var curentTime = time.split(':');
    var hour = curentTime[0];
    var minute = curentTime[1];

    validateTime(hour, minute);

    var romanHour = replaceNumbers(hour);
    var romanMinute = replaceNumbers(minute);
    time = romanHour + ':' + romanMinute;

    return time;
}

// Функция validateTime(h, m) делает дополнительные проверки формата полей часы/минуты
function validateTime(h, m) {
    if (parseInt(h) > 23 || h.length !== 2) {
        throw new TypeError('Неверный формат поля "hours"');
    } else if (parseInt(m) > 59 || m.length !== 2) {
        throw new TypeError('Неверный формат поля "minutes"');
    }

}

// функция replaceNumbers(number) перебирает, проверяет и заменяет каждое числло
function replaceNumbers(number) {
    var newTime = '';

    for (var i = 0; i < number.length; i++) {
        if (number[i] !== '0' && number !== '00' && !isNaN(parseInt(number[i]))) {
            newTime += findDiget(number[i], i);
        } else if (number[i] === '0' && number[i + 1] === '0') {
            newTime += ROMAN_NUMBER_1[i];
        } else if (isNaN(parseInt(number[i]))) {
            throw new TypeError('Что-то пошло не по плану');
        }
    }

    return newTime;
}

// Функция findDiget(diget, position) подбирает соответствующую цифру римского формата
function findDiget(diget, position) {
    var intDiget = parseInt(diget);
    var newDiget = '';

    switch (position) {
        case 0:
            newDiget = ROMAN_NUMBER_1[intDiget];
            break;
        case 1:
            newDiget = ROMAN_NUMBER_2[intDiget];
            break;
        default:
            throw new TypeError('Что-то пошло не по плану');
    }

    return newDiget;
}

module.exports = romanTime;
