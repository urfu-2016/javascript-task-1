'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var splitTime = time.split(':', 2);
    var hours = parseInt(splitTime[0]);
    var minutes = parseInt(splitTime[1]);
    try {
        if (!isNaN(hours) && !isNaN(minutes) && (hours > 23 || minutes > 59 || hours < 0 || minutes < 0)) {
            throw new TypeError('Неверный формат времени (HH:MM)', 'roman-time.js');
        }
    } catch (e) {

        return '0';
    }
    var splitH = hours.toString().split('');
    var splitM = minutes.toString().split('');
    var decPart = ['N', 'X', 'XX', 'XXX', 'XL', 'L'];
    var numPart = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    if (hours < 10 && minutes <= 10) {
        time = numPart[splitH[0]]+':'+numPart[splitM[0]];
    } else if (hours < 10 && minutes > 10) {
        time = numPart[splitH[0]]+':'+decPart[splitM[0]]+numPart[splitM[1]];
    } else if (hours >= 10 && minutes <= 10) {
        time = decPart[splitH[0]]+numPart[splitH[1]]+':'+numPart[splitM[0]];
    } else if (hours >= 10 && minutes > 10) {
        time = decPart[splitH[0]]+numPart[splitH[1]]+':'+decPart[splitM[0]]+numPart[splitM[1]];
    }

    return time;
}

module.exports = romanTime;
