import axios from "axios";

const SIZESURL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async () => {
  const { data } = await axios.get(SIZESURL);
  return data;
};

export default getSizes;
