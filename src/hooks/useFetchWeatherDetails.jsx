import { useQuery } from "@tanstack/react-query";
import { feathWeatherDetails } from "../services/apiWeatherDetails";

export function useFetchWeatherDetails() {
  const {
    data: weatherDetails,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["weatherDatails"],
    queryFn: feathWeatherDetails,
  });
  return { weatherDetails, error, isLoading };
}
