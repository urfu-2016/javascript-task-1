'use strict';

/**
 * @param {int} number - двухразрядное десятичное число
 * @returns {String} - римское число соответствующее number
 */
function convertToRoman(number) {
    var arabic = [1, 4, 5, 9, 10, 40, 50];
    var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    if (number === 0) {
        return 'N';
    }
    var answer = '';
    var i = arabic.length - 1;
    while (number > 0) {
        if (number >= arabic[i]) {
            answer += roman[i];
            number -= arabic[i];
        } else {
            i--;
        }
    }

    return answer;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function convertToRomanTime(time) {
    var intParts = trySplit(time);
    if (intParts === null || !isCorrectTimeParts(intParts) || time.length !== 5) {
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
        var numbers = [parseInt(parts[0]), parseInt(parts[1])];
        if (parts.length === 2 && (!(isNaN(numbers[0]))) && (!(isNaN(numbers[1])))) {
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
    var isCorrectHours = intParts[0] < 24;
    var isCorrectMinutes = intParts[1] < 60;

    return isCorrectHours && isCorrectMinutes;
}

module.exports = convertToRomanTime;
