'use strict';

function checkLength(hours, minutes) {
    var checkMore = hours > 23 || minutes > 59;
    var checkMin = hours < 0 || minutes < 0;

    return checkMin || checkMore;
}

function checkIsNaNOrNull(hours, minutes) {
    var checkNaN = (isNaN(hours) || isNaN(minutes));
    var checkNull = (hours === null || minutes === null);

    return checkNaN || checkNull;
}

function check(hours, minutes) {
    if (checkLength(hours, minutes) || checkIsNaNOrNull(hours, minutes)) {
        throw new TypeError('Incorrect time');
    }

    return true;
}

function timeTranslator(time, arrMinutes, arrHours) {
    var first = arrHours[parseInt(time / 10)];
    var second = arrMinutes[parseInt(time % 10)];
    if (first === 'N' && second !== 'N') {

        return second;
    }
    if (time === 0) {

        return 'N';
    }
    var newTime = first + second;

    return newTime;
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var arrTime = time.split(':');
    var hours = Number(arrTime[0]);
    var minutes = Number(arrTime[1]);
    if (arrTime[0].length < 2 || arrTime[1].length < 2) {
        throw new TypeError('Incorrect time');
    }
    check(hours, minutes);
    var arrMinutes = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var arrHours = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];
    var romanHours = timeTranslator(hours, arrMinutes, arrHours);
    var romanMinutes = timeTranslator(minutes, arrMinutes, arrHours);
    time = romanHours + ':' + romanMinutes;

    return time;
}

module.exports = romanTime;
