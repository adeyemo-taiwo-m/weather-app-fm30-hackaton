export async function fetchCityDetails(query = "lagos") {
  if (query === "undefined") return null;
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
// const x = fetchCityDetails("Lagos");
// console.log(x);
export async function fetchCityByCoords(lat, long) {
  const CITY_API = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${long}&count=1&language=en&format=json`;

  const res = await fetch(CITY_API);
  if (!res.ok) {
    throw new Error("Failed to fetch city details by coordinates");
  }
  const data = await res.json();
  return data;
}
