'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var number = {};
number[0] = '';
number[1] = 'I';
number[2] = 'II';
number[3] = 'III';
number[4] = 'IV';
number[5] = 'V';
number[6] = 'VI';
number[7] = 'VII';
number[8] = 'VIII';
number[9] = 'IX';
number[10] = 'X';
number[20] = 'XX';
number[30] = 'XXX';
number[40] = 'XL';
number[50] = 'L';
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (typeof time === 'undefined' || typeof time === 'object') {
        throw new TypeError();
    }
    var a = '';
    var b = '';
    for (var i = 0; i < time.length; i++) {
        if (time.charAt(i) === ':') {
            a = time.substring(0, i);
            b = time.substring(i + 1, time.length);
            break;
        }
    }
    if (isCorrectTime(a, b)) {
        throw new TypeError();
    }
    a = toRomanNumbers(a);
    b = toRomanNumbers(b);
    time = a + ':' + b;
    
    return time;
}

function isCorrectTime(a, b) {
    if (parseInt(a, 10) !== Number(a)) {
        return true;
    }
    if (parseInt(b, 10) !== Number(b)) {
        return true;
    }
    if (isCorrectNumbers(a, b)) {
        return true;
    }
    return false;
}

function isCorrectNumbers(a, b) {
    if (a < 0 || a > 23 || b < 0 || b > 59) {
        return true;
    }
    return false;
}

function toRomanNumbers(x) {
    var x1 = x % 10;
    if (x1 === 0 && x - x1 === 0) {
        x = 'N';
    } else {
        x = String(number[x - x1] + '' + number[x1]);
    }
    return x;
}

module.exports = romanTime;
