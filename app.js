const apikey = "ecb9024ac81ac300515044ff19f7c596";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon =document.querySelector(".weather-icon");

async function checkweather(city){
    // const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main=="Clouds"){
        if(Math.round(data.main.temp) < 5){
            weathericon.src = "snow.png";
        }
        else{
            weathericon.src = "clouds.png";
        }
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src = "clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src = "drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src = "mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        weathericon.src = "snow.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src = "rain.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});
