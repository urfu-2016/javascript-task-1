'use strict';

/**
 * @param {String} element – перевод из арабской в римскую
 * @returns {String} – âðåìÿ ðèìñêèìè öèôðàìè (IX:V)
 */
function concatinationTime(element) {
    var onesList = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var tensList = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];

    if (element === 0) {
        return 'N';
    }
    return tensList[Math.floor(element / 10)] + onesList[element % 10];

}

/**
 * @param {String} time – âðåìÿ â ôîðìàòå HH:MM (íàïðèìåð, 09:05)
 * @returns {String} – âðåìÿ ðèìñêèìè öèôðàìè (IX:V)
 */
function romanTime(time) {
    var regexp = /[0-9][0-9]:[0-9][0-9]+$/i;

    if (regexp.test(time)) {

        var timeList = time.split(':').map( listElement => parseInt(listElement, 10));

        var firstElement = timeList[0];
        var secondElement = timeList[1];

        if (firstElement >= 0 && firstElement <= 24 && secondElement >= 0 && secondElement <= 60) {
            console.log(concatinationTime(firstElement) + ':' + concatinationTime(secondElement));
            return;
        } else {
            throw new TypeError;
        }

    } else {
        throw new TypeError;
    }
}

romanTime('12:50 ');
module.exports = romanTime;
