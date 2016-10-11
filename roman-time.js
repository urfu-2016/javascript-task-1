'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
           try {
         if (time.length!=5){throw new TypeError()};
         var hour=time.substr(0, 2);
         var min=time.substr(3, 5);
         if (isNaN(hour)===true){throw new TypeError()};
         if (isNaN(min)===true){throw new TypeError()};}
         catch (err){throw new TypeError();}
    var min = time.substr(3,5);   
    var ArabMind = [1, 4, 5, 9, 10, 40, 50];
    var RomMind = ["I", "IV", "V", "IX", "X", "XL", "L"];
    var n=ArabMind.length - 1;
    if (hour == 0){RomHour = "N"};
    if (min == 0){RomMin = "N"};
    while (hour > 0) {
        if (hour >= ArabMind[n]) {
            RomHour += RomMind[n];
            hour -= ArabMind[n];
        }
        else {n--};
    }
    var k = ArabMind.length - 1;
    while (min > 0) {
        if (min >= ArabMind[k]){
            RomMin += RomMind[k];
            min -= ArabMind[k];
        }
        else {k--};
    }
    document.write(RomHour + ":" + RomMin)
    return time;
}
module.exports = romanTime;
