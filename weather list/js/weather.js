const ApiKey = "74e188df747e9272abc5f0ac1d53ef91";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchname = document.querySelector(".search-box input");
const btn = document.querySelector(".search-box button");
const Icon =document.querySelector(".images");

async function weatherCheck(city){

    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".image").style.display = "none";
    }else{
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            Icon.src = "img/cloudy.png";
        }else if(data.weather[0].main == "Rain"){
        Icon.src = "img/heavy rain.jpg";
         } else if(data.weather[0].main == "Hot"){
        Icon.src = "img/sun.png";
    }else if(data.weather[0].main == "Drizzle"){
        Icon.src = "img/thunder.jpg";
    }
    else if(data.weather[0].main == "Mist"){
        Icon.src = "img/light rain.webp";
    }else if(data.weather[0].main == "Clear"){
        Icon.src = "img/clear.png";
    }
    document.querySelector(".image").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}

btn.addEventListener('click', ()=>{
    weatherCheck(searchname.value);
})


 