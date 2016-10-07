'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var ARABIAN_NUMBERS = [50,40,10,9,5,4,1];
    var ROMAN_NUMBERS = ["L", "XL", "X", "IX", "V", "IV", "I"];

    function toRoman(number) {
        if(number == 0)
            return "N";

        var result = '';

        while (number > 0)
        {
            for(var i = 0; i < ARABIAN_NUMBERS.length ; i++)
            {
                if (number >= ARABIAN_NUMBERS[i])
                {
                    number -= ARABIAN_NUMBERS[i];
                    result += ROMAN_NUMBERS[i];
                    break;
                }
            }
        }
        return result;
    }

    var arr = time.split(':');
    if (arr.length != 2 || arr[0].length == 0 || arr[1].length == 0)
        throw new TypeError('Неверное время');

    var hours = parseInt(arr[0]);
    if(hours > 23 || hours < 0)
        throw new TypeError('Неверное время');

    var minutes = parseInt(arr[1]);
    if(minutes > 59 || minutes < 0)
        throw new TypeError('Неверное время');

    return toRoman(hours) + ':' + toRoman(minutes);
}



module.exports = romanTime;
