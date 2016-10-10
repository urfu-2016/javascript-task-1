'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function toRomanTime(parseHour,parseMinute) {
    var romanHour = '';
    var romanMinute = '';
    var romanNumerals = {
        "I",
        "IV",
        "V",
        "IX",
        "X",
        "XL",
        "L"
    };
    var arabicNumerals = {
        1,
        4,
        5,
        9,
        10,
        40,
        50
    };
    var position = romanNumerals.length - 1 ;
    if (parseMinute !== 0) {
        while (parseMinute > 0) {
            if (parseMinute >= arabicNumerals[position]) {
                romanHour += romanNumerals[position];
                parseHour -= arabicNumerals[position];
            } 
            --position;
        }
    } else {
        romanMinute = 'N';
    }
    position = romanNumerals.length - 3;
    if (parseHour !== 0) {
        while (parseHour > 0) {
            if (parseHour >= arabicNumerals[position]) {
                romanHour += romanNumerals[position];
                parseHour -= arabicNumerals[position];
            } 
            --position;
        }
    } else {
        romanHour = 'N';
    }

    return romanHour + ':' + romanMinute;
}

function romanTime(time) {
    if (time === undefined || time === null) {
        throw new TypeError();
    }
    var splitTime = time.split(':');
    var parseHour = parseInt(splitTime[0]);
    var parseMinute = parseInt(splitTime[1]);
    if (isNaN(parseHour) || isNaN(parseMinute)) {
        throw new TypeError();
    }
    if (parseHour < 0 || parseHour > 23 || parseMinute < 0 || parseMinute > 59) {
        throw new TypeError();
    }

    return toRomanTime(parseHour,parseMinute);
}

module.exports = romanTime;
