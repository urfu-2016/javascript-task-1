'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
	String time2 = time;
	// try	{
		// throw new TypeError('Неверное время');
	// }	catch (e) {
		// console.log(e.name+':'+e.message)
	// }
	var h = 0;
	var i = 0;
	while ( time2[i]!=':' ){
		h += time2[i];
		i++;
	}
	for (++i; i<time2.length; i++){
		m += time2[i]; 
	}
	h = String(Number(h));
	m = String(Number(m));
	h = to_roman(h);
	m = to_roman(m);
	time = h+':'+m;
    return time;
}

function to_roman (str){
	switch (str){
		case '0': str='N'; break;
		case '1': str='I'; break;
		case '2': str='II'; break;
		case '3': str='III'; break;
		case '4': str='IV'; break;
		case '5': str='V'; break;
		case '6': str='VI'; break;
		case '7': str='VII'; break;
		case '8': str='VIII'; break;
		case '9': str='IX'; break;
		case '10': str='X'; break;
		case '11': str='XI'; break;
		case '12': str='XII'; break;
		case '13': str='XIII'; break;
		case '14': str='XIV'; break;
		case '15': str='XV'; break;
		case '16': str='XVI'; break;
		case '17': str='XVII'; break;
		case '18': str='XVIII'; break;
		case '19': str='XIX'; break;
		case '20': str='XX'; break;
		case '21': str='XXI'; break;
		case '22': str='XXII'; break;
		case '23': str='XXIII'; break;		
	}
	return str;
}
module.exports = romanTime;
