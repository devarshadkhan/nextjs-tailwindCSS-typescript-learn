import { api } from "./apiEndpoints";
import axiosInstance from "./apiInterceptor";

export const _apicategory = async () => {
  try {
    const response = await axiosInstance.get(`${api.category}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};



export const _fetchAPI = async (params:string) => {
    try {
      const response = await axiosInstance.get(`api/${params}`);
      return response;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  };
