export async function feathWeatherDetails(location) {
  const { latitude: lat, longitude: long } = location;

  const WEATHER_API = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&hourly=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation,weather_code&timezone=GMT`;

  const res = await fetch(WEATHER_API);
  if (!res.ok) {
    throw new Error("Failed to fetch weather details");
  }
  const data = await res.json();
  return data;
}
