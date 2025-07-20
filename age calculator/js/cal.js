let input = document.getElementById("DOB");

input.max = new Date().toISOString().split("T")[0];

let buttn = document.getElementById("btn").addEventListener("click", calculate);

let result = document.getElementById("result");

function calculate(){
    let birth = new Date(input.value);

    let day = birth.getDate();
    let month = birth.getMonth() + 1;
    let y1 = birth.getFullYear();

    let today = new Date();

    let D = today.getDate();
    let M = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d;
    let m;
    let y3;


    y3 = y2-y1;

    if(M >= month){
        m = M - month;
    }else{
        y3--;
        m = 12 + M - month;
    }


    if(D >= day){
        d = D - day;
    }else{
        m--;
        d = getdayss(y1, month) + D - day;
    }


    if(m<0){
        m = 11;
        y3--;
    }

   result.innerHTML  = `you are ${y3} years  ${m} months ${d} days  old`;
}

function getdayss(year, month){
    return new Date(year, month, 0).getDate();
}

