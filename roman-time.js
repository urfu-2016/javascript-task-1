function basedigit(x) {
    var y
    switch (x) {
        case 1:  y="I"
            break
        case 5:  y="V"
            break
        case 10: y="X"
            break
        case 50: y="L"
            break
        default:
            y="I dont know"
    }
    return (y)
}


    function isInteger(s) {
        return (s.toString().search(/^-?[0-9]+$/) == 0);
    }


function convert(x)
{
    var tmp=""
    var base=0

    if (((x<0)||(x>59))||(!isInteger(x)))
        return ("err")
    else
        while (x>0)
        {
            if ((x >= 1)&&(x<=9))
                base=1
            else
            if ((x >= 10)&&(x<=99))
                base=10
            else
                return ('err')

            if (x>=5*base)
            {
                tmp=tmp+basedigit(5*base)
                x=x-5*base
            }
            else
            if (x>=4*base)
            {
                tmp=tmp+basedigit(base)+basedigit(5*base)
                x=x-4*base
            }
            while (x>=base)
            {
                tmp=tmp+basedigit(base)
                x=x-base
            }
        }
    return (tmp)
}

function roman_time() {
    var x = document.getElementById('dsource').value;
    var ex = x.split(':');
    var a1 = convert(ex[0]);
    var a2 = convert(ex[1]);
    var z1 = new Array();
    var z2 = new Array();
    z1 = a1.split('&');
    z2 = a2.split('&');

    if ((a1 == 'err') || (a2 == 'err'))
        document.getElementById('test').innerHTML = 'Type error';
    else
    if (ex[1] == 0)
        document.getElementById('test').innerHTML = '<span style="">' + z1[0] + ':' + 'N' + 'N';
    else
        if ((z1.length == 1) && (z2.length == 1))
        document.getElementById('test').innerHTML = z1[0] + ':' + z2[0];
    else
        document.getElementById('test').innerHTML = '<span style="">' + z1[0] + z1[1] + ':' + z2[0] + z2[1];
}


