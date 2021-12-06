
var myVar = setInterval(timer, 1000);

function timer(){
/*
let dt=new Date("January 01, 2022 00:00:00");
let curdt=new Date();
let diff=dt-curdt;
let day=Math.floor(diff/86400000);
let hours=(Math.floor(diff/3600000))-(day*24);
let min=(Math.floor(diff/60000))-(hours*60);
let sec=(Math.floor(diff/1000))-(min*60);

document.getElementById("demo1").innerHTML=day;
document.getElementById("demo2").innerHTML=hours;
document.getElementById("demo3").innerHTML=min;
document.getElementById("demo4").innerHTML=sec;
}
*/

let current = new Date();

    let timer = new Date("January 01, 2022 00:00:00");

    let diff = timer - current;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let mins = Math.floor(diff / (1000 * 60));
    let secs = (Math.floor(diff / (1000)));

    let d = days;
    let h = hours - days * 24;
    let m = mins - hours * 60;
    let s = secs - mins * 60;
    
document.getElementById("demo1").innerHTML=d;
document.getElementById("demo2").innerHTML=h;
document.getElementById("demo3").innerHTML=m;
document.getElementById("demo4").innerHTML=s



}

