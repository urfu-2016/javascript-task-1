'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    var hours = parseInt((time.split(':', 2))[0], 10);
    var minutes = parseInt((time.split(':', 2))[1], 10);

    if (isNaN(hours) || isNaN(minutes) || hours > 23 ||
        hours < 0 || minutes > 59 || minutes < 0) {
        throw new TypeError('Неверное время');
    }
    else {
        var hoursRom = convertNum(hours);
        var minutesRom = convertNum(minutes);
        time = hoursRom + ":" + minutesRom; }

    return time;
}

function convertNum(num) {
    // Карта соответствия чисел
    var accordMap = {
        0: '',
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
        50: 'L',
    };

    // остаток от деления (для начала равен самому числу)
    num = parseInt(num, 10);

    if (num === 0) {
        return 'N';
    }

    var dec;
    var unit;
    var rom;
    dec = (parseInt(num / 10)) * 10;
    unit = num % 10;
    rom = accordMap[dec] + accordMap[unit];

    return rom;
}

module.exports = romanTime;
