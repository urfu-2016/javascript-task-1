'use strict';

var romanNumer = {
    0: 'N',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L'
};

// Выделяем десятки и единицы
function convertTime(time) {

    var dozens = Math.floor(time / 10);
    var unit = time % 10;

    if (dozens === 0) {

        return romanNumer[unit];

    } else if (unit === 0) {

        return romanNumer[dozens * 10];

    }

    return romanNumer[dozens * 10] + romanNumer[unit];
}

function checkNaN(hrs, min) {

    var hours = parseInt(hrs, 10);
    var minutes = parseInt(min, 10);

    return isNaN(hours) || isNaN(minutes);

}

function checkRegExp(time) {

    var regExp = /^([0-1]\d?[0-9]|2[0-3])(:[0-5][0-9])$/;

    return regExp.test(time);

}

function checkType(time) {

    return typeof time === 'string';

}

function checkNullUndf(time) {

    if (time === null || time === undefined) {

        return true;

    }

    return false;

}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    var splitDate = time.split(':');
    var getHour = parseInt(splitDate[0], 10);
    var getMin = parseInt(splitDate[1], 10);

    if (!checkType(time) || checkNullUndf(time) || checkNaN(getHour, getMin)) {

        throw new TypeError('Incorrect time format!');

    } else if (!checkRegExp(time)) {

        throw new TypeError('Incorrect time format!');

    }

    var HH = convertTime(getHour);
    var MM = convertTime(getMin);

    time = HH + ':' + MM;

    return time;

}

module.exports = romanTime;
