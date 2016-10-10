'use strict';

function isValiable(hour, minute) {
    return hour > 23 || hour < 0 || minute > 59 || minute < 0;
}

function roman(units, dozens) {
    var res;
    var romanUnits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var romanDozens = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    if (units === 0) {
        res = 'N';
    } else {
        res = romanDozens[(units - units % 10) / 10] + romanUnits[units % 10];
    }
    res += ':';
    if (dozens === 0) {
        res += 'N';
    } else {
        res += romanDozens[(dozens - dozens % 10) / 10] + romanUnits[dozens % 10];
    }

    return res;
}

function romanTime(time) {
    time = time.split(':');
    var hour = Number(time[0]);
    var minute = Number(time[1]);
    if (isNaN(minute) || isNaN(hour) || isValiable(hour, minute)) {
        throw new TypeError("Неверное время");
    } else {
        time = roman(hour, minute);
    }

    return time;
}
module.exports = romanTime;

