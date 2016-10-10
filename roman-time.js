'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (isNaN(parseInt(time))) {
        throw new TypeError(['Неверное время']);
    }
    var array = time.split(':');
    var hour = array[0];
    var minutes = array[1];
    if (!(isCorrectHour(hour) && isCorrectMinutes(minutes))) {
        throw new TypeError(['Неверное время']);
    }
    var dictionary = {
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
    hour = getHour(dictionary, hour);
    minutes = getMinutes(dictionary, minutes);
    time = hour + ':' + minutes;

    return time;
}

function isCorrectHour(hour) {
    hour = parseInt(hour);

    return (hour <= 23 && hour >= 0);
}

function isCorrectMinutes(minutes) {
    minutes = parseInt(minutes);

    return (minutes <= 59 && minutes >= 0);
}

function getHour(dictionary, hour) {
    var time;
    if (hour[0] === '0' && hour[1] === '0') {
        time = dictionary[0];
    }
    else {
        if (hour[0] === '0') {
            time = dictionary[hour[1]];
        }
        else {
            if (hour[1] === '0') {
                time = dictionary[hour[0] * 10];
            }
            else {
                time = dictionary[hour[0] * 10] + dictionary[hour[1]];
            }
        }
    }

    return time;
}

function getMinutes(dictionary, minutes) {
    var time;
    if (minutes[0] === '0' && minutes[1] === '0') {
        time = dictionary[0];
    }
    else {
        if (minutes[0] === '0') {
            time = dictionary[minutes[1]];
        }
        else {
            if (minutes[1] === '0') {
                time = dictionary[minutes[0] * 10];
            }
            else {
                time = dictionary[minutes[0] * 10] + dictionary[minutes[1]];
            }
        }
    }

    return time;
}


module.exports = romanTime;
