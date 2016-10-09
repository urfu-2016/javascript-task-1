'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var splitTime = time.split('', 5);
    var hours = parseInt(splitTime[0] + splitTime[1]);
    var mins = parseInt(splitTime[3] + splitTime[4]);
    if (checkCorrectTime(splitTime, hours, mins)) {
        time = conversionTime(hours, mins);
    }

    return time;
}

function checkCorrectTime(splitTime, hours, mins) {
    if (!isCorrectTime(splitTime) && splitTime[2] === ':') {
        throw new TypeError('Неверный формат времени (HH:MM)', 'roman-time.js');
    }
    if (isNaN(hours) || isNaN(mins) || isCorrectRange(hours, mins)) {
        throw new TypeError('Неверный формат времени (HH:MM)', 'roman-time.js');
    }

    return true;
}

function isCorrectRange(hours, mins) {
    if (hours > 23 || mins > 59 || hours < 0 || mins < 0) {

        return true;
    }

    return false;
}

function conversionTime(hours, mins) {
    var time = '';
    var splitH = hours.toString().split('');
    var splitM = mins.toString().split('');
    var decs = ['N', 'X', 'XX', 'XXX', 'XL', 'L'];
    var nums = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    if (hours < 10 && mins <= 10) {
        time = nums[hours] + ':' + nums[mins];
    } else if (hours < 10 && (mins % 10) === 0) {
        time = nums[hours] + ':' + decs[mins / 10];
    } else if (hours < 10 && mins > 10) {
        time = decs[splitH[0]] + ':' + decs[splitM[0]] + nums[splitM[1]];
    } else if (hours >= 10 && mins <= 10) {
        time = decs[hours] + nums[splitH[1]] + ':' + nums[mins];
    } else if (hours >= 10 && mins > 10) {
        time = decs[splitH[0]] + nums[splitH[1]] + ':' + decs[splitM[0]] + nums[splitM[1]];
    }

    return time;
}

function isCorrectTime(splitTime) {
    for (var i = 0; i < splitTime.length; i++) {
        if (isNaN(parseInt(splitTime[i])) && i !== 2) {
            return false;
        }
    }

    return true;
}

module.exports = romanTime;
