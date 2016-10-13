'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var arrayTime = time.split(':');
    var hh = parseInt(arrayTime[0], 10);
    var mm = parseInt(arrayTime[1], 10);

    // если смогла преобразовать, надо проверить, чтобы часы были от 00 до 23 и минуты 00 до 60
    if (checkRange(hh, mm) === true) {
        return new TypeError ('Неверное время.');
    }

    time = getNumeric(hh) + ':' + getNumeric(mm);

    return time;
}

// если смогла преобразовать, надо проверить, чтобы часы были от 00 до 23 и минуты 00 до 60
function checkRange(hh, mm) {

    return (isNaN(hh) || isNaN(mm) || (hh < 0) || (hh > 23) || (mm < 0) || (mm > 60));
}

// возвращает переданное число в римских цифрах
// римские цифры 1 - I ; 5 - V; 10 - X; 50 - L
// по условию задачи 0 - N
function getNumeric(hh) {
    if (hh === 0) {

        return 'N';
    }

    //arrayTime [0] - rimTime (string), [1] - hh (integer)
    var arrayTime = ["", hh];

    while (arrayTime[1] > 0) {
        arrayTime = onSwitch(arrayTime[0], arrayTime[1]);
    }

    return arrayTime[0];
}

// возвращает переданное число в римских цифрах
// римские цифры 1 - I ; 5 - V; 10 - X; 50 - L
// по условию задачи 0 - N
function onSwitch(rimTime, hh) {

    switch (true) {
        case hh >= 50 :
            rimTime = rimTime + 'L';
            hh = hh - 50;
            break;
        case hh >= 40 :
            rimTime = rimTime + 'XL';
            hh = hh - 40;
            break;
        case hh >= 10 :
            rimTime = rimTime + 'X';
            hh = hh - 10;
            break;
        case hh === 9 :
            rimTime = rimTime + 'IX';
            hh = hh - 9;
            break;
        case hh >= 5 :
            rimTime = rimTime + 'V';
            hh = hh - 5;
            break;
        case hh === 4 :
            rimTime = rimTime + 'IV';
            hh = hh - 4;
            break;
        case hh >= 1 :
            rimTime = rimTime + 'I';
            hh = hh - 1;
            break;

        // no default
    }

    return [rimTime, hh];
}

module.exports = romanTime;
