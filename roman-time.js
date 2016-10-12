'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var match = time.match(/^(\d{2}):(\d{2})$/);
    if (match === null || Number(match[1]) >= 24 || Number(match[2]) >= 60) {
        throw new TypeError(time + ' is not a valid time format');
    }

    return toRomanNumber(match[1]) + ':' + toRomanNumber(match[2]);
}

function toRomanNumber(decimalDigits) {
    var result = toRomanDigit(Number(decimalDigits[0]), 'X', 'L', 'C') +
        toRomanDigit(Number(decimalDigits[1]), 'I', 'V', 'X');

    return result !== '' ? result : 'N';
}

function toRomanDigit(digit, oneCh, fiveCh, tenCh) {
    if (digit === 0) {
        return '';
    }
    if (digit <= 3) {
        return repeat(oneCh, digit);
    }
    if (digit === 4) {
        return oneCh + fiveCh;
    }
    if (digit <= 8) {
        return fiveCh + repeat(oneCh, digit - 5);
    }
    if (digit === 9) {
        return oneCh + tenCh;
    }
    throw new TypeError(digit + ' is not a valid digit');
}

function repeat(str, count) {
    var result = '';
    for (var i = 0; i < count; i++) {
        result += str;
    }

    return result;
}

module.exports = romanTime;
