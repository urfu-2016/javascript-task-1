'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    errorChecking(time);
    var partOfTime = time.split(':');
    var hour = getRoman(partOfTime[0]);
    var minute = getRoman(partOfTime[1]);
    time = hour + ":" + minute;

    return time;
}

function errorChecking(time) {
    var partOfTime = time.split(':');
    for (var i = 0; i < partOfTime.length; i++) {
        if (isNaN(parseInt(partOfTime[i])) || parseInt(partOfTime[i]) < 0 || parseInt(partOfTime[0]) > 23 || parseInt(partOfTime[1]) > 59) {
            throw new TypeError('Неверное время');
        }
    }
}

function getRoman(partOfTime) {
    var romanTime = '';
    if (partOfTime >= 50) {
        romanTime += 'L';
        romanTime = getTens(romanTime, partOfTime % 50);
    } else if (partOfTime >= 40 && partOfTime < 50) {
        romanTime += 'XL';
        romanTime = getTens(romanTime, partOfTime % 40);
    } else if (partOfTime < 40) {
        for (var i = 1; i <= partOfTime/10; i++) {
            romanTime += 'X';
        }
        romanTime = getTens(romanTime, partOfTime % 10);
    }
    romanTime = checkNull(partOfTime, romanTime);

    return romanTime;
}

function getTens(romanTime, tens) {
    if (tens === 9) {
        romanTime += 'IX'
    } else if (tens / 5 >= 1) {
        romanTime += 'V';
        for (var i = 0; i < tens % 5; i++) {
            romanTime += 'I';
        }
    } else {
        for (var i = 0; i < tens; i++) {
            romanTime += 'I';
        }
    }

    return romanTime;
}

function checkNull(numb, rom) {
    if (parseInt(numb) === 0)
        return 'N';

    return rom;
}

module.exports = romanTime;
