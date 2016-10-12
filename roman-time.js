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
            if (parseInt(a, 10) !== +a) {
                throw new TypeError();
            }
            if (parseInt(b, 10) !== +b) {
                throw new TypeError();
            }
            if (Bool(a, b)) {
                throw new TypeError();
            }
            break;
        }
    }
    var a1 = a % 10;
    var a2 = a - a1;
    if (a1 === 0 && a2 === 0) {
        a = 'N';
    }
    else if (a1 === 0) {
        a = number[a2];
    }
    else if (a2 === 0) {
        a = number[a1];
    }
    else {
        a = String(number[a2]) + '' + String(number[a1]);
    }
    var b1 = b % 10;
    var b2 = b - b1;
    if (b1 === 0 && b2 === 0) {
        b = 'N';
    }
    else {
        b = number[b2] + '' + number[b1];
    }
    time = a + ':' + b;
    
    return time;
}

function Bool (a,b){
    if (a < 0 || a > 23 || b < 0 || b > 59) {
        return true;
    }
    return false;
}

module.exports = romanTime;
