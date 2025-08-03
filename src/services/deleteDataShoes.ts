import axios from "axios";

export const deleteDataShoes = async (id: number) => {
  return await axios.delete(`http://localhost:5000/api/shoes/${id}`);
};
