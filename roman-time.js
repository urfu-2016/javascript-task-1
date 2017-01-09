'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var hours = time.slice(0, 2);
    var minutes = time.slice(3, 5);

    hours = checkNumber(hours, true);
    minutes = checkNumber(minutes, false);

    time = hours + ':' + minutes;

    return time;
}

function checkNumber(str, isHours) {
    if (!isNaN(parseInt(str))) {
        return convertNumber(str, isHours);
    }

    throwError();
}

function convertNumber(num, isHours) {
    if (num === '00') {
        num = 'N';

        return num;
    }

    var decade = Number(num.slice(0, 1));
    var one = Number(num.slice(1, 2));

    if ((decade > 5) || (isHours && ((decade === 2 && one > 3) || decade > 2))) {
        throwError();
    }

    num = '';

    num = convertDecade(decade, num);
    num = convertOne(one, num);

    return num;
}

function convertDecade(decade, num) {
    if (decade < 4) {
        for (var i = 0; i < decade; i++) {
            num += 'X';
        }
    } else if (decade === 4) {
        num += 'XL';
    } else {
        num += 'L';
    }

    return num;
}

function convertOne(one, num) {
    if (one < 4) {
        for (var i = 0; i < one; i++) {
            num += 'I';
        }
    } else if (one === 4) {
        num += 'IV';
    } else if (one < 9) {
        num += 'V';
        for (var k = 0; k < (num - 5); k++) {
            num += 'I';
        }
    } else {
        num += 'IX';
    }

    return num;
}

function throwError() {
    throw new TypeError('Введите корректный формат времени');
}

module.exports = romanTime;
