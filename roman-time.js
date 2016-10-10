'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function isTime(time){
    if (time == undefined){
	    throw new TypeError();
    }
    if (time.charAt(2) == ":"){
	    for(var i = 0; i < time.length; i++){
            if(parseInt(time.charAt(i)) !== parseInt(time.charAt(i)) && i !== 2){
                throw new TypeError();
                }
            else if(parseInt(time.charAt(0) + time.charAt(1)) > 23){
                throw new TypeError();
            }
            else if(parseInt(time.charAt(3) + time.charAt(4)) > 59){
                throw new TypeError();
            }
        }
    }
    else {
        throw new TypeError();
    }
}
function reformInArabic(units, one, five){
    var romanUnits = ""
    if (units == "0"){
	    romanUnits = ""
    }
    else if (units < 4){
	    for(var i = 0; i < units; i++){
            romanUnits = romanUnits + one
	    }
    }
    else if (units == 4){
	    romanUnits = one + five
    }
    else if(units < 9){
	    romanUnits = five 
	    for(var i = 0; i < units - 5; i++){
            romanUnits = romanUnits + one
        }
    }
    else if(units == 9){
        romanUnits = "I" + "X"
    }
    return romanUnits
}
function isZero(a, b){
    if (parseInt(a) == 0 && parseInt(b) == 0){
	    return true
    }
    else{
        return false
    }
}
function romanTime(time){
    isTime(time)
    var hours = reformInArabic(parseInt(time.charAt(0)), "X", "L") + reformInArabic(parseInt(time.charAt(1)), "I", "V")
    var minutes = reformInArabic(parseInt(time.charAt(3)), "X", "L") + reformInArabic(parseInt(time.charAt(4)), "I", "V")
    if (isZero(time.charAt(0), time.charAt(1))){
        hours = "N"
    }
    if (isZero(time.charAt(3), time.charAt(4))){
        minutes = "N"
    }
    return hours + ":" + minutes
}

module.exports = romanTime;
