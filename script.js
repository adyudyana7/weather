const API_KEY = "9cbd7013abd76848b66f907d496ffc9f";
const wrapper = document.getElementById("wrapper");
const loader = document.getElementById("loader");
wrapper.style.display = "none";

async function getWeather() {
  wrapper.style.display = "none";
  loader.style.display = "block";
  const city = prompt("Введите город ");
  const response = await fetch(
    ` https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en `
  );
  const result = await response.json();
  console.log("result:", result);
  wrapper.style.display = "block";
  loader.style.display = "none";
  const city2 = document.getElementById("city");
  city2.innerHTML = `Город: ${result.name}`;

  const temp = document.getElementById("temp");
  temp.innerHTML = `Температура: ${result.main.temp}`;

  const feelsLike = document.getElementById("feelsLike");
  feelsLike.innerHTML = `Ощущается как: ${result.main.feels_Like}`;
}

async function succesCallback(location) {
  const { latitude, longitude } = location.coords;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=en`
  );
  const result = await response.json();
  wrapper.style.display = "block";
  loader.style.display = "none";

  const city2 = document.getElementById("city");
  city2.innerHTML = `<span class="label">Город:</span> ${result.name}`;
  const temp = document.getElementById("temp");
  temp.innerHTML = `<span class="label">Температура:</span> ${result.main.temp}`;
  const feelsLike = document.getElementById("feelsLike");
  feelsLike.innerHTML = `<span class="label">Ощущается как:</span> ${result.main.feels_Like}`;
}

async function errorCallback(error) {
  const response = await fetch(
    ` https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric&lang=ru `
  );

  const city55 = "Токтогул";
  const result = await response.json();
  wrapper.style.display = "block";
  loader.style.display = "none";

  const cityh2 = document.getElementById("city");
  cityh2.innerHTML = `Город: ${result.name}`;

  const temph4 = document.getElementById("temp");
  temph4.innerHTML = `Температура: ${result.main.temp}`;

  const feelh5 = document.getElementById("feel");
  feelh5.innerHTML = `Ощущается как: ${result.main.feels_like}`;
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
