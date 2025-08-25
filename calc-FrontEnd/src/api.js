import axios from "axios";

export const BASEURL = "http://localhost:2025/";
// export const BASEURL = "http://localhost:2025/calc";
export const callApi = async (method, endpoint) => {
  try {
    const response = await axios({
      method: method,
      url: BASEURL + endpoint,
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
