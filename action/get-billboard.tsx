import { Billboard } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getBillboard = async (billboardId: string): Promise<Billboard> => {
  if (!URL) {
    throw new Error("URL is not defined.");
  }
  const res = await axios.get<Billboard>(`${URL}/billboards/${billboardId}`);
  const data = res.data;

  return data;
};

export default getBillboard;
