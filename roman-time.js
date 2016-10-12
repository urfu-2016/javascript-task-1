'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function convert(TransNumbers) {
     var firstDigital = ["", "X", "XX", "XXX", "XL", "L"];
     var secondDigits = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
     if (parseInt(arabTime, 10) === 0) {
         return 'N';
     }
     var trans = firstDigital[Math.floor(arabTime / 10)];
     trans = trans + secondDigits[arabTime % 10];
     return trans;
 }

function romanTime(time) {
    var timeSet = time.split(':');
	var ValidMinutes = (timeSet[1].length === 2) && (timeSet[1] >= 0) && (timeSet[1] <= 59);
	var ValidHours = (timeSet[0].length === 2) && (timeSet[0] >= 0)&&(timeSet[0] <= 23);	
    if (ValidHours && ValidHours && timeSet.length === 2) {
         return сonvert(timeSet[0]) + ':' + сonvert(timeSet[1]);
      }
	throw new TypeError('TypeError');}
module.exports = romanTime;
