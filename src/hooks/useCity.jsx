import { useMutation } from "@tanstack/react-query";
import { fetchCityDetails } from "../services/apiCity";

export default function useCity() {
  const {
    mutate: fetchCity,
    data: city,
    isPending: isPendingCity,
    error,
  } = useMutation({
    mutationFn: (city) => fetchCityDetails(city),
    mutationKey: ["city"],
    onSettled: () => {},
    onError: (error) => {
      console.error("Error fetching city details:", error);
    },
  });

  return { fetchCity, city, isPendingCity, error };
}
