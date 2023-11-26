import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import premiumArt from "../../assets/icon/premium-art.png";

export function PremiumArticlesCard({ premium }) {
  const { title, publisher, image, description, tag, views, publish_date } =
    premium || {};
  return (
    <Card className="w-full flex flex-col  shadow-lg bg-white/10 backdrop-blur-lg border-2 border-primary_color/40">
      <CardHeader floated={false} color="blue-gray">
        <img src={image} alt={`image of ${title}`} />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <img
          className="top-0 right-0 absolute "
          src={premiumArt}
          alt="premium Articles"
        />
        <p className="absolute bottom-0 left-0 p-2 bg-text_secondary/20 text-white">
          {publish_date}
        </p>
      </CardHeader>
      <CardBody className="grow">
        <small className="text-primary_color">#{tag}</small>
        <div className="flex justify-between items-center">
          <h2>
            <span className="text-text_primary">Publisher: </span>
            <span>{publisher}</span>
          </h2>
          <Typography
            variant="small"
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <span className="">
              <FaEye />
            </span>
            <span>{views}</span>
          </Typography>
        </div>
        <div className="my-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {title}
          </Typography>
        </div>
        <Typography color="gray" className="text-justify">
          {description.slice(0, 150)}
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <Button
          disabled={true}
          size="lg"
          className="bg-primary_color/80"
          fullWidth={true}
        >
          Read more
        </Button>
      </CardFooter>
    </Card>
  );
}

PremiumArticlesCard.propTypes = {
  premium: PropTypes.object.isRequired,
};
