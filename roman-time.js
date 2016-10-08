'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (!checkValidTime(time)) {
        throw new TypeError('Wrong time');
    }

    var first = Number(time.slice(0, 2));
    var second = Number(time.slice(3, 5));

    return getRomanTime(first) + ":" + getRomanTime(second);
}

function getRomanTime(number) {
    if (number === 0) {
        return "N";
    }
    var answer = "";

    var _number = number;
    var c = Math.floor(_number / 10);

    if (c === 5) {
        answer += "L";
    } else {
        for (var i = 0; i < c; i++) {
            answer += "X";
        }
    }
    _number -= c * 10;
    if (_number === 9) {
        answer += "IX";
        return answer;
    }
    if (_number >= 5) {
        answer += "V";
        _number -= 5;
    }

    if (_number === 4) {
        answer += "IV";
        return answer;
    }
    for (var i = 0; i < _number; i++) {
        answer += "I";
    }
    return answer;
}


function checkValidTime(time) {
    if (typeof time !== 'string' || time.length !== 5) {
        return false;
    }
    if (time === '00:00') {
        return true;
    }
    if (time[2] !== ':') {
        return false;
    }
    var first = time.slice(0, 2);
    var second = time.slice(3, 5);


    if (isNaN(first) || isNaN(time.slice(second))) {
        return false;
    }

    if (Number(first) < 0 || Number(first) > 23 || Number(second) < 0 || Number(second) > 59) {
        return false;
    }
    return true;
}

module.exports = romanTime;
