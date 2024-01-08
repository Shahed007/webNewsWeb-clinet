import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LatestNewsCard = ({ image, title, _id }) => {
  return (
    <Link to={`/articles-Details/${_id}`}>
      <div className="flex items-center gap-3 shadow-md border bg-white">
        <img className="h-[100px] w-[100px] object-cover" src={image} alt="" />
        <h5 className="text-sm pr-1">{title.slice(0, 30)}...</h5>
      </div>
    </Link>
  );
};

LatestNewsCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default LatestNewsCard;
