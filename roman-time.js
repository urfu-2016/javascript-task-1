'use strict';
function ConvertToRomanNum(num){
	var romanNum = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L'];
	if (num < 11) {
		num  = romanNum[num];
	}
	else if (num % 10 === 0) {
			num = romanNum[((num - num % 10) / 10 + 9)]; 
		}
		else { 
			num = romanNum[((num - num % 10) / 10 + 9)] + romanNum[num % 10];
			}
	return num;
}
/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var arrHoursMin= time.split(':');
	var hours = parseInt(arrHoursMin[0], 10);
	var min = parseInt(arrHoursMin[1], 10);
	if(hours < 24 && min < 60) {
		hours = ConvertToRomanNum(hours);
		min = ConvertToRomanNum(min);
		time = hours + ':' + min;
		return time;
	}
	throw new TypeError('Неверное время');
}

module.exports = romanTime;
