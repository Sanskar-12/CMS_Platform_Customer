import axios from "axios";

const CATEGORIESURL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async () => {
  const { data } = await axios.get(CATEGORIESURL);
  return data;
};

export default getCategories;
