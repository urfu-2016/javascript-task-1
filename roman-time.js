'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var rome = { '0': '', '1': 'I', '2': 'II', '3': 'III', '4': 'IV',
    '5': 'V', '6': 'VI', '7': 'VII', '8': 'VIII',
    '9': 'IX', '10': 'X', '20': 'XX', '30': 'XXX',
    '40': 'XL', '50': 'L', '-1': 'N' };
function findInObj(item, obj) {
    for (var key in obj) {
        if (Number(key) === item) {
            return obj[key];
        }
    }
}

function romanTime(time) {
    var hours = Number(time.split(':')[0]);
    var minutes = Number(time.split(':')[1]);
    time = '';

    if (hours < 0 || hours > 23 || minutes > 59 || minutes < 0) {
        throw new Error('Error');
    }

    if (isNaN(hours) || isNaN(minutes)) {
        throw new Error('Error');
    }

    if (hours === 0) {
        hours = -1
    }
    if (minutes === 0) {
        minutes = -1;
    }
    if (hours > 10) {
        var decimalPart = hours - (hours % 10);
        var n = hours - decimalPart;

        time += findInObj(decimalPart, rome);

        if (n) {
            time += findInObj(n, rome);
        }

    } else {
        time += findInObj(hours, rome);
    }

    time += ':';

    if (minutes > 10) {
        var decimalPart = minutes - (minutes % 10);
        var n = minutes - decimalPart;

        time += findInObj(decimalPart, rome);

        if (n) {
            time += findInObj(n, rome);
        }

    } else {
        time += findInObj(minutes, rome);
    }

    return time;
}

module.exports = romanTime;
