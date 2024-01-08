import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecomendedCard = ({ title, image, _id }) => {
  return (
    <Link
      to={`/articles-Details/${_id}`}
      
    >
      <div className="flex items-center gap-3 border shadow-sm group bg-white p-0 m-0">
        <div className="w-[40%] overflow-hidden ">
          <img
            className=" w-full h-full object-cover duration-300 transition-all group-hover:scale-110"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-[12px]">{title}</h3>
        </div>
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
