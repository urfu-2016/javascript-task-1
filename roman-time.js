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
    if (!isNaN(hours) && !isNaN(minutes)) {
        try {
            if (hours > 23 || minutes > 59 || hours < 0 || minutes < 0) {
                throw new TypeError('Неверный формат времени (HH:MM)', 'roman-time.js');
            }
        } catch (e) {
            console.log(e.toString());
            return '0';
        }
        var splitHours = hours.toString().split('');
        var splitMinutes = minutes.toString().split('');
        var decimalPart = ['N', 'X', 'XX', 'XXX', 'XL', 'L'];
        var numberPart = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        if (hours < 10) {
            if (minutes <= 10) {
                time = numberPart[splitHours[0]] + ':' + numberPart[splitMinutes[0]];
            }
            else if (minutes > 10) {
                time = numberPart[splitHours[0]] + ':' + decimalPart[splitMinutes[0]] + numberPart[splitMinutes[1]];
            }
        } else if (hours >= 10) {
            if (minutes <= 10) {
                time = decimalPart[splitHours[0]] + numberPart[splitHours[1]] + ':' + numberPart[splitMinutes[0]];
            }
            else if (minutes > 10) {
                time = decimalPart[splitHours[0]] + numberPart[splitHours[1]] + ':' + decimalPart[splitMinutes[0]] + numberPart[splitMinutes[1]];
            }
        }
    }
    
    return time;
}

module.exports = romanTime;
