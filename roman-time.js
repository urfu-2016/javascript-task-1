'use strict';

function toRoman(x) {
    var res = '';

    if (x === 0) {
        res = 'N';
    }
    if (x >= 50) {
        x -= 50;
        res += 'L';
    }
    while (x >= 10) {
        x -= 10;
        res += 'X';
    }
    if (x >= 9) {
        x -= 9;
        res += 'IX';
    }
    if (x >= 5) {
        x -= 5;
        res += 'V';
    }
    if (x >= 4) {
        x -= 4;
        res += 'IV';
    }
    while (x >= 1) {
        x -= 1;
        res += 'I';
    }

    return res;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    time = String(time);
    if (!/^\d\d:\d\d$/.test(time)) {
        throw new TypeError("Incorrect time");
    }

    var hh = +time.slice(0, 2), mm = +time.slice(3, 5);

    if (hh >= 24 || mm >= 60) {
        throw new TypeError("Incorrect time");
    }

    return time + " " + toRoman(hh) + ':' + toRoman(mm);
}

module.exports = romanTime;
