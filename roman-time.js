'use strict';

function checkForErrors(time, numbers){
    try {
        parseInt(numbers[0], 10);
        parseInt(numbers[1], 10);
    } catch (e) {
        throw new TypeError('Неверное время');
    }
    if (time.length !== 5 || numbers.length !== 2 || numbers[0].length !== 2 || numbers[1].length !== 2) {
        throw new TypeError('Неверное время');
    }
    else if (parseInt(numbers[0], 10) > 23 || parseInt(numbers[0], 10) < 0) {
        throw new TypeError('Неверное время');
    }
    else if (parseInt(numbers[1], 10) > 59 || parseInt(numbers[1], 10) < 0) {
        throw new TypeError('Неверное время');
    }
}

function parseTime(numbers, finalString, romanianDict, k) {
    var justNumber = parseInt(numbers[k], 10);
    if (justNumber > 50) {
        justNumber -= 50;
        finalString += 'L';
    }
    else if (justNumber > 40) {
        justNumber -= 40;
        finalString += 'IL';
    }
    var amountOfX = (justNumber - justNumber % 10) / 10;
    for (var i = 0; i < amountOfX; i++) {
        finalString += 'X';
    }
    justNumber = justNumber % 10;
    if (justNumber !== 0) {
        finalString += romanianDict[justNumber];
    }
    else {
        finalString += 'N';
    }
    if (k < 1) {
        finalString += ':';
    }
    return finalString

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
        9: 'IX',
        10: 'X'
    };
    var numbers = time.split(':');
    checkForErrors(time, numbers);
    var finalString = '';
    for (var j =0; j < 2; j++) {
        finalString = parseTime(numbers, finalString, romanianDict, j)
    }
    return finalString;
}

module.exports = romanTime;
