'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    if (!/^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/.test(time)) {
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

    var arrNumber = [1, 4, 5, 9, 10, 40, 50];
    var rimNumber = ["I", "IV", "V", "IX", "X", "XL", "L"];
    var answer = "";

    var i = arrNumber.length - 1;
    while (number > 0) {
        if (number >= arrNumber[i]) {
            answer += rimNumber[i];
            number -= arrNumber[i];
        } else {
            i--;
        }
    }

    return answer;
}

module.exports = romanTime;
