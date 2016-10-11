'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
var switch_time;
new TypeError(["TypeError: Неверное время"]);
function romanTens(switch_time) {
    if (switch_time[0] === '0'){
        switch_time[1] = 'N';
    }
    switch (switch_time[1]){
        case '0' :
            break;
        case '1' :
            switch_time[1] = 'I';
            break;
        case '2' :
            switch_time[1] = 'II';
            break;
        case '3' :
            switch_time[1] = 'III';
            break;
        case '4' :
            switch_time[1] = 'IV';
            break;
        case '5' :
            switch_time[1] = 'V';
            break;
        case '6' :
            switch_time[1] = 'VI';
            break;
        case '7' :
            switch_time[1] = 'VII';
            break;
        case '8' :
            switch_time[1] = 'VIII';
            break;
        case '9' :
            switch_time[1] = 'IX';
            break;
        default: TypeError();
    }

    return switch_time;
}
var hours;
var minutes;
var separator = ':';
var i = 0;
function romanTime(time) {
    try{
        while (time[i] !== separator){
            hours[i] = time[i];
            i++;
        }
        i++;
        while (i  < time.length){
            minutes[i] = time[i];
            i++;
        }
    } catch (e) {
        console.log(e instanceof TypeError);
        console.log(e.message);
    }
    switch (hours[0]){
        case '1' :
            hours[0] = 'X';
            romanTens(hours);
            break;
        case '2' :
            hours[0] = 'XX';
            romanTens(hours);
            break;
        case '0' :
            romanTens(hours);
            break;
        default: TypeError();
    }
    switch (minutes[0]){
        case '1' :
            minutes[0] = 'X';
            romanTens(minutes);
            break;
        case '2' :
            minutes[0] = 'XX';
            romanTens(minutes);
            break;
        case '3' :
            minutes[0] = 'XXX';
            romanTens(minutes);
            break;
        case '4' :
            minutes[0] = 'XL';
            romanTens(minutes);
            break;
        case '5' :
            minutes[0] = 'L';
            romanTens(minutes);
            break;
        case '0' :
            romanTens(minutes);
            break;
        default: TypeError();
    }
    time = hours + ':' + minutes;

    return time;
}

module.exports = romanTime;


