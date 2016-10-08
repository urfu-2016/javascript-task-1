'use strict';

function romanObject(starterString){
	try{
		var value = starterString.split(":");
		var probableHours = parseInt(value[0]);
		var probableMinutes = parseInt(value[1]);
	}
	catch (e) {
		throw new TypeError("Incorrect time");
	}
	
	this.hours = checkTime(probableHours, "hours");
	this.minutes = checkTime(probableMinutes, "minutes");
	this.romanAnalogues = {1: "I", 4: "IV",5:"V", 9: "IX", 10:"X", 40: "XL", 50:"L" };
	
	this.getMaximumInsideDict = function getMaximumInsideDict(elem){
 	var difference = Number.MAX_SAFE_INTEGER;
 	var searchFor;
 	var keys = Object.keys(this.romanAnalogues);
 	
 	for (var i =0; i < keys.length; i++){
 		var curDiff = elem - keys[i];
 		if (curDiff < difference && curDiff >= 0)
 		{
 			difference = curDiff;
 			searchFor = keys[i];

 		}
	}
	return searchFor;
 	}

	this.convertArabicToRoman = function convertArabicToRoman(measure){
 	if (measure == 0)
 		return "N";
 	var number = this.getMaximumInsideDict(measure);
 	if (number == measure)
 		return this.romanAnalogues[number];
 	return this.romanAnalogues[number] + this.convertArabicToRoman(measure - number); 
	}

	this.returnRomanResult = function returnRomanResult() {
	return this.convertArabicToRoman(this.hours) + ":" + this.convertArabicToRoman(this.minutes);
	}
}

function checkTime(time, tag) {
	var result = parseInt(time, 10);
	
	if (tag === "hours")
		if (!((result <= 23) && (result >= 0)) || (isNaN(result)))
			throw new TypeError("Incorrect time");
	else if (tag === "minutes")
		if (!((result <= 59) && (result >= 0)) || (isNaN(result)))
			throw new TypeError("Incorrect time");
	return result;
}
 
 
/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var convertedTime = new romanObject(time);
	return convertedTime.returnRomanResult();
}

module.exports = romanTime;