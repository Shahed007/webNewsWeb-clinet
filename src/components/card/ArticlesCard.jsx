import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  CardBody,
} from "@material-tailwind/react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import copy from "clipboard-copy";
import toast from "react-hot-toast";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { AiOutlineLike } from "react-icons/ai";

const ArticlesCard = ({ data, userRoll }) => {
  const [shareButtonActive, setShareButtonActive] = useState(false);

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
  const detailsUrl = useRef(
    `https://webnewswave-client.web.app/articles-Details/${_id}`
  );

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
    <Card className="w-full  md:flex-row flex-col">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 md:w-2/5 md:shrink-0 rounded-t-md overflow-hidden relative"
      >
        <img
          src={image}
          alt={title.slice(0, 20)}
          className="h-full w-full object-cover"
        />
        <h4
          className="absolute top-0 left-0 w-full p-2 text-white bg-gray-700/70 backdrop-blur-md"
          style={{ borderTopLeftRadius: "6px" }}
        >
          {publish_date}
        </h4>
      </CardHeader>
      <CardBody className="flex flex-col sm:px-3 p-2">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-1 mb-3">
            {tags?.map((tag, idx) => (
              <span
                key={idx}
                className="text-secondary_color text-[12px] font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="relative flex-1 flex justify-end">
            <button
              onClick={() => setShareButtonActive(!shareButtonActive)}
              className={`rounded-full hover:bg-secondary_color flex justify-center items-center hover:text-white hover:shadow-md duration-200 ${
                shareButtonActive
                  ? "bg-secondary_color text-white shadow-md"
                  : ""
              } h-8 w-8 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </button>
            <div
              className={`absolute flex flex-col  gap-3  top-[30px] p-2 sm:p-5 right-0    shadow-md border-gray-500 border rounded-md bg-white scale-0 duration-300 ${
                shareButtonActive ? "scale-100" : ""
              }`}
            >
              <div className="flex   w-full items-center">
                <Input
                  className=" block  rounded-r-none text-sm"
                  defaultValue={`https://webnewswave-client.web.app/articles-Details/${_id}`}
                  label="Disabled"
                  disabled
                />
                <IconButton
                  onClick={handleCopyClick}
                  className="bg-gray-200 rounded-l-none text-text_primary shadow-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>
                </IconButton>
              </div>
              <Button className="bg-[#0866FF]">
                <FacebookShareButton url={detailsUrl}>
                  Share Facebook
                </FacebookShareButton>
              </Button>
              <Button className="bg-[#075e54]">
                <WhatsappShareButton url={detailsUrl}>
                  Share WhatsApp
                </WhatsappShareButton>
              </Button>
            </div>
          </div>
        </div>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 sm:text-xl text-base"
        >
          {title}
        </Typography>
        <Typography color="gray" className="xl:mb-8 mb-3 font-normal grow">
          {description.slice(0, 100)}...
        </Typography>
        <div className="border shadow-sm rounded-sm py-2 px-1 flex justify-between items-center mb-3">
          <h6 className="text-sm font-bold uppercase">{publisher}</h6>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <FaEye></FaEye>
              <span>{viewers}</span>
            </div>
            <div className="flex gap-2 items-center">
              <AiOutlineLike></AiOutlineLike>
              <span>10</span>
            </div>
          </div>
        </div>
        <Link to={`/articles-Details/${_id}`} className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default ArticlesCard;

ArticlesCard.propTypes = {
  data: PropTypes.object.isRequired,
  userRoll: PropTypes.any,
};
