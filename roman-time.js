'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var t = checkTime(time);
    var hh = t[0];
    var mm = t[1];
    var hours = convert(hh);
    var min = convert(mm);
    if (isNaN(hours) === false) {
        hours = "N";
    }
    if (isNaN(min) === false) {
        min = "N";
    }

    time = hours + ':' + min;

    return time;
}

function checkTime(time) {
    if (time.length > 5) {
        throw new TypeError('Неверный ввод!');
    }
    var t = time.split(':');
    t[0] = Number(t[0]);
    t[1] = Number(t[1]);
    checkHours(t[0]);
    checkMinutes(t[1]);

    return t;
}

function checkHours(h) {
    if (h > 23 || h < 0 || isNaN(h)) {
        throw new TypeError('Неверный ввод!');
    }
}

function checkMinutes(m) {
    if (m > 59 || m < 0 || isNaN(m)) {
        throw new TypeError('Неверный ввод!');
    }
}

function convert(num) {
    var lookupSymb = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var lookup = [50, 40, 10, 9, 5, 4, 1];
    var roman = '';
    for (var i = 0; i < lookup.length; i++) {
        while (num >= lookup[i]) {
            roman += lookupSymb[i];
            num -= lookup[i];
        }
    }

    return roman;
}

module.exports = romanTime;
