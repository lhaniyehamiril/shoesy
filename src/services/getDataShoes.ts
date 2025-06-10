import axios from "axios";
import { dataShoes } from "./type";

export const getDataShoes = async (): Promise<dataShoes[]> => {
  const res = await axios.get("http://localhost:5000/api/shoes");
  return res.data;
};
