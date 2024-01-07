import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PropTypes from "prop-types";
import LoadingAnimation from "../../../components/loadingAnimation/LoadingAnimation";
import PageError from "../../../components/error/PageError";
import ArticlesCard from "../../../components/card/ArticlesCard";

const CenterAria = ({ search, getPublisher, getTag }) => {
  const axios = useAxiosPublic();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["allArticles", getPublisher, search, getTag],
    queryFn: async () => {
      const res = await axios.get(
        `/articles?title=${search}&publisher=${
          getPublisher === "all" ? "" : getPublisher
        }&tag=${getTag === "all" ? "" : getTag}`
      );
      return res.data;
    },
  });

  if (isLoading) return <LoadingAnimation></LoadingAnimation>;
  if (error) return <PageError err={error}></PageError>;

  return (
    <div className="grid grid-cols-1 gap-4">
      {data?.map((item) => (
        <ArticlesCard key={item._id} data={item}></ArticlesCard>
      ))}
    </div>
  );
};

CenterAria.propTypes = {
  search: PropTypes.string,
  getPublisher: PropTypes.string,
  getTag: PropTypes.string,
};

export default CenterAria;
