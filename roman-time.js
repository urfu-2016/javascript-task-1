'use strict';

/**
 * @param {Number} n – получает на вход число (например, 3)
 * @returns {Boolean} – верно ли что число целое (true)
 */
function isInt(n) {
    return (Number(n) === n && n % 1 === 0);
}

/**
 * @param {Number} data – получает на вход число - часы или минуты (например, 3)
 * @returns {String} – римскую версию числа (III)
 */
function returnRomanTime(data) {
    var higherNumbers = {
        0: '',
        1: 'X',
        2: 'XX',
        3: 'XXX',
        4: 'XL',
        5: 'L'
    };
    var belowNumbers = {
        0: '',
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX'
    };
    if (data === 0) {
        return "N";
    }

    return higherNumbers[Math.floor(data / 10)] + belowNumbers[Math.floor(data % 10)];
}

/**
 * @param {Number} h – часы (например, 12)
 * @param {Number} m - минуты (например, 12)
 */
function isValidate(h, m) {
    if (h < 0 || h > 23 || m < 0 || m > 59) {
        throw new TypeError('Неверное время');
    }
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var startTime = time.split(':');
    var hours = Number(startTime[0]);
    var minutes = Number(startTime[1]);

    if (!isInt(hours) || !isInt(minutes)) {
        throw new TypeError('Неверное время');
    }
    isValidate(hours, minutes);

    time = returnRomanTime(hours) + ":" + returnRomanTime(minutes);

    return time;
}

module.exports = romanTime;
