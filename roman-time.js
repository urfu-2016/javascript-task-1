'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var romanNumber = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII',
                       'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'],
        arabicNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60];
    
    var arr = time.split(':'),
        hour = parseInt(arr[0]),
        minutes = parseInt(arr[1]);
        
    if (isNaN(hour) || hour > 23 || isNaN(minutes)|| minutes >= 60) {
        time = new TypeError('Неверное время');
    } else {
    	var timeHour,
        hourDec,
        hourUnit;
        if (hour <= 10) {
            timeHour = romanNumber[arabicNumber.indexOf(hour)];
        } else {
            hourDec = parseInt(hour / 10) * 10;
            hourUnit = hour % 10;
            timeHour = romanNumber[arabicNumber.indexOf(hourDec)] +
            romanNumber[arabicNumber.indexOf(hourUnit)];
        }

        var timeMinutes,
        minutesDec,
        minutesUnit;
        if (minutes <= 10) {
            timeMinutes = romanNumber[arabicNumber.indexOf(minutes)];
        } else {
            minutesDec = parseInt(minutes / 10) * 10;
            minutesUnit = minutes % 10;
            timeMinutes = romanNumber[arabicNumber.indexOf(minutesDec)] +
            romanNumber[arabicNumber.indexOf(minutesUnit)];
        }
            time = timeHour + ':' + timeMinutes;
        }

    return time;
}

module.exports = romanTime;
