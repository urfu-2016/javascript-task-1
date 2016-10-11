'use strict';

/**
 * @param {String} element – перевод из арабской в римскую
 * @returns {String} – римские цифры
 */
function concatinationTime(element) {
    var onesList = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var tensList = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX'];

    if (element === 0) {
        return 'N';
    } else {
        return tensList[Math.floor(element / 10)] + onesList[element % 10];
    }
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var regexp = /[0-9][0-9]:[0-9][0-9]+$/i;

    if (regexp.test(time)) {

        var timeList = time.split(':').map(function(listElement) {
            return parseInt(listElement, 10)
        });

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
