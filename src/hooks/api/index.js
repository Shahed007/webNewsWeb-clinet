import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTrending = () => {
  const {
    isLoading,
    error,
    data: tending,
  } = useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/Shahed007/asets/main/trending.json"
      );
      return res.data;
    },
  });
  return { isLoading, error, tending };
};
