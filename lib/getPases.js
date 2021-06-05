import axios from "axios";

const apiUrl = "http://localhost:4000";

export const getPases = async () => {
  const { data } = await axios.get(`${apiUrl}/pases`);
  return data;
};
