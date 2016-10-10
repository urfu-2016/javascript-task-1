/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

'use strict';

function convertToRoman(num1, num2, time) {
    if (time === 0) {
        time = 'N';
    } else {
        var counter = 0;
        while (time > 10) {
            time -= 10;
            counter++;
        }
        if (counter === 0) {
            time = num1[time];
        } else {
            time = num2[counter] + num1[time];
        }
    }

    return time;
}

function checkValidation(time) {
    try {
        var temp = time[0].split('');
        temp = temp.concat(time[1].split(''));
        temp[0] = parseInt(temp[0], 10);
        temp[1] = parseInt(temp[1], 10);
        temp[2] = parseInt(temp[2], 10);
        temp[3] = parseInt(temp[3], 10);
        if (temp[0] >= 0 && temp[0] <= 2 &&
            temp[1] >= 0 && temp[1] <= 9 &&
            temp[2] >= 0 && temp[2] <= 5 &&
            temp[3] >= 0 && temp[3] <= 9) {
            return true;
        }

        return false;
    } catch (e) {
        return false;
    }
}

function romanTime(time) {
    var tempTime = time.split(':');
    var firstRomanNumbers = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV',
        5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X' };
    var secondRomanNumbers = { 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L' };
    if (checkValidation(tempTime) && time.length === 5 && tempTime.length === 2) {
        tempTime[0] = parseInt(tempTime[0], 10);
        tempTime[1] = parseInt(tempTime[1], 10);
    } else {
        throw new TypeError('Неверный формат времени');
    }
    if (tempTime[0] >= 0 && tempTime[0] <= 23 &&
        tempTime[1] >= 0 && tempTime[1] <= 59 &&
        !isNaN(tempTime[0]) && !isNaN(tempTime[1])) {
        tempTime[0] = convertToRoman(firstRomanNumbers, secondRomanNumbers, tempTime[0]);
        tempTime[1] = convertToRoman(firstRomanNumbers, secondRomanNumbers, tempTime[1]);
    } else {
        throw new TypeError('Неверный формат времени');
    }
    time = tempTime.join(':');

    return time;
}

module.exports = romanTime;
