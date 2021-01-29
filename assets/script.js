var cityInput = document.querySelector("#city-input").value
var searchButton = document.querySelector("#search-button")
var mainWeather = document.querySelector("#weather")
var mainTempEl = document.querySelector("#temperature")


// current weather
function currentWeather(city) {

    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=77405a385bebafa9f315f727dbdd5471'
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (weather) {
            mainTempEl.innerHTML = "Temperature: " + Math.round(weather.main.temp) + "&deg F";
            document.getElementById("humidity").innerHTML = "Humidity: " + weather.main.humidity + "%";
            console.log(weather.main.temp);
        });
}

currentWeather("San Diego");

