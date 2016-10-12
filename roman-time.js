'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function convert(TransNumbers){
	var ArabMind = [1, 4, 5, 9, 10, 40, 50];
    var RomMind = ["I", "IV", "V", "IX", "X", "XL", "L"];
	var n=ArabMind.length - 1;
	if ((TransNumbers == '0') || (TransNumbers == '00')) {
	return 'N';
	while (TransNumbers > 0) {
        if (TransNumbers >= ArabMind[n]){
            RomNumber += RomMind[n];
            TransNumbers -= ArabMind[n];
        }
        else {n--};
    }
	return RomNumber;
};
function romanTime(time) {
    var timeSet = time.split(':');
	var ValidMinutes = (timeSet[1].length === 2) && (timeSet[1] >= 0) && (timeSet[1] <= 59);
	var ValidHours = (timeSet[0].length === 2) && (timeSet[0] >= 0)&&(timeSet[0] <= 23);	
    if (ValidHours && ValidHours && timeSet.length === 2) {
         return Convert(timeSet[0]) + ':' + Convert(timeSet[1]);
      }
	throw new TypeError('TypeError');}
module.exports = romanTime;
