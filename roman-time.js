'use strict';

function toRoman(x) {
    if (x === 0) {
        return 'N';
    }

    var numbers = [50, 10, 9, 5, 4, 1];
    var symbols = ['L', 'X', 'IX', 'V', 'IV', 'I'];

    var res = '';
    for (var i = 0; i < numbers.length; i++) {
        while (x >= numbers[i]) {
            x -= numbers[i];
            res += symbols[i];
        }
    }

    return res;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    time = String(time).trim();
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
