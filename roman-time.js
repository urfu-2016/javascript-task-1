/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

'use strict';

function convertToRoman(num1, num2, time) {
    if (time === 0) {
        return 'N';
    } else {
        var counter = 0;
        while (time > 10) {
            time -= 10;
            counter++;
        }
        if (counter === 0) {
            return time = num1[time];
        } else {
            return time = num2[counter] + num1[time];
        }
    }
}

function romanTime(time) {
    var tempTime = time.split(':');
    tempTime[0] = parseInt(tempTime[0], 10);
    tempTime[1] = parseInt(tempTime[1], 10);
    var firstRomanNumbers = { 0: 'N', 1: 'I', 2: 'II', 3: 'III', 4: 'IV',
        5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX' };
    var secondRomanNumbers = { 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L' };
    if (tempTime[0] > 0 && tempTime[0] < 23 && tempTime[1] > 0 && tempTime[1] < 59) {
        tempTime[0] = convertToRoman(firstRomanNumbers, secondRomanNumbers, tempTime[0]);
        tempTime[1] = convertToRoman(firstRomanNumbers, secondRomanNumbers, tempTime[1]);
    } else {
        throw new TypeError('Неверный формат времени');
    }
    time = tempTime.join(':');

    return time;
}

module.exports = romanTime;
