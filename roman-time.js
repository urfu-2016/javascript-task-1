'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии

    //счетчики циклов
    var i;
    var j;

    try {

        var timeArr = [2];
        var hours;
        var minutes;
        var hoursRoman;
        var minutesRoman;

        timeArr = time.split(':', 2);
        hours = parseInt(timeArr[0], 10);
        minutes = parseInt(timeArr[1], 10);

        if (isNaN(hours) || isNaN(minutes) || hours > 23 || hours < 0 || minutes > 59 || minutes < 0) {
            throw new TypeError('TypeError: Неверное время');
        }

        hoursRoman = convertNum(hours);
        minutesRoman = convertNum(minutes);
        time = hoursRoman + ":" + minutesRoman;


    }
    catch (e) {
        console.info('TypeError: Неверное время');
    }


    function convertNum(num) {

        if (num == 0) {
            return 'N';
        }

        //максимальное число повторений подряд римской цифры в числе
        const REPEAT_LIMIT = 3;
        //Римское число - составной объект
        var romanNum = {

            //массив разрядов числа по римскому основанию
            accord: [
                {
                    'arab': 50,
                    'roman': 'L',
                    'count': 0,
                    'addition': '',
                    'addCount': 0
                },
                {
                    'arab': 10,
                    'roman': 'X',
                    'count': 0,
                    'addition': '',
                    'addCount': 0
                }
                ,
                {
                    'arab': 5,
                    'roman': 'V',
                    'count': 0,
                    'addition': '',
                    'addCount': 0
                }
                ,
                {
                    'arab': 1,
                    'roman': 'I',
                    'count': 0,
                    'addition': '',
                    'addCount': 0
                }

            ]
        };


        //остаток от деления (для начала равен самому числу)
        var mod = num;
        for (i = 0; i < romanNum.accord.length; i++) {
            romanNum.accord[i].count = parseInt(mod / romanNum.accord[i].arab);
            mod %= romanNum.accord[i].arab;
        }
        //исключение повторов числа более 3 раз
        for (i = 0; i < romanNum.accord.length; i++) {
            if (romanNum.accord[i].count > REPEAT_LIMIT) {
                romanNum.accord[i].count = 1;
                romanNum.accord[i].addCount = 1;

                if (romanNum.accord[i - 1].count == 0) {
                    romanNum.accord[i].addition = romanNum.accord[i - 1].roman;
                }
                else {
                    romanNum.accord[i].addition = romanNum.accord[i - 2].roman;
                }
                romanNum.accord[i - 1].count = 0;
            }
        }

        //конкатенировать число из цифр
        var rom = '';
        for (j = 0; j < romanNum.accord.length; j++) {
            for (i = 0; i < romanNum.accord[j].count; i++) {
                rom += romanNum.accord[j].roman + romanNum.accord[j].addition;
            }
        }
        return rom;
    }

    return time;
}

module.exports = romanTime;
