'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var numbersRome = {
    one: 'I',
    two: 'II',
    three: 'III',
    four: 'IV',
    five: 'V',
    six: 'VI',
    seven: 'VII',
    eight: 'VIII',
    nine: 'IX',
    ten: 'X',
    twenty: 'XX',
    thirty: 'XXX',
    forty: 'XL',
    fifty: 'L',
    noll: 'N'
};
var numbersRus = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    noll: 0
};

function checkNun(data) {
    if (isNaN(data) || (data === '') || (data === ' ')) {
        return true;
    }

    return false;

}

function correctMinute(argMinute) {
    if ((argMinute > 59) || (argMinute < 0)) {
        return true;
    }

    return false;

}

function correctHour(argHour) {
    if ((argHour > 23) || (argHour < 0)) {
        return true;
    }

    return false;

}

function uncorrectData(min, hr) {
    if (checkNun(min) || checkNun(hr) || correctHour(hr) || correctMinute(min)) {
        return true;
    }

    return false;

}

function returnHour(currentTime, nameNumbDecade, nameNumbUnit) {
    if (numbersRome[nameNumbDecade] !== 'N') {
        currentTime = String(currentTime + numbersRome[nameNumbDecade]);
    }
    if (numbersRome[nameNumbUnit] !== 'N') {
        currentTime = String(currentTime + numbersRome[nameNumbUnit]);
    }
    if ((numbersRome[nameNumbDecade] === 'N') && (numbersRome[nameNumbUnit] === 'N')) {
        currentTime = 'N';
    }

    return currentTime;

}

function returnMinute(currentTime, nameNumbDecade, nameNumbUnit) {
    if (numbersRome[nameNumbDecade] !== 'N') {
        currentTime = String(currentTime + numbersRome[nameNumbDecade]);
    }
    if (numbersRome[nameNumbUnit] !== 'N') {
        currentTime = currentTime + numbersRome[nameNumbUnit];
    }
    if ((numbersRome[nameNumbDecade] === 'N') && (numbersRome[nameNumbUnit] === 'N')) {
        currentTime = currentTime + 'N';
    }

    return currentTime;

}

function translateToRome(data, currentTime, checkToHourOrMinute) {
    var decade = data - data % 10;
    var unit = data % 10;
    var nameNumbDecade = "";
    var nameNumbUnit = "";
    var numb;
    for (numb in numbersRus) {
        if (numbersRus[numb] === decade) {
            nameNumbDecade = numb;
        }
        if ((numbersRus[numb] === unit) && (numb !== 0)) {
            nameNumbUnit = numb;
        }
    }
    if (checkToHourOrMinute === 'hour') {
        currentTime = returnHour(currentTime, nameNumbDecade, nameNumbUnit);
    } else {
        currentTime = returnMinute(currentTime, nameNumbDecade, nameNumbUnit);
    }

    return currentTime;

}

function romanTime(time) {
    var arrayOfHourAndMinute = time.split(':');
    var hour = arrayOfHourAndMinute[0];
    var minute = arrayOfHourAndMinute[1];

    if ((hour.length !== 2) || (minute.length !== 2) || uncorrectData(minute, hour)) {
        throw new TypeError();
    } else {
        time = '';
        var checkToHourOrMinute;

        // hour

        checkToHourOrMinute = 'hour';
        var nowHour;
        nowHour = translateToRome(hour, time, checkToHourOrMinute);

        // minute

        checkToHourOrMinute = 'minute';
        var nowMinute = translateToRome(minute, time, checkToHourOrMinute);

        time = nowHour + ':' + nowMinute;

        return time;
    }

}

module.exports = romanTime;
