'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var timeSplit =time.split(':'); 
    if (timeSplit[0] > 23 || timeSplit[0] < 0 || timeSplit[1] > 59 || timeSplit[1] < 0 ){throw new TypeError; }
    if (isNaN(timeSplit[0]) || isNaN(timeSplit[1])){throw new TypeError; }
    if (timeSplit[0] == NaN || timeSplit[0] === undefined || timeSplit[1] == NaN || timeSplit[1] === undefined ){throw new TypeError; }
    var cifri = ['N','I','II','III','IV','V','VI','VII','VIII','IX']; 
    var cifrii = ['N','X','XX','XXX','XL','L']; 
    var a = timeSplit[0].split(''); 
    var b = timeSplit[1].split('');  
    parseInt(a[0],10); 
    parseInt(a[1],10); 
    parseInt(b[0],10); 
    parseInt(b[1],10); 
    if (a[0] == 0 && a[1] == 0){var hours = cifri[0]; }
    if (a[0] == 0 && a[1] != 0){hours = cifri[a[1]]; }
    if (a[0] != 0 && a[1] != 0){hours = cifrii[(a[0])] + cifri[a[1]]; }
    if (a[0] != 0 && a[1] == 0){hours = cifrii[a[0]]; }
    if (b[0] == 0 && b[1] == 0){var minutes = cifri[0]; }
    if(b[0] == 0 && b[1] != 0){minutes = cifri[b[1]]; }
    if(b[0] != 0 && b[1] != 0){minutes = cifrii[(b[0]/10)] + cifri[b[1]]; }
    if(b[0] != 0 && b[1] == 0){minutes = cifrii[b[0]]; }
    if(minutes == ''){new TypeError();}
    time = hours + ':' + minutes; 
    
    return time; 
}

module.exports = romanTime;
