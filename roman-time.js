'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    var hoursAndMinutes = time.split(':');
    var hours = parseInt(hoursAndMinutes[0]);
    var minutes = parseInt(hoursAndMinutes[1]);
    if (!checkTime(time,hours,minutes)) {
        throw new TypeError()
    };
    return (createNewString(hours)) + ':' +
           (createNewString(minutes));
}

function createNewString(number) {
  var decimal = {
        '0': '',
        '1': 'I',
        '2': 'II',
        '3': 'III',
        '4': 'IV',
        '5': 'V',
        '6': 'VI',
        '7': 'VII',
        '8': 'VIII',
        '9': 'IX'
  };
  var tens = {
        '0': '',
        '1': 'X',
        '2': 'XX',
        '3': 'XXX',
        '4': 'XL',
        '5': 'L',
        '6': 'LX'
  };
    return number === 0 ? 'N' : tens[Math.floor(number / 10)] + decimal[number % 10]
}

function checkTime(time, hours, minutes) {
    var reTime = /\d\d[:]\d\d/;
    return (reTime.test(time) && (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60));
}

module.exports = romanTime;