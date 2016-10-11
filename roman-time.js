'use strict';

function romanTime(time) {
    if (checkCorrectTime(time.split(''))) {
        var splitTime = time.split(':');
        time = conversionTime(splitTime);
    }

    return time;
}

function checkCorrectTime(splitTime) {
    var hours = parseInt(splitTime[0] + splitTime[1], 10);
    var mins = parseInt(splitTime[3] + splitTime[4], 10);
    if (!isCorrectTime(splitTime) || splitTime.length !== 5) {
        throw new TypeError('Неверный формат времени (HH:MM)', 'roman-time.js');
    }
    if (isNaN(hours) || isNaN(mins) || isCorrectRange(hours, mins)) {
        throw new TypeError('Неверный формат времени (HH:MM)', 'roman-time.js');
    }

    return true;
}

function isCorrectRange(hours, mins) {
    if (hours > 23 || mins > 59 || hours < 0 || mins < 0) {

        return true;
    }

    return false;
}

function conversionTime(splitTime) {
    var hours = parseInt(splitTime[0], 10);
    var mins = parseInt(splitTime[1], 10);
    var time = [];
    var decs = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var nums = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    time[0] = decs[parseInt((hours / 10), 10)];
    time[1] = nums[hours % 10];
    time[3] = decs[parseInt((mins / 10), 10)];
    time[4] = nums[mins % 10];
    if (hours === 0) {
        time[0] = 'N';
    }
    if (mins === 0) {
        time[3] = 'N';
    }
    time[2] = ':';

    return time.join('');
}

function isCorrectTime(splitTime) {
    for (var i = 0; i < splitTime.length; i++) {
        if (isNaN(parseInt(splitTime[i])) && i !== 2) {

            return false;
        }
    }
    if (splitTime[2] !== ':') {

        return false;
    }

    return true;
}

module.exports = romanTime;
