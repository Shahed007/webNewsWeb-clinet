import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecomendedCard = ({ title, image, viewers, _id }) => {
  return (
    <Link
      to={`/articles-Details/${_id}`}
      className="flex items-center gap-3 border shadow-sm group bg-white  "
    >
      <div className="w-72 h-36 overflow-hidden ">
        <img
          className=" w-full h-full object-cover duration-300 transition-all group-hover:scale-110"
          src={image}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-[12px]">{title}</h3>
      </div>
    </Link>
  );
};

export default RecomendedCard;

RecomendedCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  viewers: PropTypes.number,
  _id: PropTypes.string,
};
