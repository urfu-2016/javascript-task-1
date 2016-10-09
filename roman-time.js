'use strict';

/**
 * @param {String} romTime – арабское число
 * @returns {String} – число римскими цифрами
 */
function tenDigits(romTime) {
    if (parseInt(romTime, 10) !== 0) {
        switch (Math.floor(romTime / 10)) {
            case 0:
                return '';
            case 1:
                return 'X';
            case 2:
                return 'XX';
            case 3:
                return 'XXX';
            case 4:
                return 'XL';
            case 5:
                return 'L';
        }
    } else {
            return 'N';
    }
}
function oneDigits(romTime) {
    if (parseInt(romTime, 10) !== 0) {
        switch (romTime % 10) {
            case 0:
                return '';
            case 1:
                return 'I';
            case 2:
                return 'II';
            case 3:
                return 'III';
            case 4:
                return 'IV';
            case 5:
                return 'V';
            case 6:
                return 'VI';
            case 7:
                return 'VII';
            case 8:
                return 'VIII';
            case 9:
                return 'IX';
        }
    } else {
            return '';
        }
}
/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var timeArr = time.split(':');
    var hours = timeArr[0];
    var minutes = timeArr[1];
    if (timeArr.length <= 2 && time.length <= 5 && hours < 24 && minutes < 60 && hours >= 0 && minutes >= 0) {
        return tenDigits(hours) + oneDigits(hours) + ':' + tenDigits(minutes) + oneDigits(minutes);
    }
    throw new TypeError('TypeError');
}

module.exports = romanTime;
