'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
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
    if (boool(a, b)) {
        throw new TypeError();
    }
    var a1 = a % 10;
    if (a1 === 0 && a - a1 === 0) {
        a = 'N';
    }
    else {
        a = String(number[a - a1] + '' + number[a1]);
    }
    var b1 = b % 10;
    if (b1 === 0 && b - b1 === 0) {
        b = 'N';
    }
    else {
        b = String(number[b - b1] + '' + number[b1]);
    }
    time = a + ':' + b;    
    return time;
}

function boool(a, b) {
    if (parseInt(a, 10) !== Number(a)) {
        return true;
    }
    if (parseInt(b, 10) !== Number(b)) {
        return true;
    }
    if (a < 0 || a > 23 || b < 0 || b > 59) {
        return true;
    }    
    return false;
}

module.exports = romanTime;
