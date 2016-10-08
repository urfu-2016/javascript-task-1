'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

var romanNumbers1 = ['N', 'X', 'XX', 'XXX', 'XL', 'L'];
var romanNumbers2 = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function romanTime(time) {

    if (time === undefined || time === null || isNaN(parseInt(time)) || time.length !== 5) {
        throw new TypeError('Неверный формат даты');
    }

    var curentTime = time.split(':');
    var curentHour = curentTime[0];
    var curentMinute = curentTime[1];

    checkAdditionly(curentHour, curentMinute);

    var romanHour = replaceNumbers(curentHour);
    var romanMinute = replaceNumbers(curentMinute);
    time = romanHour + ':' + romanMinute;

    return time;
}

function checkAdditionly(curentHour, curentMinute) {
    if (parseInt(curentHour) > 23 || curentHour.length !== 2) {
        throw new TypeError('Неверный формат поля "hours"');
    } else if (parseInt(curentMinute) > 59 || curentHour.length !== 2) {
        throw new TypeError('Неверный формат поля "minutes"');
    }

}

function replaceNumbers(number) {
    var newTime = '';

    for (var i = 0; i < number.length; i++) {
        if (number[i] !== '0' && number !== '00' && !isNaN(parseInt(number[i]))) {
            newTime += findDiget(number[i], i);
        } else if (number[i] === '0' && number[i + 1] === '0') {
            newTime += romanNumbers1[i];
        }
    }

    return newTime;
}

function findDiget(diget, position) {
    var intDiget = parseInt(diget);
    var newDiget = '';

    switch (position) {
        case 0:
            newDiget = romanNumbers1[intDiget];
            break;
        case 1:
            newDiget = romanNumbers2[intDiget];
            break;
        default:
            throw new TypeError('Что-то пошло не по плану');
    }

    return newDiget;
}

module.exports = romanTime;
