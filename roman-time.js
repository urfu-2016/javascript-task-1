'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var result = [];
    try {
        var timeWithoutSeparator = time.split(':');
        var hours = parseInt(timeWithoutSeparator[0]);
        var minutes = parseInt(timeWithoutSeparator[1]);
        var dozens = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
        var units = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

        if (time.length !== 5 || isNaN(hours) || isNaN(minutes)) {
            throw new TypeError('Неверный формат входных данных');
        }
        if (hours > 23 || minutes > 59) {
            throw new TypeError('Неверный формат времени');
        }

        for (var i = 0; i < dozens.length; i++) {
            if (parseInt(time[0]) === i) {
                result[0] = dozens[i].toString();
            }
            if (parseInt(time[3]) === i) {
                result[3] = dozens[i].toString();
            }
        }

        for (var i = 0; i < units.length; i++) {
            if (parseInt(time[1]) === i) {
                result[1] = units[i].toString();
            }
            if (parseInt(time[4]) === i) {
                result[4] = units[i].toString();
            }
        }
        if (result[0]  === '' && result[1] === '') {
            result[0] = 'N';
        }
        if (result[3]  === '' && result[4] === '') {
            result[3] = 'N';
        }
        result[2] = ':'
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
    return result.join("");
}

module.exports = romanTime;
