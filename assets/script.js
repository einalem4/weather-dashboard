var cityInput = document.querySelector("#city-input").value
var searchButton = document.querySelector("#search-button")

function currentWeather(city) {

    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=77405a385bebafa9f315f727dbdd5471'
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
        });
}

currentWeather("Orlando");