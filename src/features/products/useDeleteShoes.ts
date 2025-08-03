import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDataShoes } from "../../services/deleteDataShoes";

export const useDeleteShoes = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteDataShoes,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
    },
  });
  return { mutate };
};
