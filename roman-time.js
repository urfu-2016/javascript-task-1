'use strict';
var firstDigit = new Array("","X", "XX", "XXX", "XL", "L");
var secondDigit = new Array("", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX");

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
 

function arabToRoman(number){
    if (number === 0){
        return "N";
    }
    var fDigit = parseInt(number/10);
    var sDigit = parseInt(number%10);
    return firstDigit[fDigit] + secondDigit[sDigit];
} 
 
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var splitTime = time.split(":");
    var hourMinute = new Array(Number(splitTime[0]), Number(splitTime[1]));
    
    if (isNaN(hourMinute[0]) || isNaN(hourMinute[1]) || hourMinute[0] < 0 || hourMinute[1] < 0 || hourMinute[0] > 23 || hourMinute[1] > 59){
        throw new TypeError("Bad format");
    }
    time = arabToRoman(hourMinute[0]) + ":" + arabToRoman(hourMinute[1]);
    
    return time;
}

module.exports = romanTime;
