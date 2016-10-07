'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var ROMAN_NUMBER = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
var ARAB_NUMBER = [50, 40, 10, 9, 5, 4, 1];

function isTime(str) {
    var hours;
    var minutes;
    try {
        hours = str.split(':')[0];
        minutes = str.split(':')[1];
        hours = parseInt(hours);
        minutes = parseInt(minutes);
        if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
            throw new TypeError('Неверное время');
        }
    } catch (e) {
        return false;
    }

    return true;
}

function getRomanNumber(number) {
    if (number === 0) {
        return 'N';
    }
    var position = 0;
    var result = '';
    while (position !== ARAB_NUMBER.length) {
        if (number >= ARAB_NUMBER[position]) {
            result += ROMAN_NUMBER[position];
            number -= ARAB_NUMBER[position];
        } else {
            position++;
        }
    }

    return result;
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (!isTime(time) || time.length !== 5) {
        throw new TypeError('Неверное время');
    }

    var hours = time.split(':')[0];
    var minutes = time.split(':')[1];

    hours = getRomanNumber(parseInt(hours));
    minutes = getRomanNumber(parseInt(minutes));

    time = hours + ':' + minutes;

    return time;
}

module.exports = romanTime;
