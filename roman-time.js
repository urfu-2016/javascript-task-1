'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function arabicToRim(x) {
    // принимает на вход число х - выдает строку в римских цифрах
    var rimValue = '';

    var rimNum =
        {
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

    if (x <= 10) {
        rimValue = rimNum[x];
    } else {
        rimValue = rimNum[x - x % 10] + rimNum[x % 10];
    }

    return rimValue;
}

function checkNullUndefinedNotString(x) {
    // добавила проверку на то, что в строке обязательно есть :
    if ((x === null) || (x === undefined) || (typeof x !== 'string') || (x.indexOf(':') === -1)) {
        throw new TypeError();
    }
}

function romanTime(time) {
    checkNullUndefinedNotString(time);
    var arrayOfHoursAndMinutes = time.split(':');
    var hours = arrayOfHoursAndMinutes[0];
    var minutes = arrayOfHoursAndMinutes[1];
    // добавляю проверку на несколько двоеточий
    if ((hours.length === 2) && (minutes.length === 2) && (arrayOfHoursAndMinutes.length === 2)) {
        // если обе строки состоят из двух символов, то проверяем дальше
        var hoursNum = Number(hours);
        var minutesNum = Number(minutes);
        if (!isNaN(hoursNum) && !isNaN(minutesNum) && (hoursNum !== ' ') && (minutesNum !== ' ') &&
            (hoursNum >= 0) && (Math.floor(hoursNum) === hoursNum) &&
            (Math.floor(minutesNum) === minutesNum) &&
            (hoursNum <= 23) && (minutesNum >= 0) && (minutesNum <= 59)) {
            // если оба числа и в правильнои диапазоне
            // тогда дальше переводим их в римские
            // Римские числа:
            // I - 1, V - 5, X - 10, L - 50, 0- N
            var hoursNewRoman = arabicToRim (hoursNum);
            var minutesNewRoman = arabicToRim (minutesNum);
            time = hoursNewRoman + ':' + minutesNewRoman;
        } else {
            // выдаем TypeError
            throw new TypeError();
        }
    } else {
        // выдаем TypeError, т.к больше двух символов в какой либо части
        throw new TypeError();
    }

    return time;
}
module.exports = romanTime;
