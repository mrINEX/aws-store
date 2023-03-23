import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

type Image = { urls: { small: string } };
const client_id =
  "87e26779aa6242a2b2fc8e863886185d1d1f07215e4890071e45448baedf8950";

export function useImages() {
  return useQuery<Image[], AxiosError>("unsplash-images", async () => {
    const res = await axios.get<{ results: Image[] }>(
      `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=cat`
    );
    return res.data.results;
  });
}
