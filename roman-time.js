'use strict';

/**
 * @param {int} number - двухразрядное десятичное число
 * @returns {String} - римское число соответствующее number
 */
function convertToRoman(number) {
    var decades = ["", "X", "XX", "XXX", "XL", "L"];
    var units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var numberString = number.toString();
    if (numberString.length > 2) {
        throw new TypeError("Не двухразрядное");
    } else if (numberString.length === 2) {
        return decades[parseInt(numberString[0])] + units[parseInt(numberString[1])];
    } else if (numberString.length === 1 && number !== 0) {
        return units[parseInt(numberString[0])];
    }

    return "N";
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function convertToRomanTime(time) {
    var intParts = trySplit(time);
    if (intParts === null || !isCorrectTimeParts(intParts)) {
        throw new TypeError("Неправильные входные данные");
    }

    return convertToRoman(intParts[0]) + ":" + convertToRoman(intParts[1]);
}

/**
 * @param {String} time - некоторая строка
 * @returns {Array<int> | null} - возвращает массив из двух чисел, если time
 *          является строкой в формате HH:MM, иначе null
 */
function trySplit(time) {
    try {
        var parts = time.split(':');
        var correct = parts.length === 2 && parts[0].length <= 2 && parts[1].length === 2;
        var numbers = [parseInt(parts[0]), parseInt(parts[1])];
        if (parts.length === 2 && !isNaN(numbers[0]) && !isNaN(numbers[1]) && correct) {
            return numbers;
        }

        return null;
    } catch (e) {
        return null;
    }
}


/**
 * @param {Array<int>} intParts - массив чисел длины 2
 * @returns {boolean} - возвращает true, если в intParts верные минуты и часы
 */
function isCorrectTimeParts(intParts) {
    var isCorrectHours = intParts[0] >= 0 && intParts[0] < 24;
    var isCorrectMinutes = intParts[1] >= 0 && intParts[1] < 60;

    return isCorrectHours && isCorrectMinutes;
}

module.exports = convertToRomanTime;
