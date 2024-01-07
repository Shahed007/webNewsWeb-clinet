import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PropTypes from "prop-types";

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
  return <div>CenterAria</div>;
};

CenterAria.propTypes = {
  search: PropTypes.string,
  getPublisher: PropTypes.string,
  getTag: PropTypes.string,
};

export default CenterAria;
