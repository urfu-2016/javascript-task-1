'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var regExTime = /\d\d:\d\d/;
    if (regExTime.test(time)) {
        var splittedTime = time.split(':');
        var hoursArab = splittedTime[0];
        var minutesArab = splittedTime[1];
        if ((hoursArab <= 23) && (minutesArab <= 59)) {
            var hoursRoman = arabToRoman(hoursArab);
            var minutesRoman = arabToRoman(minutesArab);
            var romanedTime = hoursRoman + ':' + minutesRoman;

            return romanedTime;
        }
        throw new TypeError('There are 24 hours per day');
    }
    throw new TypeError('Expected format was hh:mm');
}


function arabToRoman(numArab) {
    var numRoman;
    var firstArab = numArab % 10;
    var secondArab = numArab - firstArab;
    var firstRoman;
    var secondRoman;
    if (numArab === '00') {
        numRoman = 'N';
    } else {
        switch (firstArab) {
            case 4:
                firstRoman = 'IV';
                break;
            case 9:
                firstRoman = 'IX';
                break;
            default:
                firstRoman = decomposeByRoman(firstArab);
        }
        switch (secondArab) {
            case 40:
                secondRoman = 'XL';
                break;
            default:
                secondRoman = decomposeByRoman(secondArab);
        }
        numRoman = secondRoman + firstRoman;
    }

    return numRoman;
}

function decomposeByRoman(numArab) {
    var L = Math.floor(numArab / 50);
    var X = Math.floor(((numArab % 50) / 10));
    var V = Math.floor(((numArab % 50) % 10) / 5);
    var I = Math.floor((((numArab % 50) % 10) % 5) / 1);
    var roman = ('L').repeat(L) + ('X').repeat(X) + ('V').repeat(V) + ('I').repeat(I);

    return roman;
}

module.exports = romanTime;
