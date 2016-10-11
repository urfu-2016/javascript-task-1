'use strict';

/**
 * @param {String} time – âðåìÿ â ôîðìàòå HH:MM (íàïðèìåð, 09:05)
 * @returns {String} – âðåìÿ ðèìñêèìè öèôðàìè (IX:V)
 */
function concatinationTime(element) {
    var onesList = ['N','I','II','III','IV','V','VI','VII','VIII','IX'];
    var tensList = ['','X','XX','XXX','XL','L','LX'];

    if (element == 0) return 'N';
    else return tensList[Math.floor(element)] + onesList[element % 10];
}

function romanTime(time) {
    var regexp = /[0-9][0-9]:[0-9][0-9]+$/i;

    if (regexp.test(time)) {

        var timeList = time.split(':').map(function (listElement){return parseInt(listElement,10)});

        var firstElement =  timeList[0];
        var secondElement = timeList[1];

        if (firstElement >= 0 && firstElement <= 24 && secondElement >= 0 && secondElement <= 60) {
          console.log(concatinationTime(firstElement) + ':' + concatinationTime(secondElement));
          return;
        } else throw new TypeError;

    } else throw new TypeError;
}

module.exports = romanTime;
