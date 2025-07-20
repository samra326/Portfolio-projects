
let hour = document.getElementById('hours');
let mints = document.getElementById('minutes');
let scnds = document.getElementById('seconds');

function displaytime(){

    let date = new Date();

    let hh = date.getHours();
    let mm= date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mrotate = 6*mm;
    let srotate = 6*ss;

    hour.style.transform = 'rotate(${hRotation}deg)';
    mints.style.transform = 'rotate(${mrotate}deg)';
    scnds.style.transform = 'rotate(${srotate}deg)';
}

setInterval(displaytime, 1000);