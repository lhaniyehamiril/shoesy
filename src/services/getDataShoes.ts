import axios from "axios";
import { dataShoes } from "./type";

export const getDataShoes = async (): Promise<dataShoes[]> => {
  const res = await axios.get("/api/shoes");
  return res.data;
};
