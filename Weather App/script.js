const apiKey = "0ebd95b93f8d164663852a60c4cc24ba";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let dataJson = await response.json();

    document.querySelector(".temp").innerHTML =
      Math.round(dataJson.main.temp) + "°C";
    document.querySelector(".city").innerHTML = dataJson.name;
    document.querySelector(".humidity").innerHTML =
      dataJson.main.humidity + " %";
    document.querySelector(".wind").innerHTML = dataJson.wind.speed + " km/h";

    if (dataJson.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (dataJson.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (dataJson.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (dataJson.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (dataJson.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (dataJson.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (dataJson.weather[0].main == "Wind") {
      weatherIcon.src = "images/wind.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
