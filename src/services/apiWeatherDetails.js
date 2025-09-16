const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=7.5216&longitude=4.5197&daily=weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation,weather_code&timezone=GMT";

export async function feathWeatherDetails() {
  const res = await fetch(WEATHER_API);
  if (!res.ok) {
    throw new Error("Failed to fetch weather details");
  }
  const data = await res.json();
  return data;
}

const CITY_API = `https://geocoding-api.open-meteo.com/v1/search?name=Ibadan&count=1&language=en&format=json`;

export async function fetchCityDetails() {
  const res = await fetch(CITY_API);
  if (!res.ok) {
    throw new Error("Failed to fetch city details");
  }
  const data = await res.json();
  return data;
}
