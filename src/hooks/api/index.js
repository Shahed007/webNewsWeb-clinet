import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosPublic from "../useAxiosPublic";

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
  const axios = useAxiosPublic();
  const {
    isLoading,
    error,
    data: publisher,
  } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axios.get("/publishers");
      return res.data;
    },
  });
  return { isLoading, error, publisher };
};
export const usePublisherName = () => {
  const axios = useAxiosPublic();
  const {
    isLoading,
    error,
    data: publisher,
  } = useQuery({
    queryKey: ["publisherName"],
    queryFn: async () => {
      const res = await axios.get("/publishers");
      return res.data;
    },
  });

  let publisherName;

  if (!isLoading) {
    publisherName = publisher.map((name) => name.publisher_name);
  }

  return { isLoading, error, publisherName };
};

export const usePlan = () => {
  const {
    isLoading,
    error,
    data: plan,
  } = useQuery({
    queryKey: ["plan"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/Shahed007/asets/main/plan.json"
      );
      return res.data;
    },
  });
  return { isLoading, error, plan };
};

export const useAllUser = () => {
  const axios = useAxiosPublic();
  const {
    isLoading,
    error,
    data: allUser,
    refetch,
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axios.get(`/users?page=${0}&pageSize=${5}`);
      return res.data;
    },
  });
  return { isLoading, error, allUser, refetch };
};
