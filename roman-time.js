'use strict';

function romanTime(time) {
    if (typeof time !== 'string') {
        return exept();
    }
    var arraySplitTyme = time.split(':');
    if (arraySplitTyme.length > 2) {
        return exept();
    }
    var hh = parseInt(arraySplitTyme[0], 10);
    var mm = parseInt(arraySplitTyme[1], 10);
    if (!isNaN(hh) && !(isNaN(mm))) {
        if (check(arraySplitTyme[0], hh, 23) && check(arraySplitTyme[1], mm, 59)) {
            time = inRoman(arraySplitTyme[0]) + ':';
            time += inRoman(arraySplitTyme[1]);

            return time;
        }
    }

    return exept();
}


module.exports = romanTime;

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

function check(strEl, intEl, form) {
    if (strEl.length > 2) {
        return false;
    }
    if (intEl > form) {
        return false;
    }

    return true;
}

function exept() {
    try {
        throw new TypeError('TypeError: Неверное время');
    } catch (e) {
        return e.message;
    }
}
