import axios from "axios";

// Tomcat is running on 8082 with WAR name = calc
export const BASEURL = "http://localhost:8082/calc";
// export const BASEURL = "http://localhost:2025/";

export const callApi = async (method, endpoint) => {
  try {
    // Ensure endpoint always starts with "/"
    const safeEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

    const response = await axios({
      method: method,
      url: BASEURL + safeEndpoint,
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
