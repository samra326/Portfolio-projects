let progress = document.getElementById("progress");
let song = document.getElementById("song");
let control = document.getElementById("play");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

}

function playPause(){
    if(control.classList.contains("fa-pause")){
        song.pause();
        control.classList.remove("fa-pause");
        control.classList.add("fa-play");
    }else {
        song.play();
        control.classList.remove("fa-play");
        control.classList.add("fa-pause");
       
    }
    
}

if(song.play()){
    setInterval(()=> {
        progress.value = song.currentTime;
    },700)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    control.classList.remove("fa-play");
    control.classList.add("fa-pause");
}