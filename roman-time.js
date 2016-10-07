'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (!isCorrectFormat(time) || time.length !== 5) {
        throw new TypeError('Неверное время');
    }
    var data = time.split(':');
    var hours = parseInt(data[0], 10);
    var minutes = parseInt(data[1], 10);
    time = convertToRoman(hours) + ':' + convertToRoman(minutes);

    return time;

}

function isCorrectTime(hours, minutes) {

    return (hours < 24) && (minutes < 60) && (hours >= 0) && (minutes >= 0);
}

function isCorrectFormat(format) {
    try {
        var data = format.split(':');
        if (data[0].length !== 2 || data[1].length !== 2) {
            return false;
        }
        var hours = parseInt(data[0], 10);
        var minutes = parseInt(data[1], 10);

        return (!isNaN(hours) && !isNaN(minutes) && isCorrectTime(hours, minutes));
    } catch (e) {
        throw new TypeError('Неверное время');
    }
}

function convertToRoman(value) {
    if (value === 0) {
        return 'N';
    }

    var romanNumerals = {
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };

    return getRomanTime(romanNumerals, value);
}

function getRomanTime(romanNumerals, value) {
    var arrayNumbers = Object.keys(romanNumerals).sort(compareNumeric);
    var result = '';
    var index = 0;

    while (value > 0) {
        if (value >= Number(arrayNumbers[index])) {
            value -= arrayNumbers[index];
            result += romanNumerals[arrayNumbers[index]];
        } else if (index !== arrayNumbers.length) {
            index++;
        }
    }

    return result;
}

function compareNumeric(first, second) {
    if (Number(first) < Number(second)) {
        return 1;
    }
    if (Number(first) > Number(second)) {
        return -1;
    }
}
module.exports = romanTime;
