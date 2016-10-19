'use strict';

/**
  * @param {Number} data – получает на вход число - часы или минуты (например, 3)
  * @returns {String} – римскую версию числа (III)
  */
function returnRomanTime(data) {
    var HNumbers = {
        0: '',
        1: 'X',
        2: 'XX',
        3: 'XXX',
        4: 'XL',
        5: 'L'
    };
        var BNumbers = {
            0: ' ',
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
    return HNumbers[Math.floor(data / 10)] + BNumbers[Math.floor(data % 10)];
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
 + * @param {String} data – часы или минуты (например, 12)
 + * @returns {Number} m - минуты (например, 12)
  */
function ERTime(data) {
    var re = /^\d\d$/;
    if (!re.test(data)) {
        throw new TypeError('Неверное время');
    }
    try {
        return parseInt(data);
    } catch (e) {
        throw new TypeError('Неверное время');
               }

            }

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (typeof time !== 'string' && time.length !== 5) {
        throw new TypeError('Неверное время');
            }
    var startTime = time.split(':');
    var hours = ERTime(startTime[0]);
    var minutes = ERTime(startTime[1]);
    isValidate(hours, minutes);
    time = returnRomanTime(hours) + ":" + returnRomanTime(minutes);
    return time;
}
