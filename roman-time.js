'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var timeArray = time.split(':');
    var hours = filterInt(timeArray[0]);
    var minutes = filterInt(timeArray[1]);
    if (minutes < 0 || hours < 0 || minutes > 59 || hours > 23 ||
        Number.isNaN(hours) === true || Number.isNaN(minutes) === true) {
        return new TypeError('Время указано неверно!');
    }
    return convert(hours) + ':' + convert(minutes);
}
function filterInt(value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
        return Number(value);
    }
    return NaN;
}
function convert(numb) {
    var arabArray = [1, 4, 5, 9, 10, 40, 50];
    var romArray = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    if (numb === 0) {
        return 'N';
    }
    var result = '';
    var n = arabArray.length - 1;
    while (numb > 0) {
    if (numb >= arabArray[n]) {
        result += romArray[n];
        numb -= arabArray[n];
        } else {
            n--;
        }
    }
    return result;
}

module.exports = romanTime;
