'use strict';

function toRoman(x) {
    if (x === 0) {
        return 'N';
    }

    var parts = new Map([
        [50, 'L'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ])

    var res = '';
    for (var part of parts) {
        while (x >= part[0]) {
            x -= part[0];
            res += part[1];
        }
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
        throw new TypeError('Incorrect time');
    }

    var hh = Number(time.slice(0, 2));
    var mm = Number(time.slice(3, 5));

    if (hh >= 24 || mm >= 60) {
        throw new TypeError('Incorrect time');
    }

    return toRoman(hh) + ':' + toRoman(mm);
}

module.exports = romanTime;
