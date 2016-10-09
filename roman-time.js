'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    var hour = null;
    var minute = null;
    var arrayOfTime = time.split(':');
    if (parseInt(arrayOfTime[0], 10) === 0) {
        hour = 'N';
    } else if (isNaN(parseInt(arrayOfTime[0], 10)) || parseInt(arrayOfTime[0]) > 23 || parseInt(arrayOfTime[0]) < 0) {
        throw new TypeError('Неверное время');
    } else if (!isNaN(parseInt(arrayOfTime[0], 10))) {
        hour = parseNumber(parseInt(arrayOfTime[0], 10));
    }
    if (parseInt(arrayOfTime[1],10) === 0) {
        minute = 'N';
    } else if (isNaN(parseInt(arrayOfTime[1], 10)) || parseInt(arrayOfTime[1]) > 59 || parseInt(arrayOfTime[1]) < 0) {
        throw new TypeError('Неверное время');
    } else {
        minute = parseNumber(parseInt(arrayOfTime[1], 10));
    }
    time = hour + ':' + minute;

    return time;
}

function parseNumber(num) {
    var roman = '';
    var arrayOfSymbol = [];
    arrayOfSymbol[0] = (num - num % 50) / 50;
    num %= 50;
    arrayOfSymbol[1] = (num - num % 10) / 10;
    num %= 10;
    arrayOfSymbol[2] = (num - num % 5) / 5;
    arrayOfSymbol[3] = num % 5;
    if (arrayOfSymbol[0] === 1) {
        roman += 'L';
    }
    var i = null;
    if (arrayOfSymbol[1] !== 0 && arrayOfSymbol[1] !== 4) {
        for (i = arrayOfSymbol[1]; i !== 0; i--) {
            roman += 'X';
        }
    }
    if (arrayOfSymbol[1] === 4) {
        roman = roman.substring(0, roman.length - 1);
        roman += 'XL';
    }
    if (arrayOfSymbol[2] !== 0) {
        for (i = arrayOfSymbol[2]; i !== 0; i--) {
            roman += 'V';
        }
    }
    if (arrayOfSymbol[3] !== 0 &&  arrayOfSymbol[3] !== 4) {
        for (i = arrayOfSymbol[3]; i !== 0; i--) {
            roman += 'I';
        }
    }
    if (arrayOfSymbol[3] === 4) {
        if (roman[roman.length - 1] === 'V') {
            roman = roman.substring(0, roman.length - 1);
            roman += 'IX';
        } else {
            roman += 'IV';
        }
    }

    return roman;
}

module.exports = romanTime;
