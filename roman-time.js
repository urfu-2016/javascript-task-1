'use strict';

function convertTo(TransNumbers) {
    var firstDigital = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var secondDigits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    if (parseInt(TransNumbers, 10) === 0) {
        return 'N';
    }
    var trans = firstDigital[Math.floor(TransNumbers / 10)];
    trans = trans + secondDigits[TransNumbers % 10];
    
    return trans;
}
function romanTime(time) {
    var timeSet = time.split(':');
    var ValidMinutes = (timeSet[1].length === 2) && (timeSet[1] >= 0) && (timeSet[1] <= 59);
    var ValidHours = (timeSet[0].length === 2) && (timeSet[0] >= 0) && (timeSet[0] <= 23);
    if (ValidHours && ValidMinutes && timeSet.length === 2) {
        return convertTo(timeSet[0]) + ':' + convertTo(timeSet[1]);
    }
    throw new TypeError('TypeError');
}
module.exports = romanTime;
