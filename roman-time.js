'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    try {
        var timeArr = [2];
        var hours;
        var minutes;
        var hoursRoman;
        var minutesRoman;

        timeArr = time.split(':', 2);
        hours = parseInt(timeArr[0], 10);
        minutes = parseInt(timeArr[1], 10);

        if (isNaN(hours) || isNaN(minutes) || hours > 23 ||
            hours < 0 || minutes > 59 || minutes < 0) {
            throw new TypeError('TypeError: Неверное время');
        }

        hoursRoman = convertNum(hours);
        minutesRoman = convertNum(minutes);
        time = hoursRoman + ":" + minutesRoman;

    }
    catch (e) {
        console.info('TypeError: Неверное время');
    }

    return time;
}
// Карта соответствия чисел
var accordMap = new Map();
accordMap.set(0, '');
accordMap.set(1, 'I');
accordMap.set(2, 'II');
accordMap.set(3, 'III');
accordMap.set(4, 'IV');
accordMap.set(5, 'V');
accordMap.set(6, 'VI');
accordMap.set(7, 'VII');
accordMap.set(8, 'VIII');
accordMap.set(9, 'IX');
accordMap.set(10, 'X');
accordMap.set(20, 'XX');
accordMap.set(30, 'XXX');
accordMap.set(40, 'XL');
accordMap.set(50, 'L');

function convertNum(num) {
    // остаток от деления (для начала равен самому числу)
    num = parseInt(num, 10);

    if (num === 0) {
        return 'N';
    }

    var dec;
    var unit;

    dec = (parseInt(num / 10)) * 10;
    unit = num % 10;
    var rom = accordMap.get(dec) + accordMap.get(unit);

    return rom;
};


module.exports = romanTime;
