let valueSearch = document.getElementById("valueSearch");
let temperature = document.getElementById("temper");
let cloud = document.getElementById("cloud");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let description = document.querySelector(".description");
let city = document.getElementById("city");
let form = document.getElementById("whetherForm");
let country = document.getElementById("country");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (valueSearch.value != "") {
    searchWhether(valueSearch.value);
  }
});

async function searchWhether(query) {
  const url =`https://yahoo-weather5.p.rapidapi.com/weather?location=${query}&format=json&u=f`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "46ef8c2524mshc99f145cb3d29bcp1c220fjsn8e3b7c0b836b",
      "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    city.textContent = result.location.city;
    temperature.textContent = result.current_observation.condition.temperature;
    cloud.textContent = result.current_observation.atmosphere.cloud;
    humidity.textContent = result.current_observation.atmosphere.humidity + '%';
    pressure.textContent = result.current_observation.atmosphere.pressure + ' hPa';
    description.textContent = result.current_observation.condition.text;
    country.textContent = result.location.country;

  } catch (error) {
    console.error(error);
  }
}
