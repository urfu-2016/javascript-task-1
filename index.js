'use strict';

var romanTime = require('./roman-time');

// Выведет 'IX:X'
console.info(romanTime('09:10'));

// Выведет 'N:N'
console.info(romanTime('00:00'));

// Выведет 'XXIII:LIX'
console.info(romanTime('23:59'));

console.info(romanTime('18:48'));

// Выбросится ошибка [TypeError: Неверное время]
console.info(romanTime('24:00'));

console.info(romanTime('123:414'));


console.info(romanTime('17:20'));
