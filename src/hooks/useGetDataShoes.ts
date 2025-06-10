import { useQuery } from "@tanstack/react-query";
import { getDataShoes } from "../services/getDataShoes";
import { dataShoes } from "../services/type";

export const useGetDataShoes = () => {
  const {
    data: shoes,
    isError: errorShoes,
    isLoading: loadingShoes,
  } = useQuery<dataShoes[]>({
    queryKey: ["shoes"],
    queryFn: getDataShoes,
  });
  return { shoes, errorShoes, loadingShoes };
};
