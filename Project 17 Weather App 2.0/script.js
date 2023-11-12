feather.replace();


// API  from OPENWEATHERMAP
const apiKey = "8a62abb5c478089c81df9c79a5772a4d";
const apiURL_current = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiURL_next = "https://api.openweathermap.org/data/2.5/forecast?units=metric&cnt=4&q=";

// Search Box Getting Data
const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".location-button");


const weather_ICON_main = document.querySelector(".weather-icon");
const weather_ICON_next_01 = document.querySelector(".hour-icon-one");
const weather_ICON_next_02 = document.querySelector(".hour-icon-two");
const weather_ICON_next_03 = document.querySelector(".hour-icon-three");
const weather_ICON_next_04 = document.querySelector(".hour-icon-four");


const weather_city_image = document.querySelector(".weather-side");



async function checkweather(city) {
    // apiURL_current
    const response_current = await fetch(apiURL_current + city + `&appid=${apiKey}`);
    var weather_current = await response_current.json();

    // apiURL_next
    const response_next = await fetch(apiURL_next + city + `&appid=${apiKey}`);
    var weather_next = await response_next.json();

    // console.log("weather_current", weather_current);
    // console.log("weather_next", weather_next);


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
    document.querySelector(".location").innerHTML = weather_current.name + ", " + weather_current.sys.country;

    //Pressure
    document.querySelector(".pressure-value").innerHTML = weather_current.main.pressure + " mb"

    // HUMIDITY
    document.querySelector(".humidity-value").innerHTML = weather_current.main.humidity + " %"

    // WIND
    document.querySelector(".wind-value").innerHTML = weather_current.wind.speed + " km/h"

    // Current Tempertature
    document.querySelector(".weather-temp").innerHTML = Math.round(weather_current.main.temp) + "<sup>°c</sup>";

    // Current Description
    document.querySelector(".weather-desc").innerHTML = weather_current.weather[0].main;


    let weather_Status_Des = weather_current.weather[0].main;
    let weather_next_1 = weather_next.list[0].weather[0].main;
    let weather_next_2 = weather_next.list[1].weather[0].main;
    let weather_next_3 = weather_next.list[2].weather[0].main;
    let weather_next_4 = weather_next.list[3].weather[0].main;

    function weather_icon_image(icon_change, icon_link) {
        // If Statement
        if (icon_change === "Clear") {
            icon_link = "images/sun.svg"
        }
        else if (icon_change == "Haze") {
            icon_link.src = "images/haze.svg"
        }
        else if (icon_change == "Clouds") {
            icon_link.src = "images/cloud.svg"
        }
        else if (icon_change == "Rain") {
            icon_link.src = "images/cloud-rain.svg"
        }
        else if (icon_change == "Drizzle") {
            icon_link.src = "images/cloud-drizzle.svg"
        }
        else if (icon_change == "Snow") {
            icon_link.src = "images/cloud-snow.svg"
        }
        else if (icon_change == "Smoke") {
            icon_link.src = "images/smoke.png"
        }
        else if (icon_change == "Mist") {
            icon_link.src = "images/mist.png"
        }
        else if (icon_change == "Wind") {
            icon_link.src = "images/wind.svg"
        }
        else {
            weatherICON.src = "images/weather.png"
        }

    }
    weather_icon_image(weather_Status_Des, weather_ICON_main);
    weather_icon_image(weather_next_1, weather_ICON_next_01);
    weather_icon_image(weather_next_2, weather_ICON_next_02);
    weather_icon_image(weather_next_3, weather_ICON_next_03);
    weather_icon_image(weather_next_4, weather_ICON_next_04);



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



    // Image
    if (weather_current.name == "Karachi") {
        weather_city_image.style.backgroundImage = 'url("https://images.unsplash.com/photo-1610697579277-70a34dd4f436?q=80&w=1374&auto=format&fit=crop&i&w=675&q=80")';
    }
    else if (weather_current.name == "Lahore"){
        weather_city_image.style.backgroundImage = 'url("https://images.unsplash.com/photo-1595426496987-37c7113b24a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    }
    else if (weather_current.name == "Multan"){
        weather_city_image.style.backgroundImage = 'url("https://images.unsplash.com/photo-1601050589568-13b1e991638a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    }
    else if (weather_current.name == "Islamabad"){
        weather_city_image.style.backgroundImage = 'url("https://images.unsplash.com/photo-1652362183275-887d5adb7077?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    }
    else if (weather_current.name == "Berlin"){
        weather_city_image.style.backgroundImage = 'url("https://images.unsplash.com/photo-1597932552386-ad91621e4c8a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    }
    else if (weather_current.name == "Dubai"){
        weather_city_image.style.backgroundImage = 'url("https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    }
    else if (weather_current.name == "Mumbai"){
        weather_city_image.style.backgroundImage = 'url("https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    }
    else if (weather_current.name == "Paris"){
        weather_city_image.style.backgroundImage = 'url("https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    }
    else if (weather_current.name == "Maldives"){
        weather_city_image.style.backgroundImage = 'url("https://images.unsplash.com/photo-1547528114-f4daa226e256?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    }
    else{
        weather_city_image.style.backgroundImage = 'url("https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    }

}




// Search Box Getting Data
searchbutton.addEventListener("click", () => {
    checkweather(searchbox.value)
})



checkweather()




// document.getElementById("weather-icon").setAttribute("data-feather", "sun");
