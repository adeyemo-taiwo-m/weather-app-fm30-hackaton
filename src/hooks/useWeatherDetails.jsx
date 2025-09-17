import { useMutation } from "@tanstack/react-query";
import { feathWeatherDetails as feathWeatherDetailsApi } from "../services/apiWeatherDetails";

export function useWeatherDetails(city) {
  const {
    data: weatherDetails,
    mutate: fetchWeatherDetails,
    error,
    isPending,
  } = useMutation({
    mutationKey: ["weatherDetails"],
    mutationFn: () => feathWeatherDetailsApi(city),
    onError: (error) => {
      console.error("Error fetching weather details:", error);
    },
  });
  return { fetchWeatherDetails, weatherDetails, error, isPending };
}
