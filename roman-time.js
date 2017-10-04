'use strict';

function toRoman(num) {
    var font_ar = [0,1,4,5,9,10,40,50];
    var font_rom = ["N","I","IV","V","IX","X","XL","L"]
    var rezult = '';
    var n = font_ar.length - 1;
    if (num===0) 
    return "N";
    while (num > 0) { 
       if (num >= font_ar[n]) {
           rezult += font_rom[n];
           num -= font_ar[n];
       }
       else n--;
    }
    return rezult;
}
function romanTime(time) {
    if (time == "null") {
        return new TypeError();
    }
    var hours = Number(time.substring(0,2));
    var minutes = Number(time.substring(3,5));
    if (hours>=24 ||  hours<0 || minutes>=60 || minutes<0 || time.length !== 5) {
        return new TypeError("Неверное время");
    }
    return toRoman(hours) + ":" + toRoman(minutes);
}

module.exports = romanTime;
