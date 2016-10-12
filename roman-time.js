'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var romanNumbers = { 0: 'N', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII',
    8: 'VIII', 9: 'IX', 10: 'X', 11: 'XI', 12: 'XII', 13: 'XIII', 14: 'XIV', 15: 'XV',
    16: 'XVII', 17: 'XVIII', 18: 'XVIII', 19: 'XIX', 20: 'XX', 21: 'XXI', 22: 'XXII',
    23: 'XXIII', 24: 'XXIV', 25: 'XXV', 26: 'XXVI', 27: 'XXVII', 28: 'XXVIII', 29: 'XXIX',
    30: 'XXX', 31: 'XXXI', 32: 'XXXII', 33: 'XXXIII', 34: 'XXXIV', 35: 'XXXV', 36: 'XXXVI',
    37: 'XXXVII', 38: 'XXXVIII', 39: 'XXXIX', 40: 'XL', 41: 'XLI', 42: 'XLII', 43: 'XLIII',
    44: 'XLIV', 45: 'XLV', 46: 'XLVI', 47: 'XLVII', 48: 'XLVIII', 49: 'XLVIX', 50: 'L',
    51: 'LI', 52: 'LII', 53: 'LIII', 54: 'LIV', 55: 'LV', 56: 'LVI', 57: 'LVII',
    58: 'LVIII', 59: 'LIX', 60: 'LX'
};
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var arrayTime = time.split(':');
    var hours = parseInt(arrayTime[0]);
    var mins = parseInt(arrayTime[1]);
    if (!(isNaN(hours) && isNaN(mins))) {
        if (hours < 24 && mins < 60) 
        { return romanNumbers[hours] + ':' + romanNumbers[(mins)]; }
    }
    else { throw new TypeError(); }
}
module.exports = romanTime;
