    let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];

h2.innerHTML = `${day} ${date} ${month} ${year}, ${hours}:${minutes}`;

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let weather = document.querySelector("#fahrenheit-temp");
  weather.innerHTML = `${temperature}°C`;
  let mainCity = document.querySelector("#entered-city");
  mainCity.innerHTML = response.data.name;
}
function enterCity(event) {
  event.preventDefault();
  let apiKey = "51758ac4928a75db534673c6f5684b1c";
  let unit = "metric";
  let searchInput = document.querySelector("#city-search-input");
  let citySearch = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
}

function currentPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "7251f1e44b75cc42e0330ac7f968ec98";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}
function currentLocationButton(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentPosition);
}

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", enterCity);

let currentLocation = document.querySelector("#current-location-button");
currentLocation.addEventListener("click", currentLocationButton);
</script>
</body>