'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var arrayTime = time.split(':');
    var hh = parseInt(arrayTime[0], 10);
    var mm = parseInt(arrayTime[1], 10);

    // если смогла преобразовать, надо проверить, чтобы часы были от 00 до 23 и минуты 00 до 60
    if (isNaN(hh) || isNaN(mm) || (hh < 0) || (hh > 23) || (mm < 0) || (mm > 60)) {
        return new TypeError ('Неверное время.');
    }

    time = getNumeric(hh) + ':' + getNumeric(mm);

    return time;
}

// возвращает переданное число в римских цифрах
function getNumeric(hh) {
// римские цифры 1 - I ; 5 - V; 10 - X; 50 - L
// по условию задачи 0 - N
    var rimTime = '';
    var k, i;

    if (hh === 0) {

        return 'N';
    }

    if ((hh - hh % 50) > 0) {
        rimTime = rimTime + 'L';
        hh = hh % 50;
    }

    if ((hh - hh % 10) === 9 || (hh - hh % 10) === 40) {
        rimTime = rimTime + 'XL';
        hh = hh % 10;
    } else {
        if ((hh - hh % 10) > 0) {
            k = (hh - hh % 10) / 10;
            for (i = 0; i < k; i++) {
                rimTime = rimTime + 'X';
            }
            hh = hh % 10;
        }
    }
	
    if ((hh % 5) === 4) {
        rimTime = rimTime + 'IX';
    } else {
        if ((hh - hh % 5) > 0) {
            rimTime = rimTime + 'V';
            hh = hh % 5;
        }

        if (hh % 5 > 0) {
            k = hh % 5;
            for (i = 0; i < k; i++) {
                rimTime = rimTime + 'I';
            }
        }
    }

    return rimTime;
}

module.exports = romanTime;
