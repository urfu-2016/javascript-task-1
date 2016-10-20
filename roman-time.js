'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    try {
        var arab = [1, 4, 5, 9, 10, 40, 50];
        var roman = ['I','IV','V','IX','X','XL','L'];
        var strs = time.split(':');
        var numTime = [parseInt(srs[0], 10), parseInt(srs[1], 10)];
        if (numTime[0].isNaN() || numTime[1].isNaN()) {
          throw TypeError("Неверное время");
        }
        var j = arab.length-1;
        strs[0]="";
        strs[1]="";
        for (var i=0; i<2; i++) {
          if (numTime[i] == 0) {
            strs[i] = 'N';
            continue;
          }
            while (numTime[i]!=0) {
                if (numTime[i] <= arab[j]) {
                    strs[i] += romam[j];
                    numTime[i] -= arab[j];
                }
                else {
                    j--;
                }
            }
        }
    }
    catch (err) {
			console.log(err.name + ':' + err.message)
    }
    time = numTime[0]+':'+numTime[1];
    return time;
}
