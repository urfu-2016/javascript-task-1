'use strict';

function fromArabianToRoman(arabianNumber) {
    var romanNumber = "";

    function tryToAddLettersToRomanNumber(letters, arabianMinValue, arabianMaxValue) {
        if (arabianNumber >= arabianMinValue && arabianNumber <= arabianMaxValue) {
            arabianNumber -= arabianMinValue;
            romanNumber += letters;
        }
    }

    if (arabianNumber === 0) {

        return 'N';
    }
    while (arabianNumber > 0) {
        tryToAddLettersToRomanNumber('L', 50, 60);
        tryToAddLettersToRomanNumber('XL', 40, 49);
        tryToAddLettersToRomanNumber('X', 10, 39);
        tryToAddLettersToRomanNumber('IX', 9, 9);
        tryToAddLettersToRomanNumber('V', 5, 8);
        tryToAddLettersToRomanNumber('IV', 4, 4);
        tryToAddLettersToRomanNumber('I', 1, 3);
    }

    return romanNumber;
}


/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var splittedTime = time.split(':');
    var hours = parseInt(splittedTime[0]);
    var minutes = parseInt(splittedTime[1]);
    if (isNaN(hours) || isNaN(minutes) || hours > 23 || minutes > 59) {
        throw new TypeError();
    }

    return fromArabianToRoman(hours) + ':' + fromArabianToRoman(minutes);
}

module.exports = romanTime;
