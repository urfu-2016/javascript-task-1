'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    try {
        time = time.split(':');
        if (Number(time[0]) > -1 && Number(time[0]) < 24 && Number(time[1]) > -1 && Number(time[1]) < 60) {
            if (Number(time[0]) === 0) {
                time[0] = 'N';
            } else {
                time[0] = getRomeHours(time[0]);
            }
            if (Number(time[1]) === 0) {
                time[1] = 'N';
            } else {
                time[1] = getRomeMinutes(time[1]);
            }
            time = time[0] + ':' + time[1];
            return time;

        } else {
            return 'Неверное время';
        }
    } catch (e) {
        return e.message;
    }
}

function getRomeHours(hours) {
    var romeHours = '';
    for (var i = 0; i < Math.floor(hours / 10); i++) {
        romeHours += 'X';
    }
    romeHours += getUnits(hours);
    return romeHours;

}

function getRomeMinutes(minutes) {
    var romeMinutes = '';
    if (minutes < 40) {
        for (var i = 0; i < Math.floor(minutes / 10); i++) {
            romeMinutes += 'X';
        }
    } else if (Math.floor(minutes / 10) === 4) {
        romeMinutes += 'XL';
    } else {
        romeMinutes += 'L';
    }
    romeMinutes += getUnits(minutes);
    return romeMinutes;

}

function getUnits(time) {
    var unit = '';
    if (time % 10 < 4) {
        for (var i = 0; i < time % 10; i++){
            unit += 'I';
        }
        return unit;

    } else if (time % 10 === 4) {
        unit += 'IV';
        return unit;
    } else if (time % 10 < 9) {
        unit += 'V';
        for (var k = 0; k < (time % 10 - 5); k++) {
            unit += 'I';
        }
        return unit;

    }
    unit += 'IX';
    return unit;

}

module.exports = romanTime;
