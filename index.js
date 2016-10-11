'use strict';

var romanTime = require('./roman-time');

// Выведет 'IX:X'
console.info(romanTime('23:012'));
/*
// Выведет 'N:N'
console.info(romanTime('00:00'));

// Выведет 'XXIII:LIX'
console.info(romanTime('23:59'));

// Выбросится ошибка [TypeError: Неверное время]
//console.info(romanTime('24:00'));
*//*
console.info('10');
if(romanTime('00:00') === 'N:N')
    console.info('yes');
else console.info('no');
//console.info(romanTime('00:01'));
if(romanTime('00:01') === 'N:I')
    console.info('yes');
else console.info('no');
if(romanTime('00:02') === 'N:II')
    console.info('yes');
else console.info('no');
if(romanTime('00:03') === 'N:III')
    console.info('yes');
else console.info('no');
if(romanTime('00:04') === 'N:IV')
    console.info('yes');
else console.info('no');
if(romanTime('00:05') === 'N:V')
    console.info('yes');
else console.info('no');
if(romanTime('00:06') === 'N:VI')
    console.info('yes');
else console.info('no');
if(romanTime('00:07') === 'N:VII')
    console.info('yes');
else console.info('no');
if(romanTime('00:08') === 'N:VIII')
    console.info('yes');
else console.info('no');
if(romanTime('00:09') === 'N:IX')
    console.info('yes');
else console.info('no');
if(romanTime('00:10') === 'N:X')
    console.info('yes');
else console.info('no');


console.info('20');
if(romanTime('00:11') === 'N:XI')
    console.info('yes');
else console.info('no');
if(romanTime('00:12') === 'N:XII')
    console.info('yes');
else console.info('no');
if(romanTime('00:13') === 'N:XIII')
    console.info('yes');
else console.info('no');
if(romanTime('00:14') === 'N:XIV')
    console.info('yes');
else console.info('no');
if(romanTime('00:15') === 'N:XV')
    console.info('yes');
else console.info('no');
if(romanTime('00:16') === 'N:XVI')
    console.info('yes');
else console.info('no');
if(romanTime('00:17') === 'N:XVII')
    console.info('yes');
else console.info('no');
if(romanTime('00:18') === 'N:XVIII')
    console.info('yes');
else console.info('no');
if(romanTime('00:19') === 'N:XIX')
    console.info('yes');
else console.info('no');
if(romanTime('00:20') === 'N:XX')
    console.info('yes');
else console.info('no');


console.info('30');
if(romanTime('00:21') === 'N:XXI')
    console.info('yes');
else console.info('no');
if(romanTime('00:22') === 'N:XXII')
    console.info('yes');
else console.info('no');
if(romanTime('00:23') === 'N:XXIII')
    console.info('yes');
else console.info('no');
if(romanTime('00:24') === 'N:XXIV')
    console.info('yes');
else console.info('no');
if(romanTime('00:25') === 'N:XXV')
    console.info('yes');
else console.info('no');
if(romanTime('00:26') === 'N:XXVI')
    console.info('yes');
else console.info('no');
if(romanTime('00:27') === 'N:XXVII')
    console.info('yes');
else console.info('no');
if(romanTime('00:28') === 'N:XXVIII')
    console.info('yes');
else console.info('no');
if(romanTime('00:29') === 'N:XXIX')
    console.info('yes');
else console.info('no');
if(romanTime('00:30') === 'N:XXX')
    console.info('yes');
else console.info('no');


console.info('40');
if(romanTime('00:31') === 'N:XXXI')
    console.info('yes');
else console.info('no');
if(romanTime('00:32') === 'N:XXXII')
    console.info('yes');
else console.info('no');
if(romanTime('00:33') === 'N:XXXIII')
    console.info('yes');
else console.info('no');
if(romanTime('00:34') === 'N:XXXIV')
    console.info('yes');
else console.info('no');
if(romanTime('00:35') === 'N:XXXV')
    console.info('yes');
else console.info('no');
if(romanTime('00:36') === 'N:XXXVI')
    console.info('yes');
else console.info('no');
if(romanTime('00:37') === 'N:XXXVII')
    console.info('yes');
else console.info('no');
if(romanTime('00:38') === 'N:XXXVIII')
    console.info('yes');
else console.info('no');
if(romanTime('00:39') === 'N:XXXIX')
    console.info('yes');
else console.info('no');
if(romanTime('00:40') === 'N:XL')
    console.info('yes');
else console.info('no');


console.info('50');
if(romanTime('00:41') === 'N:XLI')
    console.info('yes');
else console.info('no');
if(romanTime('00:42') === 'N:XLII')
    console.info('yes');
else console.info('no');
if(romanTime('00:43') === 'N:XLIII')
    console.info('yes');
else console.info('no');
if(romanTime('00:44') === 'N:XLIV')
    console.info('yes');
else console.info('no');
if(romanTime('00:45') === 'N:XLV')
    console.info('yes');
else console.info('no');
if(romanTime('00:46') === 'N:XLVI')
    console.info('yes');
else console.info('no');
if(romanTime('00:47') === 'N:XLVII')
    console.info('yes');
else console.info('no');
if(romanTime('00:48') === 'N:XLVIII')
    console.info('yes');
else console.info('no');
if(romanTime('00:49') === 'N:XLIX')
    console.info('yes');
else console.info('no');
if(romanTime('00:50') === 'N:L')
    console.info('yes');
else console.info('no');


console.info('60');
if(romanTime('00:51') === 'N:LI')
    console.info('yes');
else console.info('no');
if(romanTime('00:52') === 'N:LII')
    console.info('yes');
else console.info('no');
if(romanTime('00:53') === 'N:LIII')
    console.info('yes');
else console.info('no');
if(romanTime('00:54') === 'N:LIV')
    console.info('yes');
else console.info('no');
if(romanTime('00:55') === 'N:LV')
    console.info('yes');
else console.info('no');
if(romanTime('00:56') === 'N:LVI')
    console.info('yes');
else console.info('no');
if(romanTime('00:57') === 'N:LVII')
    console.info('yes');
else console.info('no');
if(romanTime('00:58') === 'N:LVIII')
    console.info('yes');
else console.info('no');
if(romanTime('00:59') === 'N:LIX')
    console.info('yes');
else console.info('no');

console.info('00');
if(romanTime('00:00') === 'N:N')
    console.info('yes');
else console.info('no');
console.info('01');
if(romanTime('01:51') === 'I:LI')
    console.info('yes');
else console.info('no');
console.info('02');
if(romanTime('02:51') === 'II:LI')
    console.info('yes');
else console.info('no');
console.info('03');
if(romanTime('03:51') === 'III:LI')
    console.info('yes');
else console.info('no');
console.info('04');
if(romanTime('04:51') === 'IV:LI')
    console.info('yes');
else console.info('no');
console.info('05');
if(romanTime('05:51') === 'V:LI')
    console.info('yes');
else console.info('no');
console.info('06');
if(romanTime('06:51') === 'VI:LI')
    console.info('yes');
else console.info('no');
console.info('07');
if(romanTime('07:51') === 'VII:LI')
    console.info('yes');
else console.info('no');
console.info('08');
if(romanTime('08:51') === 'VIII:LI')
    console.info('yes');
else console.info('no');
console.info('09');
if(romanTime('09:51') === 'IX:LI')
    console.info('yes');
else console.info('no');
console.info('10');
if(romanTime('10:51') === 'X:LI')
    console.info('yes');
else console.info('no');
console.info('11');
if(romanTime('11:51') === 'XI:LI')
    console.info('yes');
else console.info('no');
console.info('12');
if(romanTime('12:51') === 'XII:LI')
    console.info('yes');
else console.info('no');
console.info('13');
if(romanTime('13:51') === 'XIII:LI')
    console.info('yes');
else console.info('no');
console.info('14');
if(romanTime('14:51') === 'XIV:LI')
    console.info('yes');
else console.info('no');
console.info('15');
if(romanTime('15:51') === 'XV:LI')
    console.info('yes');
else console.info('no');
console.info('16');
if(romanTime('16:51') === 'XVI:LI')
    console.info('yes');
else console.info('no');
console.info('17');
if(romanTime('17:51') === 'XVII:LI')
    console.info('yes');
else console.info('no');
console.info('18');
if(romanTime('18:51') === 'XVIII:LI')
    console.info('yes');
else console.info('no');
console.info('19');
if(romanTime('19:51') === 'XIX:LI')
    console.info('yes');
else console.info('no');
console.info('20');
if(romanTime('20:51') === 'XX:LI')
    console.info('yes');
else console.info('no');
console.info('21');
if(romanTime('21:51') === 'XXI:LI')
    console.info('yes');
else console.info('no');
console.info('22');
if(romanTime('22:51') === 'XXII:LI')
    console.info('yes');
else console.info('no');
console.info('23');
if(romanTime('23:51') === 'XXIII:LI')
    console.info('yes');
else console.info('no');*/

