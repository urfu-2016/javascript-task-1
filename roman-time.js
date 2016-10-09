'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var t = time.split(':');

    if (isNaN(parseInt(t[0])) || isNaN(parseInt(t[1])) || t[0]>23 || t[1]>59 || t[0]<0 || t[1]<0){
    	throw new TypeError('Неверный ввод!');
    }
    else{
    	var hh = parseInt(t[0]);
    	var mm = parseInt(t[1]);
    	var hours = convert(hh);
    	var min = convert(mm);
    	if(isNaN(hours) ==  false){hours = "N"};
    	if(isNaN(min) == false){min = "N"};
        time = hours + ':' + min;
    
    }
 return time;
}

function convert(num) {
    var lookup = {L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}, roman = '', i;
    for ( i in lookup ) {
        while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
        }
    }
    
    return roman;
}

module.exports = romanTime;
