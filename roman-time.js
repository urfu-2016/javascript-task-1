'use strict';

function romanTime(time) {
    var t = time.split(':');

    if (isNaN(Number(t[0])) || isNaN(Number(t[1])) || t[0] > 23 || t[1] > 59 || t[0] < 0 ||
     t[1] < 0) {
        throw new TypeError('Неверный ввод!');
    }
    else {
        var hh = parseInt(t[0]);
        var mm = parseInt(t[1]);
        var hours = convert(hh);
        var min = convert(mm);
        if (isNaN(hours) ===  false ) { hours = "N"; }
        if (isNaN(min) === false ) { min = "N"; }
        time = hours + ':' + min;
    }

    return time;
}

function convert(num) {
    var lookup = { L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    var roman = '';
    var i;
    for (i in lookup) {
        while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
        }
    }

    return roman;
}

module.exports = romanTime;
