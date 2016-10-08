'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (checkSpecialChars(time)) {
        throw new TypeError('Неверное время');
    }
    var timeParts = time.split(':');
    if (checkTime(timeParts)) {
        throw new TypeError('Неверное время');
    }

    time = getPartsToTime(timeParts);

    return time;
}

function getPartsToTime(parts) {
    var hours = 'N';
    if (parseInt(parts[0]) !== 0) {
        hours = romanNumber(parseInt(parts[0]));
    }

    var minutes = 'N';
    if (parseInt(parts[1]) !== 0) {
        minutes = romanNumber(parseInt(parts[1]));
    }

    return hours + ':' + minutes;
}

function romanNumber(number) {

    var numberOfDecade = getRomanDecades(number);
    var numberOfUnits = getRomanUnits(number % 10);

    return numberOfDecade + numberOfUnits;
}

function getRomanDecades(decades) {
    var numberOfFifty = parseInt(decades / 50);
    var numberOfDecadeRome = '';
    for (var i = 0; i < numberOfFifty; i++) {
        numberOfDecadeRome += 'L';
    }
    var moduloOfFifty = decades % 50;
    var numberOfDecade = 0;

    if (moduloOfFifty > 39 && moduloOfFifty < 50) {
        numberOfDecadeRome += 'XL';
    } else {
        numberOfDecade = parseInt(moduloOfFifty / 10);
    }

    for (var k = 0; k < numberOfDecade; k++) {
        numberOfDecadeRome += 'X';
    }

    return numberOfDecadeRome;
}

function getRomanUnits(units) {
    var moduloOfFive = 0;
    var romanNumberUnits = '';

    switch (units) {
        case 9:
            romanNumberUnits = 'IX';
            break;
        case 4:
            romanNumberUnits = 'IV';
            break;
        default:
            if (units > 4) {
                romanNumberUnits = 'V';
                moduloOfFive = units - 5;
            } else {
                moduloOfFive = units;
            }
    }

    for (var j = 0; j < moduloOfFive; j++) {
        romanNumberUnits += 'I';
    }

    return romanNumberUnits;
}

function checkTime(timeParts) {
    var isHour = parseInt(timeParts[0]) > 23;
    var isMinute = parseInt(timeParts[1]) > 59;

    return (isHour || isMinute);
}


function checkSpecialChars(time) {
    return (time === null || time === undefined || time.length !== 5 ||
        time.search(/\d{2}:\d{2}/) < 0);
}

module.exports = romanTime;
