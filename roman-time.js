'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    try {
         if (time.length != 5) throw new TypeError();
         var hour = time.substr(0,2);
         var min = time.substr(3,5);
         if (isNaN(hour) === true) throw new TypeError();
         if (isNaN(min) === true) throw new TypeError();
                            }
         catch (err) {throw new TypeError();}        
    var RomHour = '';
    var RomMin = '';
    var arab_mind = [1,4,5,9,10,40,50];
    var rom_mind = ["I","IV","V","IX","X","XL","L"];
    var n = arab_mind.length-1;
    if (hour === 0) RomHour = "N";
    if (min === 0) RomMin = "N";
    while (hour>0) {
        if (hour >= arab_mind[n]){
            RomHour += rom_mind[n];
            hour -= arab_mind[n];
        }
        else n--;
    }
    var k = arab_mind.length-1;
       while (min>0) {
        if (min >= arab_mind[k]){
            RomMin += rom_mind[k];
            min -= arab_mind[k];
        }
        else k--;
    }
    return time;
}

module.exports = romanTime;
