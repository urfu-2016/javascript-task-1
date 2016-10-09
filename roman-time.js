'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var result = [];
    validateData(time);
    validateTime(time);
    conversionDozens(result, time);
    conversionUnits(result, time);
    conversionZeros(result);
    result[2] = ':';

    return result.join("");
}

function validateData(time) {
    var timeStr = time.split(':');
    var hours = parseInt(timeStr[0]);
    var minutes = parseInt(timeStr[1]);
    var hoursN = parseInt(timeStr[0][1]);
    var minutesN = parseInt(timeStr[1][1]);

    if (time.length !== 5 || isNaN(hours) || isNaN(minutes) || isNaN(hoursN) || isNaN(minutesN)) {
        throw new TypeError('Неверный формат входных данных');
    }

}

function validateTime(time) {
    var timeStr = time.split(':');
    var hours = parseInt(timeStr[0]);
    var minutes = parseInt(timeStr[1]);

    if (hours > 23 || minutes > 59 || timeStr[0].length !== 2 || timeStr[1].length !== 2) {
        throw new TypeError('Неверный формат времени');
    }
}

function conversionDozens(result, time) {
    var dozens = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var i;

    for (i = 0; i < dozens.length; i++) {
        if (parseInt(time[0]) === i) {
            result[0] = dozens[i].toString();
        }
        if (parseInt(time[3]) === i) {
            result[3] = dozens[i].toString();
        }
    }

    return result;
}

function conversionUnits(result, time) {
    var units = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var i;
    for (i = 0; i < units.length; i++) {
        if (parseInt(time[1]) === i) {
            result[1] = units[i].toString();
        }
        if (parseInt(time[4]) === i) {
            result[4] = units[i].toString();
        }
    }

    return result;
}

function conversionZeros(result) {
    if (result[0] === '' && result[1] === '') {
        result[0] = 'N';
    }
    if (result[3] === '' && result[4] === '') {
        result[3] = 'N';
    }

    return result;
}

module.exports = romanTime;
