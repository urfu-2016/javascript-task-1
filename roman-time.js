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
    if (timeSplit[0] > 23 || timeSplit[0] < 0) {
        throw new TypeError();
    }
    parseInt(a[0], 10);
    parseInt(a[1], 10);
    if (a[0] === '0' && a[1] === '0') {
        hours = cifri[0];
    } else {
    if (a[0] === '0' && a[1] !== '0') {
        hours = cifrii[a[1]];
    } else {
    if (a[0] !== '0' && a[1] !== '0') {
        hours = cifrii[(a[0])] + cifri[a[1]];
    } else {
        hours = cifrii[a[0]];
    }
    }
    }

    return hours;
}
function roman1(time) {
    var timeSplit = time.split(':');
    var b = timeSplit[1].split('');
    if (timeSplit[0] > 59 || timeSplit[0] < 0) {
        throw new TypeError();
    }
    parseInt(b[0], 10);
    parseInt(b[1], 10);
    if (b[0] === '0' && b[1] === '0') {
        minutes = cifri[0];
    }
    if (b[0] === '0' && b[1] !== '0') {
        minutes = cifrii[b[1]];
    }
    if (b[0] !== '0' && b[1] !== '0') {
        minutes = cifrii[(b[0])] + cifri[b[1]];
    } else {
        minutes = cifrii[b[0]];
    }

    return minutes;
}
function romanTime(time) {
    var timeSplit = time.split(':');
    if (timeSplit[0] === undefined || timeSplit[1] === undefined) {
        throw new TypeError();
    }
    if (isNaN(timeSplit[0]) || isNaN(timeSplit[1])) {
        throw new TypeError();
    }

    return (roman(time) + ':' + roman1(time));
}

module.exports = romanTime;
