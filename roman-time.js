'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
	var h,m;
	var roman = ["N","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];
	if(!time) {
 throw new TypeError("Неверное время");}
	h = Number(time[0])*10 + Number(time[1]);
	m = Number(time[3])*10 + Number(time[4]);
	var time = roman[h%12]+":"+roman[m%12];
    return time;
}

module.exports = romanTime;
