export async function fetchCityDetails(query) {
  const CITY_API = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    query
  )}&count=1&language=en&format=json`;

  const res = await fetch(CITY_API);
  if (!res.ok) {
    throw new Error("Failed to fetch city details");
  }
  const data = await res.json();
  return data;
}
