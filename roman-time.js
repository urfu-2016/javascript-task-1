'use strict';

/**
 * @param {String} arab – арабское число
 * @returns {String} – время римскими цифрами (IX:V)
 */
function arabicToRoman(arab){
    var tenDigits = ["", "X", "XX", "XXX", "XL", "L"];
    var oneDigits = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    if (parseInt(arab, 10) === 0){
        return 'N';
    }
    var res = tenDigits[Math.floor(arab / 10)] + oneDigits[arab % 10];
    return res;
}

function romanTime(time){
    var b = time.split(':');
    if (b.length <= 2 && time.length <= 5){
        if (b[0] < 24 && b[0] >= 0 && b[1] < 60 && b[1] >= 0){
            return arabicToRoman(b[0]) + ':' + arabicToRoman(b[1]);
        }
    }
    throw new TypeError('Error');
}
module.exports = romanTime;
