'use strict';
var cifri = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var cifrii = ['N', 'X', 'XX', 'XXX', 'XL', 'L'];
var hours;
var minutes;

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function roman(time) {
    var timeSplit = time.split(':');
    var a = timeSplit[0].split('');
    a[0] = parseInt(a[0], 10);
    a[1] = parseInt(a[1], 10);
    if (a[0] === 0 && a[1] === 0) {
        hours = cifri[0];
    }
    if (a[0] === 0 && a[1] !== 0) {
        hours = cifri[a[1]];
    }
    if (a[0] !== 0 && a[1] !== 0) {
        hours = cifrii[(a[0])] + cifri[a[1]];
    }
    if (a[0] !== 0 && a[1] === 0) {
        hours = cifrii[a[0]];
    }

    return hours;
}
function roman1(time) {
    var timeSplit = time.split(':');
    var b = timeSplit[1].split('');

    b[0] = parseInt(b[0], 10);
    b[1] = parseInt(b[1], 10);
    if (b[0] === 0 && b[1] === 0) {
        minutes = cifri[0];
    }
    if (b[0] === 0 && b[1] !== 0) {
        minutes = cifri[b[1]];
    }
    if (b[0] !== 0 && b[1] !== 0) {
        minutes = cifrii[(b[0])] + cifri[b[1]];
    }
    if (b[0] !== 0 && b[1] === 0) {
        minutes = cifrii[b[0]];
    }

    return minutes;
}
function romanTime1(time) {
    var timeSplit = time.split(':');
    if (timeSplit[0] > 23 || timeSplit[0] < 0 || isNaN(timeSplit[0])) {
        throw new TypeError();
    }

    return (1);
}
function romanTime2(time) {
    var timeSplit = time.split(':');
    if (timeSplit[0].length !== 2 || timeSplit[1].length !== 2) {
        throw new TypeError();
    }

    return (1);
}
function romanTime(time) {
    var timeSplit = time.split(':');
    romanTime1(time);
    romanTime2(time);
    if (timeSplit[1] > 59 || timeSplit[1] < 0 || isNaN(timeSplit[1])) {
        throw new TypeError();
    }

    return (roman(time) + ':' + roman1(time));
}

module.exports = romanTime;
