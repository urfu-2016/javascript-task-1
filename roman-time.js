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
            throw new TypeError('There are only 24 hours per day !');        	
        }
        throw new TypeError('Expected argument is hh:mm !'); 
    }


function arabToRoman(numArab) {
    var numRoman;
    var firstArab = numArab % 10;
    var secondArab = numArab - firstArab;
    var firstRoman;
    var secondRoman;
    if (numArab === 0) {
        numRoman = 'N';
    }
    else {
        switch (firstArab) {
            case 4:
            firstRoman = 'IV'
            break
            case 9:
            firstRoman = 'IX'
            break
            default:
            firstRoman = decomposeByRoman(firstArab);
        }
        switch (secondArab) {
            case 40:
            secondRoman = 'XL'
            break
            default:
            secondRoman = decomposeByRoman(secondArab);
        }
        numRoman = secondRoman + firstRoman;
    }

    return numRoman;
}

function decomposeByRoman(numArab) {
        var quantityL = Math.floor(numArab / 50);
        var quantityX = Math.floor(((numArab % 50) / 10));
        var quantityV = Math.floor(((numArab % 50) % 10) / 5);
        var quantityI = Math.floor((((numArab % 50) % 10) % 5) / 1);
        var decomposedToRoman = ('L').repeat(quantityL) + ('X').repeat(quantityX) + ('V').repeat(quantityV) + ('I').repeat(quantityI);

        return decomposedToRoman;
}

module.exports = romanTime;
