import { useQuery } from "@tanstack/react-query";
import { feathWeatherDetails as feathWeatherDetailsApi } from "../services/apiWeatherDetails";

export function useWeatherDetails(location) {
  const {
    data: weatherDetails,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["weatherDetails", location],
    queryFn: () => feathWeatherDetailsApi(location),
    enabled: !!location,
    staleTime: 1000 * 60 * 5,
  });
  return { weatherDetails, refetch, isPending };
}
