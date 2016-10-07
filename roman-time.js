'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var arabianNumbers = [50,40,10,9,5,4,1];
    var romanNumbers = ["L", "XL", "X", "IX", "V", "IV", "I"];

    function toRoman(number) {
        if(number == 0)
            return "N";

        var result = '';

        while (number > 0)
        {
            for(var i = 0; i < arabianNumbers.length ; i++)
            {
                if (number >= arabianNumbers[i])
                {
                    number -= arabianNumbers[i];
                    result += romanNumbers[i];
                    break;
                }
            }
        }
        return result;
    }

    var arr = time.split(':');
    if (arr.length != 2 || arr[0].length != 2 || arr[1].length != 2)
        throw new TypeError('Неверное время');

    var hours = parseInt(arr[0], 10);
    if(hours > 23 || hours < 0)
        throw new TypeError('Неверное время');

    var minutes = parseInt(arr[1], 10);
    if(minutes > 59 || minutes < 0)
        throw new TypeError('Неверное время');

    return toRoman(hours) + ':' + toRoman(minutes);
}



module.exports = romanTime;
