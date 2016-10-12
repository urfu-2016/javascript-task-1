'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var array_time = time.split(':');
    var hh = parseInt(array_time[0], 10);
    var mm = parseInt(array_time[1], 10);
	
    // если смогла преобразовать, надо проверить, чтобы часы были от 00 до 23 и минуты 00 до 60
    if (isNaN(hh) || isNaN(mm) || (0 > hh) || (hh > 23) || (0 > mm) || (mm > 60)) {
        return new TypeError ('Неверное время.');
    }

    time = getNumeric(hh) + ':' + getNumeric(mm);	
	
    return time;
}

// возвращает переданное число в римских цифрах
function getNumeric(hh) {
// римские цифры 1 - I ; 5 - V; 10 - X; 50 - L
// по условию задачи 0 - N
    var rim_time = '';
    var k,i;

    if (hh==0) {

        return 'N';
    }

    if ((hh-hh%50) > 0) {
        rim_time = rim_time + 'L';
        hh = hh%50;
    }

    if ((hh - hh%10) === 9 || (hh-hh%10) === 40) {
        rim_time = rim_time + 'XL';
        hh = hh%10;
    } else {
        if ((hh-hh%10) > 0) {
            k = (hh - hh%10)/10;
            for (i=0; i<k; i++) {
                rim_time = rim_time + 'X';
            }
            hh = hh%10;
        }
    }
	
    if ((hh%5) === 4) {
        rim_time = rim_time + 'IX';
    } else {
        if ((hh-hh%5) > 0) {
            rim_time = rim_time + 'V';
            hh = hh%5;
        }

        if (hh%5 > 0) {
            k = hh%5;
            for (i=0; i<k; i++) {
                rim_time = rim_time + 'I';
            }
        }
    }

    return rim_time;
}

module.exports = romanTime;
