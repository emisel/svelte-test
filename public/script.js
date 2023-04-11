(function () {
    var start = document.getElementById("start");
    var lunch = document.getElementById("lunch");
    var end = document.getElementById("end")

    var res = document.getElementById("result");
    const pad = str => {
        const s = '' + str;
        return s.length > 1 ? s : '0' + s;
    }
    const millisToTime = millis =>  {
        const hours = Math.floor(millis / 1000 / 60 / 60);
        const mins = (millis % (1000 * 60 * 60)) / 60000;

        return pad(hours) +':' + pad(mins);
    } 
        

    const parseTime = elem => {
        const [hour, min] = elem.value.split(':').map(e => parseInt(e));

        console.log(millisToTime(new Date(1970,0,1,hour+1,min).getTime()))
        return new Date(1970,0,1,hour+1,min);
    }
    const updateResult = () => {
        const stime = parseTime(start);
        const etime = parseTime(end);
        const ltime = parseTime(lunch);

        res.innerHTML =  'Jobbat: ' + millisToTime(etime.getTime() - ltime.getTime() - stime.getTime());

    };

    //init
    updateResult();
    
    start.addEventListener("input", updateResult, false);
    end.addEventListener("input", updateResult, false);
    lunch.addEventListener("input", updateResult, false);

})()
