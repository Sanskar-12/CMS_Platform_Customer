import axios from "axios";

const BILLBOARDURL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id:string) => {
  const { data } = await axios.get(`${BILLBOARDURL}/${id}`);
  return data;
};

export default getBillboard;
