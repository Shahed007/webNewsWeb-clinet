import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ArticlesCard = ({ data }) => {
  const { title, publisher, image, description, tag, views, publish_date } =
    data || {};
  return (
    <Card className="max-w-[24rem] overflow-hidden relative">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          className="hover:scale-105 duration-500"
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
      <p className="px-3 text-end mt-2 text-secondary_color">#{tag}</p>
      <CardBody className="px-3 pt-4">
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 font-normal text-text_secondary/80"
        >
          {description.slice(0, 100)}...
          <Button variant="text" size="sm">
            Read more
          </Button>
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex  flex-col">
          <h4 className="text-base font-bold text-text_primary">Publisher</h4>
          <h5>{publisher}</h5>
        </div>
        <Typography className="font-normal text-sm">
          <span className="font-bold text-text_primary">Views:</span>{" "}
          <span className="font-medium">{views}</span>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default ArticlesCard;

ArticlesCard.propTypes = {
  data: PropTypes.object.isRequired,
};
