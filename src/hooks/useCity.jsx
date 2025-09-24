import { useQuery } from "@tanstack/react-query";
import { fetchCityDetails } from "../services/apiCity";
import useDebounce from "./useDebounce";

export default function useCity(query) {
  // if (query === "undefined") return null;
  const deBounceValue = useDebounce(query, 500);
  const { data: cityData, isPending: isPendingCityData } = useQuery({
    queryFn: () => fetchCityDetails(deBounceValue),
    queryKey: [deBounceValue],
    enable: !!deBounceValue && !!query,
  });

  return { cityData, isPendingCityData };
}
