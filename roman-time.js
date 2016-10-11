'use strict';

function romanTime(time) {
    checkIsTime(time);
    var arraySplitTime = time.split(':');
    if (arraySplitTime.length !== 2) {
        exept(time);
    }
    if (checkInt(arraySplitTime[0]) || checkInt(arraySplitTime[1])) {
        exept(time);
    }
    time = purseTime(arraySplitTime, time);
    return time;
}


module.exports = romanTime;

function checkIsTime(time) {
    if (time === null || time === undefined || typeof time !== 'string') {
        exept(time);
    }
    if (time.indexOf(':') === (-1)) {
        exept(time);
    }
}

function purseTime(arraySplitTime, time) {
    var hh = parseInt(arraySplitTime[0], 10);
    var mm = parseInt(arraySplitTime[1], 10);
    if (!isNaN(hh) && !(isNaN(mm))) {
        time = bodyTime(arraySplitTime, time, hh, mm);
        return time;
    }
    exept(time);
}

function bodyTime(arraySplitTime, time, hh, mm) {
    if (checkInt(arraySplitTime[0]) || checkInt(arraySplitTime[1])) {
            exept(time);
        }
        if (check(arraySplitTime[0], hh, 23) && check(arraySplitTime[1], mm, 59)) {
            time = inRoman(arraySplitTime[0]) + ':';
            time += inRoman(arraySplitTime[1]);

            return time;
        }
        exept(time);
}

function inRoman(element) {
    var arab = [1, 4, 5, 9, 10, 40, 50];
    var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
    var elementRom = '';
    var nombElem = 6;
    if (element === '00') {
        elementRom = 'N';

        return elementRom;
    }
    while (element > 0) {
        if (element >= arab[nombElem]) {
            elementRom += roman[nombElem];
            element -= arab[nombElem];
        } else {
            nombElem--;
        }
    }

    return elementRom;
}

function checkInt(strElem) {
    for (var i = 0; i < strElem.length; i++) {
        var checkI = strElem.charAt(i);
        if (isNaN(parseInt(checkI, 10))) {
            return true;
        }
    }
    return false;
}

function check(strEl, intEl, form) {
    if (strEl.length > 2) {
        return false;
    }
    if (intEl > form) {
        return false;
    }

    return true;
}

function exept(time) {
    throw new TypeError(time+': Неверное время');
}
