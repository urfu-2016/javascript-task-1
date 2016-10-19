'use strict';
var numbers = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var romnambers = ['N', 'X', 'XX', 'XXX', 'XL', 'L'];
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
                hours = number[0];
            }
        if (a[0] === 0 && a[1] !== 0) {
                hours = number[a[1]];
            }
        if (a[0] !== 0 && a[1] !== 0) {
                hours = romnambers[(a[0])] + number[a[1]];
            }
        if (a[0] !== 0 && a[1] === 0) {
                hours = romnambers[a[0]];
            }
            return hours;
    }
function roman1(time) {
        var timeSplit = time.split(':');
        var b = timeSplit[1].split('');

            b[0] = parseInt(b[0], 10);
        b[1] = parseInt(b[1], 10);
        if (b[0] === 0 && b[1] === 0) {
                minutes = number[0];
            }
       if (b[0] === 0 && b[1] !== 0) {
                minutes = number[b[1]];
            }
        if (b[0] !== 0 && b[1] !== 0) {
                minutes = romnambers[(b[0])] + number[b[1]];
            }
        if (b[0] !== 0 && b[1] === 0) {
                minutes = romnambers[b[0]];
            }

            return minutes;
    }
function romanTime1(time) {
        var timeSplit = time.split(':');
        var a = timeSplit[0].split('');
        a[0] = parseInt(a[0], 10);
        a[1] = parseInt(a[1], 10);
        if (isNaN(a[0]) || isNaN(a[1])) {
                throw new TypeError();
            }
        if (timeSplit[0] > 23 || timeSplit[0] < 0 || isNaN(timeSplit[0])) {
                throw new TypeError();
            }

            return (1);
}
function romanTime2(time) {
        var timeSplit = time.split(':');
        var b = timeSplit[1].split('');
        b[0] = parseInt(b[0], 10);
        b[1] = parseInt(b[1], 10);
        if (isNaN(b[0]) || isNaN(b[1])) {
                throw new TypeError();
            }
        if (timeSplit[0].length !== 2 || timeSplit[1].length !== 2) {
               throw new TypeError();
            }

           return (1);
    }
function romanTime(time) {
       
           return time;
       var timeSplit = time.split(':');
        romanTime1(time);
        romanTime2(time);
        if (timeSplit[1] > 59 || timeSplit[1] < 0 || isNaN(timeSplit[1])) {
                throw new TypeError();
           }

           return (roman(time) + ':' + roman1(time));
}

module.exports = romanTime;
