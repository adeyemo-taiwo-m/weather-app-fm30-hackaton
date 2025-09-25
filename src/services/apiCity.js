export async function fetchCityDetails(query) {
  if (!query || query.length < 3) return null;
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

// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=6.5568768&longitude=3.3488896&localityLanguage=en

export async function getCityName(location) {
  const { latitude, longitude } = location;
  const GETCITYNAME_API = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

  const res = await fetch(GETCITYNAME_API);
  if (!res.ok) {
    throw new Error("Failed to get user city name");
  }
  const data = await res.json();
  return data;
}
