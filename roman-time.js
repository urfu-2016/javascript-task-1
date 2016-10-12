'use strict';

function convertToRoman(parsed) {
    if (parsed === 0) {
        return 'N';
    }
    var romanDigits = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    var arabicDigits = [1, 4, 5, 9, 10, 40, 50];
    var result = '';
    var index = arabicDigits.length - 1;
    while (parsed > 0) {
        if (parsed >= arabicDigits[index]) {
            result += romanDigits[index];
            parsed -= arabicDigits[index];
        } else {
            index -= 1;
        }
    }

    return result;
}

function parsePart(part, itemIndex) {
    var parsed = parseInt(part, 10);
    if (part.length !== 2) {
        throw new TypeError();
    }
    if (isNaN(parsed) || parsed < 0 || parsed > (itemIndex === 0 ? 23 : 59)) {
        throw new TypeError();
    }

    return parsed;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (typeof(time) !== 'string') {
        throw new TypeError();
    }
    var parts = time.split(':');
    if (parts.length !== 2) {
        throw new TypeError();
    }
    var result = parts.map(parsePart)
    .map(convertToRoman)
    .join(':');

    return result;
}

module.exports = romanTime;
