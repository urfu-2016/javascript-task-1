'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

    var splitDate   = time.split(':');
    var getHour     = splitDate[0];
    var getMinutes  = splitDate[1];

    //console.info(getHour);
    var romanNumber = {
        0: 'N',
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'IIX',
        9: 'IX',
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L'
    };

    try{
        if(isNaN(getHour) && isNaN(getMinutes))  throw new TypeError('Неверный форма времени! Строка');
        if(getHour > 23)                         throw new TypeError('Нверный формат времени! Неверное время');
        if((splitDate[0].length + splitDate[1].length) > 4) throw new TypeError('Неверный формат времени! time.length > 4');
        if(getHour === undefined)                throw new TypeError('Неверный формат времени! hh is undefined');
        if(getMinutes === undefined)             throw new TypeError('Неверный формат времени! mm is undefined');

    //Разбиваем отдельно строку на минуты и часы
    function splitStringTime(stringTime){
        var splitTimeResult = [];

        for(var i = 0; i < stringTime.length; i++) {
            var splitHour = stringTime.charAt(i);
            splitTimeResult.push(splitHour);
        }

        return splitTimeResult;
    }

    var HH = splitStringTime(getHour); // Часы
    var dozensHours  = parseInt(HH[0] * 10, 10); //Выделяем десятки в часах *h:mm
    var unitHours = parseInt(HH[1]); //Выделяем единицы в часах h*:mm

    var MM = splitStringTime(getMinutes); // Минуты hh:**
    var dozensMinutes = parseInt(MM[0] * 10, 10); //Выделяем десятки в минутах hh:*m
    var unitMinutes = parseInt(MM[1]); // Выделяем единицы в минутых hh:m*

    //Склеиваем время
    function glueTime(dH, uH, dM, uM ) {

        if((dH == 0 ) && (uM == 0)) {

            var roman =romanNumber[uH] + ":" + romanNumber[dM];
        }
        else {

            var roman = romanNumber[dH] + romanNumber[uH] + ":" + romanNumber[dM] + romanNumber[uM];
        }

        return roman;
    }

    var time = glueTime(dozensHours, unitHours, dozensMinutes, unitMinutes); //Результат

    return time;

    } catch(e) {
            console.log(e);
        }
}

module.exports = romanTime;

