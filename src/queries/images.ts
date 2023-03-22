import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

type Image = { urls: { small: string } };

export function useImages() {
  return useQuery<Image[], AxiosError>("unsplash-images", async () => {
    const res = await axios.get<{ results: Image[] }>(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.client_id}&query=cat`
    );
    return res.data.results;
  });
}
