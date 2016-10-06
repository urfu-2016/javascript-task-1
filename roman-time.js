'use strict';

var ArabToRome = require('./arabToRome');

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (typeof time !== 'string') {
        throw new TypeError();
    }
    var times = time.split(':');

    if (times.length !== 2) {
        throw new TypeError();
    }

    return toRoman(times[0], 23) + ':' + toRoman(times[1], 59);
}

function toRoman(timeInSting, max) {
    if (/[^0-9]/i.test(timeInSting)) {
        throw new TypeError();
    }
    var time = parseInt(timeInSting);

    if (isNaN(time) || time < 0 || time > max) {
        throw new TypeError();
    }

    if (!time) {
        return 'N';
    }

    return converter(time);
}
function converter(count) {
    if (!count) {
        return '';
    }

    for (var key in ArabToRome) {
        if (count >= ArabToRome[key].arab) {
            return ArabToRome[key].rome + converter(count - ArabToRome[key].arab);
        }
    }
}

module.exports = romanTime;
