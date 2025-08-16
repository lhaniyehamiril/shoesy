import axios from "axios";

export const deleteDataShoes = async (id: number) => {
  return await axios.delete(`/api/shoes/${id}`);
};
