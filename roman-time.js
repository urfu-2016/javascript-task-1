'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    try {
        var time2 = String(time);
				time = '';
        var h = 0;
        var i = 0;
        while (time2[i] !== ':') {
            h += time2[i];
            i++;
        }
        var m = 0;
        for (++i; i<time2.length; i++) {
            m += time2[i];
        }
        h = Number(h);
		    if (h==NaN || h>23 || h<0) {
            throw new TypeError('Неверное время');
        }
        m = Number(m);
        if (m==NaN || m>59 || m<0) {
            throw new TypeError('Неверное время');
        }
        h = to_roman(h);
        m = to_roman(m);
        time = h + ':' + m;
    }
	catch (err) {
			console.log(err.name + ':' + err.message)
	}
	return time;
}

function to_roman (num) {
    var res = '';
    if (num==0) {
        return 'N';
    }
    if (num>=50) { //50-59
        num -= 50;
        res = 'L';
    }
    else if (num>=10) { //10-49
        var tens = (num - num%10)/10;
        for (var j=0; j<tens; j++) {
            res += 'X';
        }
        num -= tens*10;
    }// only <10
    if (num>=5) {
        if (num==9) {
            res += 'IX';
            num -= 9;
        }
        else {
            res += 'V';
            num -= 5;
        }
    }
    else if (num==4) {
        res += 'IV';
        num -= 4;
    } // only 123
    for (var j=0; j<num; j++) {
        res +='I';
    }
    return res;
}
module.exports = romanTime;
