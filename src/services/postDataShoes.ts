import axios from "axios";
import { dataShoes } from "./type";

export const postDataShoes = async (data: dataShoes) => {
  const post = await axios.post("/api/shoes", data);
  return post.data;
};
