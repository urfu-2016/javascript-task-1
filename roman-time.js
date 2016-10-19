'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function checkIsValid(time) {
    if (time === null || time === undefined || time.length < 5){
        throw new TypeError('Ошибка, неверный тип данных!', 'roman-time.js');
    }
}

function getHours(hour) {
    switch (hour){
        case 0:
            return 'N';
        case 1:
            return 'I';
        case 2:
            return 'II';
        case 3:
            return 'III';
        case 4:
            return 'IV';
        case 5:
            return 'V';
        case 6:
            return 'VI';
        case 7:
            return 'VII';
        case 8:
            return 'VII';
        case 9:
            return 'IX';
        case 10:
            return 'X';
    }
}

function getNumber(number) {
    switch (number){
        case '00':
            return 'N';
        case '01':
            return 'I';
        case '02':
            return 'II';
        case '03':
            return 'III';
        case '04':
            return 'IV';
        case '05':
            return 'V';
        case '06':
            return 'VI';
        case '07':
            return 'VII';
        case '08':
            return 'VII';
        case '09':
            return 'IX';
        case '10':
            return 'X';
    }
}


function romanTime(time) {
    checkIsValid(time);

    try {
        var times = time.split(':');
    }
    catch (e) {
        throw new TypeError('Ошибка, неверный тип данных!', 'roman-time.js');
    }

    if (times.length !== 2){
        throw new TypeError('Ошибка, неверный тип данных!', 'roman-time.js');
    }

    if (!(times[0] >= 0 && times[0] <= 23) && (times[1] >= 0 && times[1] <= 59)){
        throw new TypeError('Ошибка, неверный тип данных!', 'roman-time.js');
    }

    var str = '';

    if (times[0]<= 10) {
        str += getNumber(times[0]) + ':';
    }
    else {
        var hour = times[0];
        while (hour / 10 >= 1){
            hour = hour-10;
            str += 'X';
        }
        if (times[0] % 10 > 0) {
            str += getHours(times[0] % 10) + ':';
        }
        else{
            str += ':';
        }
    }

    if (times[1]<=10){
        str += getNumber(times[1]);
    }
    else if (times[1] < 40){
        var minutes = times[1];
        while (minutes / 10 >= 1 ){
            minutes = minutes - 10;
            str += 'X';
        }
        if (times[1] % 10 > 0) {
            str += getHours(times[1] % 10);
        }
    }
    else if (times[1] >= 40 && times[1] < 50){
        str +='XV';
        if (times[1] % 10 > 0) {
            str += getHours(times[1] % 10);
        }
    }
    else if (times[1] >= 50){
        str +='V';
        if (times[1] % 10 > 0) {
            str += getHours(times[1] % 10);
        }
    }

    return str;
}

module.exports = romanTime;
