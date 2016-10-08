'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var splitTime = time.split(':', 2);
    var hours = parseInt(splitTime[0]);
    var mins = parseInt(splitTime[1]);
    try {
        if (!isNaN(hours) && !isNaN(mins) && (hours > 23 || mins > 59 || hours < 0 || mins < 0)) {
            throw new TypeError('Неверный формат времени (HH:MM)', 'roman-time.js');
        }
    } catch (e) {

        return '0';
    }
    time = conversionTime(hours, mins);

    return time;
}

function conversionTime(hours, mins) {
    var time = '';
    var splitH = hours.toString().split('');
    var splitM = mins.toString().split('');
    var decs = ['N', 'X', 'XX', 'XXX', 'XL', 'L'];
    var nums = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    if (hours < 10 && mins <= 10) {
        time = nums[splitH[0]] + ':' + nums[splitM[0]];
    } else if (hours < 10 && mins > 10) {
        time = nums[splitH[0]] + ':' + decs[splitM[0]] + nums[splitM[1]];
    } else if (hours >= 10 && mins <= 10) {
        time = decs[splitH[0]] + nums[splitH[1]] + ':' + nums[splitM[0]];
    } else if (hours >= 10 && mins > 10) {
        time = decs[splitH[0]] + nums[splitH[1]] + ':' + decs[splitM[0]] + nums[splitM[1]];
    }

    return time;
}

module.exports = romanTime;
