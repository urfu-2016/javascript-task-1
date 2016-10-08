'use strict';
/**
'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function parse(time) {
    switch (time) {
        case 0:
            return 'N';
            break;
        case 1:
            return 'I';
            break;
        case 4:
            return 'IV';
            break;
        case 5:
            return 'V';
            break;
        case 9:
            return 'IX';
            break;
        case 10:
            return 'X';
            break;
        case 50:
            return 'L';
            break;
    }
}
function getRoman(n ,time){
    var result = ''
    for (var i = 0; i < n; i++) {
        result += parse(time);
    }
    return result;
}
function romanTime(time) {
    try {
        var str =  time.split(':');
        var hours = parseInt(str[0], 10);
        var minutes = parseInt(str[1], 10);
        if (isNaN(hours) || (hours > 23) || (hours < 0) || 
            (minutes > 59) || (minutes < 0)) {
                throw new SyntaxError('Error');
        }
    }
    catch(e) {
        if (e.name === 'ReferenceError') {
            return '[TypeError : Неверное время]';
        }
        return '[' + e.name + ': Неверное время]';
    }
    var resultTime;
    var listH = [parseInt(hours / 10, 10), parseInt(hours % 10 / 5,10),
    parseInt(hours % 10 % 5, 10)];
    var listM = [parseInt(minutes / 50, 10), parseInt(minutes % 50 / 10, 10), 
    parseInt(minutes % 10 / 5,10),parseInt(minutes % 10 % 5, 10)];
    if (listH[0] === 0 && listH[1] === 0 && listH[2] == 0)
        resultTime = parse(0);
    else{
        resultTime = getRoman(listH[0], 10);
        if (listH[1] === 1 && listH[2] == 4) {
            resultTime += parse(9);
        }
        else
        if (listH[1] === 0 && listH[2] == 4) {
            resultTime += parse(4);
        }
        else
            resultTime += getRoman(listH[1], 5) + getRoman(listH[2], 1);
    }
    resultTime += ':';
    if (listM[0] === 0 && listM[1] === 0 && listM[2] === 0) {
    	resultTime += parse(0);
    }
    else{
        resultTime += getRoman(listM[0], 50);
        resultTime += getRoman(listM[1], 10);
        if (listM[2] === 1 && listM[3] === 4) {
            resultTime += parse(9);
        }
        else {
            if (listM[2] === 0 && listM[3] === 4) {
                resultTime += parse(4);
            }
            else {
                resultTime += getRoman(listM[2], 5) + getRoman(listM[3], 1);
            }
        }
    }
    return resultTime;
}

module.exports = romanTime;
