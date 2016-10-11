'use strict';

function checkRange(numbers) {
    if (parseInt(numbers[0], 10) > 23 || parseInt(numbers[0], 10) < 0 ||
        parseInt(numbers[1], 10) > 59 || parseInt(numbers[1], 10) < 0) {
        throw new TypeError('Неверное время');
    }
}

function checkDigit(time) {
    for (var i = 0; i < 5; i++) {
        if (time[i] < '0' || time[i] > '9' && i !== 2) {
            throw new TypeError('Неверное время');
        }
    }
}

function checkForErrors(time) {
    var numbers;
    try {
        numbers = time.split(':');
        parseInt(numbers[0], 10);
        parseInt(numbers[1], 10);
    } catch (e) {
        throw new TypeError('Неверное время');
    }
    checkRange(numbers);
    if (time.length !== 5 || numbers.length !== 2 ||
        numbers[0].length !== 2 || numbers[1].length !== 2) {
        throw new TypeError('Неверное время');
    }
    checkDigit(time);
}

function parseTime(justNumber, finalString, romanianDict) {

    if (justNumber >= 50) {
        justNumber -= 50;
        finalString += 'L';
    } else if (justNumber >= 40) {
        justNumber -= 40;
        finalString += 'XL';
    }
    var amountOfX = (justNumber - justNumber % 10) / 10;
    for (var i = 0; i < amountOfX; i++) {
        finalString += 'X';
    }
    justNumber = justNumber % 10;
    if (justNumber !== 0) {
        finalString += romanianDict[justNumber];
    }

    return finalString;

}
function romanTime(time) {
    var romanianDict = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX'
    };
    checkForErrors(time);
    var numbers = time.split(':');
    var finalString = '';
    for (var j = 0; j < 2; j++) {
        var justNumber = parseInt(numbers[j], 10);
        if (justNumber === 0) {
            finalString += 'N';
        } else {
            finalString = parseTime(justNumber, finalString, romanianDict);
        }
        if (j < 1) {
            finalString += ':';
        }
    }

    return finalString;
}

module.exports = romanTime;
