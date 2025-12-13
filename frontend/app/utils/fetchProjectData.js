import axios from "axios";

export const fetchProjectData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.get(`${apiUrl}/project/list`);

    return response?.data?.projects ?? [];
  } catch (error) {
    console.error("API Error (fetchProjectData):", error);
  }
};
