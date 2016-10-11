'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (!isTime(time)) {
        throw new TypeError('Неверное время');
    }
    time = time.split(':');
    var hours = parseInt(time[0]);
    var minutes = parseInt(time[1]);
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw new TypeError('Неверное время');
    }
    time = numberToRoman(hours) + ':' + numberToRoman(minutes);

    return time;
}

function isTime(time) {
    var re = /^[0-9]+:[0-9]+$/;

    return re.test(time);
}

function numberToRoman(number) {
    var romanNumber = '';
    var dictOfRomanNumber = {
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };
    var listOfRomanNumber = [50, 40, 10, 9, 5, 4, 1];
    for (var i = 0; i < listOfRomanNumber.length; i++) {
        while (number >= listOfRomanNumber[i]) {
            number -= listOfRomanNumber[i];
            romanNumber += dictOfRomanNumber[listOfRomanNumber[i]];
        }
    }
    if (romanNumber === '') {
        romanNumber = 'N';
    }

    return romanNumber;
}

module.exports = romanTime;
