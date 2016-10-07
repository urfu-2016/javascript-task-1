'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var ar = [];
    var ri = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII',
    'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXI', 'XXIII', 'XXIV',
    'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX', 'XXXI', 'XXXII', 'XXXIII',
    'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX', 'XL', 'XLI', 'XLII',
    'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX', 'L', 'LI', 'LII', 'LIII',
    'LIV', 'LV', 'LVI', 'LVII', 'LVIII', 'LIX'];
    for (var i = 0; i < 60; i++) {
        ar[i] = i;
    }
    checkInput(time);
    time = time.split(':');
    var h = parseInt(time[0]);
    var m = parseInt(time[1]);
    checkHours(h);
    checkMinutes(m);
    var iH = ar.indexOf(h);
    h = ri[iH];
    var iM = ar.indexOf(m);
    m = ri[iM];

    return h + ':' + m;
}

function checkInput(time) {
    if (time === null || time === undefined || isNaN(time)) {
        throw new TypeError();
    }
}

function checkHours(h) {
    if (h > 23) {
        throw new TypeError('Часы от 0 до 23');
    }
}

function checkMinutes(m) {
    if (m > 59) {
        throw new TypeError('Минуты от 0 до 59');
    }
}

module.exports = romanTime;
