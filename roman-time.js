'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    var hour = ['X', 'XX', 'XXX', 'XL', 'L'];
    var minute = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

    //проверка на лишние символы
    if ((isNaN(parseInt(time[0], 10)) === true) || (isNaN(parseInt(time[1], 10)) === true) || (isNaN(parseInt(time[3], 10)) === true) || (isNaN(parseInt(time[4], 10)) === true)) {
        console.info(parseInt(time.slice(3, 5)));
        throw new TypeError;
    }

    else {

        //проверка на допустимые значения
        if ((time.length === 5) && (parseInt(time.slice(0, 2)) < 24) && (parseInt(time.slice(3, 5)) < 60)) {

            var pattern = '';

            var firstHour = parseInt(time[0], 10);

            if (firstHour === 0)
            {

                pattern = 'N';

                var secondHour = parseInt(time[1], 10);

                if (secondHour != 0)
                {
                    pattern = minute[secondHour - 1];
                }
            }
            else {

                pattern = hour[firstHour - 1];

                var secondHour = parseInt(time[1], 10);

                if (secondHour != 0)
                {
                    pattern += minute[secondHour - 1];
                }

            }

            pattern = pattern + ':';

            var firstMinute = parseInt(time[3], 10);

            if (firstMinute === 0) {

                pattern += 'N';

                var secondMinute = parseInt(time[4], 10);

                if (secondMinute != 0)
                {
                    pattern += minute[secondMinute - 1];
                }
            }

            else {

                pattern += hour[firstMinute - 1];

                var secondMinute = parseInt(time[4], 10);
                if (secondMinute != 0) {
                    pattern += minute[secondMinute - 1];
                }
            }

            time = pattern;
        }

        else
             {
            throw new TypeError;
             }

    }

    return time;
}

module.exports = romanTime;

