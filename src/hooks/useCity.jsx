import { useQuery } from "@tanstack/react-query";
import { fetchCityDetails } from "../services/apiCity";
import useDebounce from "./useDebounce";

export default function useCity(query) {
  const deBounceValue = useDebounce(query, 700);
  const { data: cityData, isPending: isPendingCityData } = useQuery({
    queryFn: () => fetchCityDetails(deBounceValue),
    queryKey: ["city", deBounceValue],
    enabled: !!query,
  });

  return { cityData, isPendingCityData };
}
