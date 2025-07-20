const CDG =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";

let box = document.getElementById("image");
let image = document.getElementById("img");
let text = document.getElementById("code");
document.getElementById("btn").addEventListener("click", generate);



function generate(){
   
    if(text.value.length > 0){
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value; 
        box.classList.add("show-img");
    
    }else{
        alert("please add some text in input field");
    }
}
