'use strict';

var romanAnalogues = { 1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L" };

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
 
function getMaximumInsideDict(elem) {
 	var difference = Number.MAX_SAFE_INTEGER;
 	var searchFor;
 	var keys = Object.keys(romanAnalogues);
 	
 	for (var i =0; i < keys.length; i++) {
 		var curDiff = elem - keys[i];
 		if (curDiff < difference && curDiff >= 0) {
 			difference = curDiff;
 			searchFor = keys[i];
		}

	}

	return searchFor;
}

function convertArabicToRoman(measure) {
	if (measure === 0) {
 		return "N";
 	}
 	var number = getMaximumInsideDict(measure);
 	
 	if (number == measure) {
 		return romanAnalogues[number];
 	}
	return romanAnalogues[number] + convertArabicToRoman(measure - number); 
	
}

function returnRomanResult(hours, minutes) {
	return convertArabicToRoman(hours) + ":" + convertArabicToRoman(minutes);
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    try {
    	
		var value = time.split(":");
		var hours = checkTime(parseInt(value[0]), "hours");
		var minutes = checkTime(parseInt(value[1]), "minutes");
		
		return returnRomanResult(hours, minutes);
	}

	catch (e) {
		throw new TypeError("Incorrect time");
	}

}

module.exports = romanTime;