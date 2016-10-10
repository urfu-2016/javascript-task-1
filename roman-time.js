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
    8: 'IIX',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L'
};

// Разделяем время на часы и минуты
function splitStringTime(stringTime) {

    var splitTimeResult = [];

    for (var i = 0; i < stringTime.length; i++) {

        var splitHour = stringTime.charAt(i);

        splitTimeResult.push(splitHour);

    }

    return splitTimeResult;
}

// Ковертиуем и 'склеиваем' время
function glueTime(dH, uH, dM, uM) {

    var romanResult;

    if ((dH === 0) && (uM === 0)) {

        romanResult = romanNumer[uH] + ":" + romanNumer[dM];

    } else {

        romanResult = romanNumer[dH] + romanNumer[uH] + ":" + romanNumer[dM] + romanNumer[uM];

    }

    return romanResult;
}

function checkTimeOnNaN(hrs, min) {

    var hours = parseInt(hrs, 10);
    var minutes = parseInt(min, 10);

    return isNaN(hours) || isNaN(minutes);

}

function checkTimeOnCorrect(hrs, min) {

    var hours = parseInt(hrs, 10);
    var minutes = parseInt(min, 10);

    return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;

}

function checkTimeOnType(time) {

    return typeof time === 'string';

}

function checkTimeOnUndf(time) {

    return typeof time === undefined;
}

function checkTimeOnNull(time) {

    return time === null;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    var splitDate = time.split(':');
    var getHour = splitDate[0];
    var getMinutes = splitDate[1];

    if (!checkTimeOnType(time) || checkTimeOnUndf(time) || checkTimeOnNaN(getHour, getMinutes)) {

        throw new TypeError('Incorrect time format!');

    } else {

        if (!checkTimeOnCorrect(getHour, getMinutes) || checkTimeOnNull(time)) {

            throw new TypeError('Incorrect time format!');

        }

    }

    var HH = splitStringTime(getHour);
    var dozensHours = parseInt(HH[0] * 10, 10); // Десятки в часах
    var unitHours = parseInt(HH[1]); // Единицы в часах

    var MM = splitStringTime(getMinutes);
    var dozensMinutes = parseInt(MM[0] * 10, 10); // Десятки в минутах
    var unitMinutes = parseInt(MM[1]); // Единицы в минутах

    time = glueTime(dozensHours, unitHours, dozensMinutes, unitMinutes);

    return time;

}

module.exports = romanTime;
