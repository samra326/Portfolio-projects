let passswordBox = document.getElementById("password");
let Length = 15;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "123456789";

let symbols = "!@#$%^&*()|?><:~";
let all = uppercase+lowercase+number+symbols;



function create(){
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

        while(Length > password.length){
            password += all[Math.floor(Math.random() * all.length)];
        }
        passswordBox.value  = password;
}
let btn = document.getElementById("btn").addEventListener("click", create);

    function copy(){
        passswordBox.select();
        document.execCommand("copy");
        alert("copied successfully");
    }

let pic= document.getElementById("pics").addEventListener("click", copy);