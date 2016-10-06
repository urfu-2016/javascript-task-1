'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (time.indexOf(':') === -1 ||
        time.indexOf('.') !== -1 ||
        time.indexOf(',') !== -1) {
        throw new TypeError();
    }

    time = time.split(':');
    var hours = parseInt(time[0]);
    var minutes = parseInt(time[1]);

    if (isNaN(hours) || isNaN(minutes) ||
        (hours > 23 || hours < 0) ||
        (minutes > 59 || minutes < 0)) {
        throw new TypeError();
    }

    hours = hours === 0 ? 'N' : roman(hours - hours % 10) + roman(hours % 10);
    minutes = minutes === 0 ? 'N' : roman(minutes - minutes % 10) + roman(minutes % 10);

    return hours + ':' + minutes;
}

function roman(num) {
    switch (num) {
        case 1: return 'I';
        case 2: return 'II';
        case 3: return 'III';
        case 4: return 'IV';
        case 5: return 'V';
        case 6: return 'VI';
        case 7: return 'VII';
        case 8: return 'VIII';
        case 9: return 'IX';
        case 10: return 'X';
        case 20: return 'XX';
        case 30: return 'XXX';
        case 40: return 'XL';
        case 50: return 'L';
        default : return '';
    }
}

module.exports = romanTime;
