import { useQuery } from "@tanstack/react-query";
import { feathWeatherDetails as feathWeatherDetailsApi } from "../services/apiWeatherDetails";

export function useWeatherDetails(city) {
  const { data: weatherDetails, isPending } = useQuery({
    queryKey: ["weatherDetails"],
    queryFn: () => feathWeatherDetailsApi(city),
    enabled: !!city,
  });
  return { weatherDetails, isPending };
}
