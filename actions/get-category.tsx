import axios from "axios";

const CATEGORYURL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id:string) => {
  const { data } = await axios.get(`${CATEGORYURL}/${id}`);
  return data;
};

export default getCategory;
