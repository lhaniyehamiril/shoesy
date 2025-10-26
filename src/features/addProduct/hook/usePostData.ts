import { useMutation } from "@tanstack/react-query";
import { postDataShoes } from "../../../services/postDataShoes";

export const usePostData = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: postDataShoes,
  });

  return { mutate, isPending};
};
