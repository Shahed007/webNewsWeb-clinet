import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArticlesCard = ({ data }) => {
  const {
    _id,
    title,
    image,
    publisher,
    tags,
    description,
    viewers,
    publish_date,
  } = data || {};

  return (
    <Card className=" overflow-hidden relative flex flex-col">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none h-80"
      >
        <img
          className="hover:scale-105 duration-500 h-full w-full"
          src={image}
          alt={`image of ${title}`}
        />
        <div className="absolute bottom-0 left-0 bg-primary_color p-2 font-popins text-white tracking-wide">
          <h4>PHOTO</h4>
        </div>
        <div className="absolute top-0 right-0 bg-primary_color p-2 font-popins text-white tracking-wide">
          <h4>{publish_date}</h4>
        </div>
      </CardHeader>
      <div className="grow">
        <p className="px-3 text-end mt-2 text-secondary_color flex gap-1 text-sm">
          {tags?.map((item, idx) => (
            <span key={idx}>#{item}</span>
          ))}
        </p>
        <div className="px-3 pt-4 flex flex-col">
          <h4 className=" text-lg font-bold text-text_primary grow">{title}</h4>
          <p className="mt-3 font-normal text-lg text-text_secondary/80 ">
            {description.slice(0, 60)}...
            <Link to={`/articles-Details/${_id}`}>
              <Button variant="text" size="sm">
                Read more
              </Button>
            </Link>
          </p>
        </div>
      </div>
      <CardFooter className="flex items-center justify-between">
        <div className="flex  flex-col">
          <h4 className="text-base font-bold text-text_primary">Publisher</h4>
          <h5>{publisher}</h5>
        </div>
        <Typography className="font-normal text-sm flex items-center gap-1">
          <span className="font-bold text-text_primary">
            <FaEye />
          </span>{" "}
          <span className="font-medium">{viewers}</span>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default ArticlesCard;

ArticlesCard.propTypes = {
  data: PropTypes.object.isRequired,
};
