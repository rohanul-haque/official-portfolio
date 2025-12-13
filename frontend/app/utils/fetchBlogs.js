import axios from "axios";

export const fetchBlogs = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.get(`${apiUrl}/blog/list`);

    return response?.data?.blogs ?? [];
  } catch (error) {
    console.error("API Error (fetch blogs):", error);
  }
};
