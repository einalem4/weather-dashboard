var searchButton = document.querySelector("#search-button")
var mainTempEl = document.querySelector("#temperature")
var cityName = document.querySelector("#city-name")


function searchHistory() {
    var cityInput = document.querySelector("#city-input").value
    document.getElementById("previous-search").innerHTML = cityInput
    console.log(searchHistory)
    console.log(cityInput)
}

localStorage.getItem(JSON.stringify(searchHistory));


// current weather
function currentWeather(cityInput) {

    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&units=imperial&appid=77405a385bebafa9f315f727dbdd5471'
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (weather) {
            mainTempEl.innerHTML = "Temperature: " + Math.round(weather.main.temp) + " &degF";
            document.getElementById("humidity").innerHTML = "Humidity: " + weather.main.humidity + "%";
            document.getElementById("wind").innerHTML = "Wind Speed: " + weather.wind.speed + " MPH";
            cityName.innerHTML = "<h1>" + weather.name + "</h1>" + " <h1> " + "(" + moment().format('l') + ")" + "</h1>"
            var currentIcon = document.getElementById("current-icon")
            currentIcon.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png');

            uvIndex(weather);
        });
}

// UV index
function uvIndex(weather) {
    fetch(
        'https://api.openweathermap.org/data/2.5/uvi?lat=' + weather.coord.lat + '&lon=' + weather.coord.lon + '&appid=77405a385bebafa9f315f727dbdd5471'
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            document.getElementById("uv").innerHTML = "UV Index: " + response.value

            if (response.value < 3) {
                document.getElementById("uv").innerHTML = "UV Index: <span class='p-2 mb-2 bg-success text-white'>" + response.value + "</span>"
            }

            else if (response.value > 7) {
                document.getElementById("uv").innerHTML = "UV Index: <span class=' p-2 mb-2 bg-danger text-white'>" + response.value + "</span>"
            }

            else {
                document.getElementById("uv").innerHTML = "UV Index: <span class=' p-2 mb-2  bg-warning text-dark'>" + response.value + "</span>"
            }
        });
}

// five day forecast
function forecast(cityInput) {
    fetch(
        'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&units=imperial&appid=77405a385bebafa9f315f727dbdd5471'
    )

        .then(function (response) {
            return response.json();
        })
        .then(function (weather) {

            document.getElementById("date-one").innerHTML = "<h2>" + moment().add(1, 'day').format('l') + "</h2>"
            document.getElementById("temp-one").innerHTML = "Temperature: " + Math.round(weather.list[0].main.temp) + " &degF";
            document.getElementById("humidity-one").innerHTML = "Humidity: " + weather.list[0].main.humidity + "%";
            var iconOne = document.getElementById("icon-one")
            iconOne.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.list[0].weather[0].icon + '@2x.png');

            document.getElementById("date-two").innerHTML = "<h2>" + moment().add(2, 'day').format('l') + "</h2>"
            document.getElementById("temp-two").innerHTML = "Temperature: " + Math.round(weather.list[1].main.temp) + " &degF";
            document.getElementById("humidity-two").innerHTML = "Humidity: " + weather.list[1].main.humidity + "%";
            var iconTwo = document.getElementById("icon-two")
            iconTwo.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.list[1].weather[0].icon + '@2x.png');

            document.getElementById("date-three").innerHTML = "<h2>" + moment().add(3, 'day').format('l') + "</h2>"
            document.getElementById("temp-three").innerHTML = "Temperature: " + Math.round(weather.list[2].main.temp) + " &degF";
            document.getElementById("humidity-three").innerHTML = "Humidity: " + weather.list[2].main.humidity + "%";
            var iconThree = document.getElementById("icon-three")
            iconThree.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.list[2].weather[0].icon + '@2x.png');

            document.getElementById("date-four").innerHTML = "<h2>" + moment().add(4, 'day').format('l') + "</h2>"
            document.getElementById("temp-four").innerHTML = "Temperature: " + Math.round(weather.list[3].main.temp) + " &degF";
            document.getElementById("humidity-four").innerHTML = "Humidity: " + weather.list[3].main.humidity + "%";
            var iconFour = document.getElementById("icon-four")
            iconFour.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.list[3].weather[0].icon + '@2x.png');

            document.getElementById("date-five").innerHTML = "<h2>" + moment().add(5, 'day').format('l') + "</h2>"
            document.getElementById("temp-five").innerHTML = "Temperature: " + Math.round(weather.list[4].main.temp) + " &degF";
            document.getElementById("humidity-five").innerHTML = "Humidity: " + weather.list[4].main.humidity + "%";
            var iconFive = document.getElementById("icon-five")
            iconFive.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.list[4].weather[0].icon + '@2x.png');

        });
}

searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    var cityInput = document.querySelector("#city-input").value
    currentWeather(cityInput);
    forecast(cityInput);
    var previousSearch = cityInput;
    localStorage.setItem("searchButton", JSON.stringify(previousSearch))
    searchHistory();
    console.log(localStorage)
    console.log(previousSearch)
});