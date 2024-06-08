import axios from "axios";

const COLORSURL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async () => {
  const { data } = await axios.get(COLORSURL);
  return data;
};

export default getColors;
