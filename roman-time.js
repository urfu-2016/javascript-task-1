'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var hours = parseInt(process.argv[2], 10);
var minutes = parseInt(process.argv[3],10);

function romanTime(time){
    var tens = Math.floor(time / 10) * 10;
    var units = time - tens;
    var hours = romans[tens] + romans[units];
    return hours;
}
if (hours >= 0 && hours <=23 && minutes >=0 && minutes<=59) {

    var romans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    romans [20] = 'XX';
    romans [30] = 'XXX';
    romans [40] = 'XL';
    romans [50] = 'L';

    var romanHours = romanTime(hours);
    var romanMinutes=romanTime(minutes);

    console.log(hours === 0 ? '-' : romanHours, romanMinutes);
} else{
    console.log('Время указанно неверно');
}
module.exports = romanTime;
