/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

'use strict';


function romanTime(time) {
    var tempTime = time.split(':');
    if (!(tempTime[0] < 0 || tempTime[0] > 23 || tempTime[1] < 0 || tempTime[1] > 59)) {
        var firstRomanNumbers = { 0: 'N', 1: 'I', 2: 'II', 3: 'III', 4: 'IV',
                                 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X' };
        if (tempTime[0] <= 10) {
            tempTime[0] = firstRomanNumbers[tempTime[0]];
        }
        if (tempTime[0] <= 20) {
            temptime[0] = 'X' + firstRomanNumbers[tempTime[0] - 10];
        } else {
            tempTime[0] = 'XX' + firstRomanNumbers[tempTime[0] - 20];
        }
        if (tempTime[1] <= 10) {
            tempTime[1] = firstRomanNumbers[tempTime[0]];
        }
        if (tempTime[1] <= 20) {
            tempTime[1] = 'X' + firstRomanNumbers[tempTime[0] - 10];
        }
        if (tempTime[1] <= 30) {
            tempTime[1] = 'XX' + firstRomanNumbers[tempTime[0] - 20];
        }
        if (tempTime[1] <= 40) {
            tempTime[1] = 'XXX' + firstRomanNumbers[tempTime[0] - 30];
        }
        if (tempTime[1] <= 50) {
            tempTime[1] = 'XL' + firstRomanNumbers[tempTime[0] - 40];
        } else {
            tempTime[1] = 'L' + firstRomanNumbers[tempTime[0] - 50];
        }
    }
    else {
        throw new TypeError('Неверный формат времени');
    }
    time = tempTime.join(':');
    return time;
}

module.exports = romanTime;
