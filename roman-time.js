'use strict';

/**
 * @param {String} num– любое положительное число
 * @returns {String} – число num в римском формате
 */
function romanize (num) {
    if (+num  == 0)
        return "N";
    if (!+num)
        return false;

    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var timeError = new TypeError('Неверное время');
    var splitedTime = time.split(":");
    if (splitedTime.length != 2 || 
        +splitedTime[0] > 23 ||
         +splitedTime[0] < 0 ||
         +splitedTime[1] > 59 ||
         +splitedTime[1] < 0 )
        throw timeError;
    var romanAray = []
    for (var i=0; i<2; i++)
    {
        var romanized = romanize(splitedTime[i]);
        if (!romanized)
        {
            throw timeError;
        }
        romanAray.push(romanized);
    }    
    time = romanAray.join(":")
    return time;
}


module.exports = romanTime;
