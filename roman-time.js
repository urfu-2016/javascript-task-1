'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    if (typeof(time) !== 'string') {
        throw new TypeError('Введены неверные данные');
    }

    function arabToRoman(number) {
        let arab = [1, 4, 5, 9, 10, 40, 50];
        let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
        let result = '';

        for (let i = 6; number > 0;) {
            if (number >= arab[i]) {
                result += roman[i];
                number -= arab[i];
                i = 6;
            }
            i--;
        }

        return result;
    }

    let strArr = time.split(':').slice(0, 2);
    if (strArr.length > 2) {
        throw new TypeError('Введены неверные данные');
    }
    let parseArr = strArr.map(function (item) {
        if ((strArr[0] >= 0 && strArr[0] <= 23) && (strArr[1] >= 0 && strArr[1] <= 59)) {
            return parseInt(item);
        }
        throw new TypeError('Введены неверные данные');
    });

    let result = parseArr.map(function (item) {
        if (item === 0) {
            return 'N';
        }

        return arabToRoman(item);
    });

    return result.join(':');
}

module.exports = romanTime;
