import PropTypes from "prop-types";

const ReviewCard = ({ name, rating, comment, image }) => {
  return (
    <div className="bg-white shadow-sm border flex flex-col rounded">
      <div className="h-[350px] ">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="p-3 flex flex-col">
        <div className="divide-y">
          <h3 className="text-center font-medium ">{name}</h3>
          <p className="text-sm text-center flex items-center gap-1 justify-center">
            <span className="font-semibold ">Rating:</span>
            {rating}/5
          </p>
        </div>
        <p className="mt-4 grow text-justify">{comment.slice(0, 210)}...</p>
      </div>
    </div>
  );
};

export default ReviewCard;

ReviewCard.propTypes = {
  image: PropTypes.string,
  rating: PropTypes.number,
  comment: PropTypes.string,
  name: PropTypes.string,
};
