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
import { useRef } from "react";
import copy from "clipboard-copy";
import toast from "react-hot-toast";

const ArticlesCard = ({ data, userRoll }) => {
  const {
    _id,
    title,
    image,
    publisher,
    tags,
    description,
    viewers,
    publish_date,
    premium,
  } = data || {};
  const detailsUrl = useRef(`https://webnewswave-client.web.app/articles-Details/${_id}`);

  const handleCopyClick = async () => {
    try {
      // Access the input field value using the ref
      const inputValue = detailsUrl.current.value;
      await copy(inputValue);
      toast.success("Link Copied success fully");
    } catch (error) {
      console.error("Copy to clipboard failed:", error);
    }
  };

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
        <div className="flex justify-between items-center mt-2 px-3">
          <p className=" text-end  text-secondary_color flex gap-1 text-sm">
            {tags?.map((item, idx) => (
              <span key={idx}>#{item}</span>
            ))}
          </p>
          <input
            ref={detailsUrl}
            className="hidden"
            defaultValue={`https://webnewswave-client.web.app/articles-Details/${_id}`}
          />
          <Button size="sm" onClick={handleCopyClick}>
            Copy link
          </Button>
        </div>
        <div className="px-3 pt-4 flex flex-col">
          <h4 className=" text-lg font-bold text-text_primary grow">{title}</h4>
          <p className="mt-3 font-normal text-lg text-text_secondary/80 ">
            {description.slice(0, 60)}...
            <Button
              variant="text"
              size="sm"
              disabled={userRoll?.premiumTaken === "no"}
            >
              <Link to={`/articles-Details/${_id}`}>Read more</Link>
            </Button>
          </p>
        </div>
      </div>
      <CardFooter className="flex items-center justify-between">
        <div className="flex  flex-col">
          <h4 className="text-base font-bold text-text_primary">Publisher</h4>
          <h5>{publisher.toUpperCase()}</h5>
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
  userRoll: PropTypes.any,
};
