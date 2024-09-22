import { Category } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getCategories = async (): Promise<Category[]> => {
  if (!URL) {
    throw new Error("URL is not defined.");
  }
  const res = await axios.get<Category[]>(`${URL}/categories`);
  const data = res.data;
  return data;
};

export default getCategories;
