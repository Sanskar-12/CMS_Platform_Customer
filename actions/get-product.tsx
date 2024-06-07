import axios from "axios";

const PRODUCTURL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id:string) => {
  const { data } = await axios.get(`${PRODUCTURL}/${id}`);
  return data;
};

export default getProduct;
