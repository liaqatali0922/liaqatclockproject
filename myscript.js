
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let digitalclock = document.getElementById("digitalclock");

function setTime(){
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    let hourdeg = (hh * 30) + (mm * 0.5);
    let minutedeg = (mm * 6) + (ss * 0.1);
    let seconddeg = (ss * 6);

    hour.style.transform = `rotateZ(${hourdeg}deg)`;
    minute.style.transform = `rotateZ(${minutedeg}deg)`;
    second.style.transform = `rotateZ(${seconddeg}deg)`;
digitalclock.innerText=`${hh%12<10?"0":""}${hh% 12}:${mm < 10 ? "0" : ""}${mm} ${hh > 12 ?"PM":"AM"}`;
}
setInterval(setTime,1000);