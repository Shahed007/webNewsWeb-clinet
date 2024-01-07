import PropTypes from "prop-types";
import { usePublisher } from "../../../hooks/api";
import LoadingAnimation from "../../../components/loadingAnimation/LoadingAnimation";
import PageError from "../../../components/error/PageError";

const newsTags = [
  "All",
  "Breaking News",
  "Politics",
  "World News",
  "Business",
  "Technology",
  "Science",
  "Health",
  "Entertainment",
  "Sports",
  "Environment",
];

const LeftSiteBar = ({ category, setCategory, getPublisher, setPublisher }) => {
  const { isLoading, error, publisher } = usePublisher();
  if (isLoading) return <LoadingAnimation></LoadingAnimation>;
  if (error) return <PageError err={error}></PageError>;
  console.log(publisher);
  return (
    <div>
      <h3 className="text-lg font-semibold text-center border shadow-sm py-2">
        Category
      </h3>
      <ul className="space-y-4 mt-5">
        {newsTags.map((tag, idx) => (
          <li key={idx}>
            <button
              className={`duration-150 ${
                category === tag.toLowerCase() &&
                "text-secondary_color  border-b-secondary_color"
              }  w-full text-left hover:text-secondary_color border-b-2 pb-1  hover:border-b-secondary_color`}
              onClick={() => setCategory(tag.toLowerCase())}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold text-center border  shadow-sm py-2 my-4">
        Publisher
      </h3>
      <ul className="space-y-4">
        <li>
          <button
            className={`duration-150 ${
              getPublisher === "all" &&
              "text-secondary_color  border-b-secondary_color"
            }  w-full text-left hover:text-secondary_color border-b-2 pb-1  hover:border-b-secondary_color`}
            onClick={() => setPublisher("all")}
          >
            All
          </button>
        </li>
        {publisher?.map((item) => (
          <li key={item._id}>
            <button
              className={`duration-150 ${
                getPublisher === item.publisher_name.toLowerCase() &&
                "text-secondary_color  border-b-secondary_color"
              }  w-full text-left hover:text-secondary_color border-b-2 pb-1  hover:border-b-secondary_color`}
              onClick={() => setPublisher(item.publisher_name.toLowerCase())}
            >
              {item.publisher_name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

LeftSiteBar.propTypes = {
  category: PropTypes.string,
  getPublisher: PropTypes.string,
  setPublisher: PropTypes.func,
  setCategory: PropTypes.func,
};

export default LeftSiteBar;
