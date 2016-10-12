'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    checkInput(time);
    var hours = time.split(':')[0];
    var minutes = time.split(':')[1];
    if (hours > 23 || minutes > 59) {
        throw new TypeError();
    }
    time = setRomanNumerals(hours);
    time += ' : ' + setRomanNumerals(minutes);

    return time;
}


function checkInput(time) {
    if (!time) {
        throw new TypeError();
    }
    var regLetter = /[^0-9:]/;
    if (time.search(regLetter) !== -1) {
        throw new TypeError();
    }
    if (time.length > 5) {
        throw new TypeError();
    }
}


function setRomanNumerals19(number) {
    var result = ''
    if (number === '1' || number === '2'|| number === '3') {
        for (var i = 0; i < Number(number) ; i++) {
            result += 'I';
        }
    }
    if (number==='4') {
        result += 'IV';
    }
    if (number==='5' || number==='6'|| number==='7'|| number==='8') {
        result += 'V';
        for (var i = 0; i < Number(number%5) ; i++) {
            result += 'I';
        }
    }
    if (number==='9') {
        result += 'IX';
    }

    return result;
}


function setRomanNumerals(number) {
    var result = ';'
    if (number<10) {
        setRomanNumerals19(number);
    }
    if (number>=10 && number<=19) {
        result += 'X' + setRomanNumerals19(number[1]);
    }
    if (number>=20 && number<=29) {
        result += 'XX' + setRomanNumerals19(number[1]);
    }
    if (number>=30 && number<=39) {
        result += 'XXX' + setRomanNumerals19(number[1]);
    }
    if (number>=40 && number<=49) {
        result += 'XL' + setRomanNumerals19(number[1]);
    }
    if (number>=50 && number<=59) {
        result += 'L' + setRomanNumerals19(number[1]);
    }

    return result;
}


module.exports = romanTime;
