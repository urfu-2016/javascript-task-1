'use strict';

var convertToRomanTime = require('./roman-time');

// Выведет 'IX:X'
console.info(convertToRomanTime('09:10'));

// Выведет 'N:N'
console.info(convertToRomanTime('00:00'));

// Выведет 'XXIII:LIX'
console.info(convertToRomanTime('23:59'));

// Выбросится ошибка [TypeError: Неверное время]
console.info(convertToRomanTime('24:00'));
