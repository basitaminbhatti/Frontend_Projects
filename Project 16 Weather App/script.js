const apiKey = "8a62abb5c478089c81df9c79a5772a4d";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");
const weatherICON = document.querySelector(".weather-icon");



async function checkweather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else {
        var data = await response.json();

        document.querySelector(".weather-title").innerHTML = data.weather[0].main;
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>°c</sup>";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clear") {
            weatherICON.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Clouds") {
            weatherICON.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherICON.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Haze") {
            weatherICON.src = "images/haze.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherICON.src = "images/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherICON.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Smoke") {
            weatherICON.src = "images/smoke.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherICON.src = "images/snow.png"
        }
        else {
            weatherICON.src = "images/weather.png"
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";

    }



}






searchbutton.addEventListener("click", () => {
    checkweather(searchbox.value)
})

checkweather()