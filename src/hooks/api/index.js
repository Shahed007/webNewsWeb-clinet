import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTending = () => {
  const {
    isLoading,
    error,
    data: tending,
  } = useQuery({
    queryKey: ["tending"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/Shahed007/asets/main/trending.json"
      );
      return res.data;
    },
  });
  return { isLoading, error, tending };
};

export const usePublisher = () => {
  const {
    isLoading,
    error,
    data: publisher,
  } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/Shahed007/asets/main/publisher.json"
      );
      return res.data;
    },
  });
  return { isLoading, error, publisher };
};
