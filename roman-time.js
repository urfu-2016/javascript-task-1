'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    var splitedTime = time.split(":");
    var result = '';
    
    for (var i = 0; i < splitedTime.length; i++) {
        try {
            splitedTime[i] = parseInt(splitedTime[i]);
            if (isNaN(splitedTime[i])) throw "Bad input"; 
            if (splitedTime[i] < 0) throw "Too low";
            if ((splitedTime[i] > 59)||(splitedTime[0] > 23)) throw "Too high";
		} catch (err) {
            return err;
        }
		if (splitedTime[i] === 0) result += 'N';
	   
		var l = splitedTime[i] / 50;
		
		result += 'L' * l;
		splitedTime[i] = splitedTime[i] % 50;
		
		var x = splitedTime[i] / 10;
		
		if (x === 4) {
			result += 'XL';
		} else {
			result += 'X' * x;
		}
		splitedTime[i] = splitedTime[i] % 10; 
	   
		var v1 = splitedTime[i] / 5;
		var v2 = splitedTime[i] % 5;
		
		if (v1 === 0) {
			switch (v2) {
				case 1 : result += 'I'; 
				break;
				case 2 : result += 'II'; 
				break;
				case 3 : result += 'III'; 
				break;
				case 4 : result += 'IV'; 
				break;
				default : break;
			}
		} else {
			switch (v2) {
				case 1 : result += 'VI';
				break;
				case 2 : result += 'VII'; 
				break;
				case 3 : result += 'VIII'; 
				break;
				case 4 : result += 'IX'; 
				break;
				default : break;
			}
		}
		if (i === 0) {
			result += ':';
		}
    }
        
    return time;
}

module.exports = romanTime;
