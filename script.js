const apiKey = "f3e42830a3464c12fb695fe3db03782c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#search");
const searchBtn = document.querySelector(".subBtn");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    var data = await response.json();

    // console.log(data);

    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
    document.querySelector(".humidity").innerText = "Humidity" + ":" + " " + data.main.humidity + "%";
    document.querySelector(".windspeed").innerText = "Wind-Speed" + ":" + " " + data.wind.speed + "km/hr";

    document.querySelector(".enterloc").style.display = "none";


    if(data.weather[0].main === "Clouds"){
        document.body.style.background = 'url(./Images/weather.gif)';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }

    else if(data.weather[0].main === "Clear"){
        document.body.style.background = 'url(./Images/clear.gif)';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }
    else if(data.weather[0].main === "Rain"){
        document.body.style.background = 'url(./Images/rain.gif)';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }
    else if(data.weather[0].main === "Drizzle"){
        document.body.style.background = 'url(./Images/rain.gif)';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }
    else if(data.weather[0].main === "Mist"){
        document.body.style.background = 'url(./Images/mist.gif)';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }
    else if(data.weather[0].main === "Smoke"){
        document.body.style.background = 'url(./Images/mist.gif)';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }

    else{
        document.body.style.background = 'url(./Images/world.gif)';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }

    document.querySelector('.cityName').style.display = "flex";
    document.querySelector('.humid').style.display = "flex";
    document.querySelector('.wind').style.display = "flex";
}

checkWeather();

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (e)=>{

    if(e.key === "Enter"){
        e.preventDefault();

        searchBtn.click();
    }


    
})


const hours = document.querySelector(".hrs");
const minutes = document.querySelector(".min");
const seconds = document.querySelector(".sec");



setInterval(function() {
    let currentTime =  new Date();

    hours.innerText = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    minutes.innerText = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    seconds.innerText = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);

function formatDay(date){
    const dayArray = date.getDay();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    const day = days[dayArray];
    return day;
}

const currentDay = document.querySelector(".day");
let newCurrentDay = new Date();
currentDay.innerHTML = formatDay(newCurrentDay);

const preLoader = document.querySelector(".preloader");

window.addEventListener("load", function(){
    preLoader.style.display = "none";
})