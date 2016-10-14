'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    var splited_time = time.split(":");
    var result = "";
    
    for (var i = 0; i < splited_time.length; i++) {
        try {
            splited_time[i] = parseInt(splited_time[i]);
            if isNaN(splited_time[i]) throw "Bad input"; 
            if (splited_time[i] < 0) throw "Too low";
            if (splited_time[i] > 59)||(splited_time[0] > 23) throw "Too high";
            if (splited_time[i] === 0) result += "N"
           
            var l = splited_time[i] / 50;
            
            result += "L" * l;
            splited_time[i] = splited_time[i] % 50;
            
            var x = splited_time[i] / 10;
            
            if (x === 4) {
                result += "XL";
            }
            else {
                result += "X" * x;
            }
            splited_time[i] = splited_time[i] % 10; 
           
            var v1 = splited_time[i] / 5;
            var v2 = splited_time[i] % 5;
            
            if (v1 === 0) {
                switch(v2) {
                    case 1 :
                        result += "I";
                        break;
                    case 2 :
                        result += "II";
                        break;
                    case 3 :
                        result += "III";
                        break;
                    case 4 :
                        result += "IV";
                        break;
                    default : break;
                }
            }
            else {
                switch(v2) {
                    case 1 :
                        result += "VI";
                        break;
                    case 2 :
                        result += "VII";
                        break;
                    case 3 :
                        result += "VIII";
                        break;
                    case 4 :
                        result += "IX";
                        break;
                    default : break;
                }
            }
            if (i === 0) result += ":";
        }
        catch(err) {
            return err;
        }
    }
        
    return time;
}

module.exports = romanTime;
