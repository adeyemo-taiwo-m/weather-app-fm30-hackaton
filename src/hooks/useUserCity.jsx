import { useQuery } from "@tanstack/react-query";
import { getCityName } from "../services/apiCity";

export default function useUserCity(location) {
  const { data: userCity, isPending: isPendingUserCity } = useQuery({
    queryKey: ["userCity"],
    queryFn: () => getCityName(location),
  });

  return { userCity, isPendingUserCity };
}
