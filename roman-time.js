'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */




function convertUnitsRoman(units) {
    var roman;
    switch (units) {
        case 0:
            roman = "";
            break;
        case 1:
            roman = "I";
            break;
        case 2:
            roman = "II";
            break;
        case 3:
            roman = "III";
            break;
        case 4:
            roman = "IV";
            break;
        case 5:
            roman = "V";
            break;
        case 6:
            roman = "VI";
            break;
        case 7:
            roman = "VII";
            break;
        case 8:
            roman = "VIII";
            break;
        case 9:
            roman = "IX";
            break;
    }
    return roman
}

function convertTensRoman(tens) {
    var roman;
    switch (tens) {
        case 0:
            roman = "";
            break;
        case 1:
            roman = "X";
            break;
        case 2:
            roman = "XX";
            break;
        case 3:
            roman = "XXX";
            break;
        case 4:
            roman = "XL";
            break;
        case 5:
            roman = "L";
            break;
    }
    return roman
}

function romanTime(time) {

    if (!/^([0-2][0-3]|[0-1]\d):[0-5]\d$/.test(time)) {
        throw new TypeError("Неверное время");
    }


    if (/^([0-2][0-3]|[0-1]\d):[0-5]\d$/.test(time)) {
        time = time.replace(/:/, "");
        var splitedTime = time.split("");
        var hourTen = convertTensRoman(parseInt(splitedTime[0]));
        var hourUnits = convertUnitsRoman(parseInt(splitedTime[1]));
        var minuteTen = convertTensRoman(parseInt(splitedTime[2]));
        var minuteUnits = convertUnitsRoman(parseInt(splitedTime[3]));
        if (hourTen + hourUnits == "") {
            hourUnits = "N";
        }
        if (minuteTen + minuteUnits == "") {
            minuteUnits = "N";
        }
        time = hourTen + hourUnits + ":" + minuteTen + minuteUnits;

    }

    return time;

}


module.exports = romanTime;
