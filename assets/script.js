var cityInput = document.querySelector("#city-input").value
var searchButton = document.querySelector("#search-button")
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
            document.getElementById("wind").innerHTML = "Wind Speed: " + weather.wind.speed + " MPH";

        });
}

currentWeather("Seattle");

function uvIndex(weather) {

    fetch(
        'https://api.openweathermap.org/data/2.5/uvi?lat=' + weather.coord.lat + '&lon=' + weather.coord.lon + '&appid=77405a385bebafa9f315f727dbdd5471'
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            document.getElementById("uv").innerHTML = "UV Index:" + uvIndex.value
            console.log(response);
            console.log(weather);
            console.log(uvIndex(weather));
        });

    uvIndex(weather);
}

function forecast(city) {
    fetch(
        'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=77405a385bebafa9f315f727dbdd5471'
    )

        .then(function (response) {
            return response.json();
        })
        .then(function (weather) {
            document.getElementById("temp-one").innerHTML = "Temperature: " + Math.round(weather.list[0].main.temp) + "&deg F";
            document.getElementById("humidity-one").innerHTML = "Humidity: " + weather.list[0].main.humidity + "%";
            document.getElementById("temp-two").innerHTML = "Temperature: " + Math.round(weather.list[1].main.temp) + "&deg F";
            document.getElementById("humidity-two").innerHTML = "Humidity: " + weather.list[1].main.humidity + "%";
            document.getElementById("temp-three").innerHTML = "Temperature: " + Math.round(weather.list[2].main.temp) + "&deg F";
            document.getElementById("humidity-three").innerHTML = "Humidity: " + weather.list[2].main.humidity + "%";
            document.getElementById("temp-four").innerHTML = "Temperature: " + Math.round(weather.list[3].main.temp) + "&deg F";
            document.getElementById("humidity-four").innerHTML = "Humidity: " + weather.list[3].main.humidity + "%";
            document.getElementById("temp-five").innerHTML = "Temperature: " + Math.round(weather.list[4].main.temp) + "&deg F";
            document.getElementById("humidity-five").innerHTML = "Humidity: " + weather.list[4].main.humidity + "%";

        });
}
forecast("Seattle");


