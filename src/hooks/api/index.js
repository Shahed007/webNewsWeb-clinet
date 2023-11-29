import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosPublic from "../useAxiosPublic";
import useAuth from "../useAuth";
import useAxiosSecure from "../useAxiosSecure";

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

export const useUserArticle = () => {
  const axios = useAxiosPublic();
  const { user, loading } = useAuth();
  const {
    isLoading,
    error,
    data: userArticle = [],
    refetch,
  } = useQuery({
    queryKey: ["userArticle", loading, user],

    queryFn: async () => {
      const res = await axios.get(`/articles?author_email=${user?.email}`);
      return res.data;
    },
  });
  return { isLoading, error, userArticle, refetch };
};

export const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["admin"],
    enabled: !loading && !!user,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res.data;
    },
  });
  return { isLoading, error, data, refetch };
};

export const useAllArticle = () => {
  const axios = useAxiosPublic();
  const {
    isLoading,
    error,
    data: allArticles,
    refetch,
  } = useQuery({
    queryKey: ["all-article"],
    queryFn: async () => {
      const res = await axios.get("/all-article");
      return res.data;
    },
  });
  return { isLoading, error, allArticles, refetch };
};
