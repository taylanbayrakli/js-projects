const url = "https://api.openweathermap.org/data/2.5/";
const apiKey = "593a1dbba38370adaf58d4fca050d8c0"
const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("keypress", weather)

function weather(e) {
    if (e.keyCode == "13") {
        getValue(searchInput.value.trim());
    }
}

function getValue(cityName) {
    let link = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=en`;
    fetch(link)
        .then(weather => {
            return weather.json()
        })
        .then(display)
}

function display(res) {
    let city = document.querySelector(".city");
    city.innerHTML = `${res.name} , ${res.sys.country}`;

    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(res.main.temp)}°C`

    let details = document.querySelector(".details");
    details.innerHTML = res.weather[0].description;

    let minmax = document.querySelector(".minmax");
    minmax.innerHTML = `${Math.round(res.main.temp_min)}°C / ${Math.round(res.main.temp_max)}°C `

}