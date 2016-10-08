'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function inRoman(element) {
    var arab = [1,4,5,9,10,40,50];
    var roman = ['I','IV','V','IX','X','XL','L'];
    var elementRom = '';
    var nombElem = arab.length - 1;
    if (element === '00') {
        elementRom = 'N'
    } else {
        while (element > 0) {
            if (element >= arab[nombElem]) {
                elementRom += roman[nombElem];
                element -= arab[nombElem];
            } else {
                nombElem--;
            }
        }
    }

    return elementRom;
}

function check(strEl, intEl, form) {
    if (strEl.length > 2)
        return false;
    if(intEl > form) {
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
 
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    try {
        var arraySplitTyme = time.split(':');
        var hh = parseInt(arraySplitTyme[0], 10);
        var mm = parseInt(arraySplitTyme[1], 10);
		if (!isNaN(hh)) {
            if (!isNaN(mm)) {
                if (check(arraySplitTyme[0], hh, 23)) {
                    if (check(arraySplitTyme[1], mm, 59)) {
                        time = inRoman(arraySplitTyme[0]) + ':';
                        time += inRoman(arraySplitTyme[1]);
                        return time;
                    }
                } 
            }
        }
        return exept();
    } catch (e) {
		return exept();
	}
}

module.exports = romanTime;
