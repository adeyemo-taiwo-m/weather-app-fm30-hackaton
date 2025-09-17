export async function feathWeatherDetails(city) {
  const { latitude: lat, longitude: long } = city?.results.at(0) || {};

  const WEATHER_API = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation,weather_code&timezone=GMT`;

  console.log(lat, long);
  const res = await fetch(WEATHER_API);
  if (!res.ok) {
    throw new Error("Failed to fetch weather details");
  }
  const data = await res.json();
  return data;
}
