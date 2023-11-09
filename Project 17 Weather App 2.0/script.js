// Use for data-feather for images, logo, icons
    feather.replace();

// API  from OPENWEATHERMAP
const apiKey = "8a62abb5c478089c81df9c79a5772a4d";
const apiURL_current = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiURL_next = "https://api.openweathermap.org/data/2.5/forecast?units=metric&cnt=4&q=";

// Search Box Getting Data
const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".location-button");


// const weatherICON = document.querySelector(".weather-icon");

async function checkweather(city) {
    // apiURL_current
    const response_current = await fetch(apiURL_current + city + `&appid=${apiKey}`);
    var weather_current = await response_current.json();

    // apiURL_next
    const response_next = await fetch(apiURL_next + city + `&appid=${apiKey}`);
    var weather_next = await response_next.json();

    console.log("weather_current", weather_current)
    console.log("weather_next", weather_next)


    // Day
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    document.querySelector(".date-dayname").innerHTML = day;

    // Complete Date
    var date = new Date();
    // Day
    var days = date.getDate();
    // Month
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[d.getMonth()];
    // Year
    var year = date.getFullYear();

    document.querySelector(".date-day").innerHTML = days + "  " + month + "  " + year;


    // City Name + Country Code
    document.querySelector(".location").innerHTML = weather_current.name + " , " + weather_current.sys.country;

    // PRECIPITATION
    // document.querySelector(".precipitation-value").innerHTML = weather_current.+" %"

    // HUMIDITY
    document.querySelector(".humidity-value").innerHTML = weather_current.main.humidity + " %"

    // WIND
    document.querySelector(".wind-value").innerHTML = weather_current.wind.speed + " km/h"

    // Current Weather-Icon
    document.getElementById("weather-icon").setAttribute("data-feather", "map");
    

    // Current Tempertature
    document.querySelector(".weather-temp").innerHTML = Math.round(weather_current.main.temp) + "<sup>°c</sup>";

    // Current Description
    document.querySelector(".weather-desc").innerHTML = weather_current.weather[0].main;

    // 4 Next Days
    function four_hours(hour) {
        var time_hour = weather_next.list[hour].dt_txt
        var weather_hour = time_hour.slice(11, 13);
        return weather_hour;
    }
    // Day 01
    const chan0 = four_hours(0)
    document.querySelector(".hour-one").innerHTML = chan0 + ":00";
    document.querySelector(".temp-one").innerHTML = Math.round(weather_next.list[0].main.temp) + "°C";
    // Day 02
    const chan1 = four_hours(1)
    document.querySelector(".hour-two").innerHTML = chan1 + ":00";
    document.querySelector(".temp-two").innerHTML = Math.round(weather_next.list[1].main.temp) + "°C";
    // Day 03
    const chan3 = four_hours(2)
    document.querySelector(".hour-three").innerHTML = chan3 + ":00";
    document.querySelector(".temp-three").innerHTML = Math.round(weather_next.list[2].main.temp) + "°C";
    // Day 02
    const chan4 = four_hours(3)
    document.querySelector(".hour-four").innerHTML = chan4 + ":00";
    document.querySelector(".temp-four").innerHTML = Math.round(weather_next.list[3].main.temp) + "°C";



}




// Search Box Getting Data
searchbutton.addEventListener("click", () => {
    checkweather(searchbox.value)
})



checkweather()

