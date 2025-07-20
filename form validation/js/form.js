
let id =(id) => document.getElementById(id);

let firstName =id('fname');
let lastName = id('lname');
let password = id('Password');
let email = id('email');

let classes = (classes) => document.getElementsByClassName(classes);

let errorMsg = classes('error');
let icon = classes('failiure-icon');

let form = id('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(firstName.value.trim() === ""){
        errorMsg[0].innerHTML = "Enter first name";
        icon[0].style.opacity = "1"; 
    }
    else{
        errorMsg[0].innerHTML = " "; 
        icon[0].style.opacity = "0"; 
        console.log(firstName.value);  
    }

    if(lastName.value.trim() === ""){
        errorMsg[1].innerHTML = "Enter last name";
        icon[1].style.opacity = "1"; 
    }
    else{
        errorMsg[1].innerHTML = " "; 
        icon[1].style.opacity = "0";  
        console.log(lastName.value);  
    }

    if(password.value.trim() ===""){
        errorMsg[2].innerHTML = "Enter password here";
        icon[2].style.opacity = "1"; 
    }
    else{
        errorMsg[2].innerHTML = " ";
        icon[2].style.opacity = "0";
        console.log(password.value);     
    }

    if(email.value.trim() === ""){
        errorMsg[3].innerHTML = "Enter email here";
        icon[3].style.opacity = "1"; 
    }
    else{
        errorMsg[3].innerHTML = " ";
        icon[3].style.opacity = "0";
        console.log(email.value);     
    }
    
})
