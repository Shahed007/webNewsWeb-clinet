import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useState } from "react";
import DeclineModal from "../declineModal/DeclineModal";

const AdminArticleCard = ({ data, refetch }) => {
  const axios = useAxiosPublic();
  const [open, setOpen] = useState(false);
  const [getId, setId] = useState("");

  const handleOpen = () => setOpen(!open);
  const {
    title,
    publisher,
    publish_date,
    author_name,
    author_email,
    author_image,
    status,
    _id,
  } = data || {};

  const handleAprove = async (id) => {
    const res = await axios.patch(`/article/${id}`, { status: "approved" });
    if (res.data.success) {
      toast.success("Approved Success fully");
      refetch();
    }
  };

  const handlePremium = async (id) => {
    const res = await axios.patch(`/article/${id}`, { premium: "yeas" });
    if (res.data.success) {
      toast.success("Premium Created success fully");
      refetch();
    }
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`/article/${id}`);
    if (res.data.success) {
      toast.success(res.data.message);
      refetch();
    }
  };

  const handleDecline = (id) => {
    setId(id);
    handleOpen();
  };
  return (
    /* 
    article title,article author
name, article author email,article author photo, Posted Date,status,publisher,approve
button,decline button,Delete button,make premium button
     */

    <>
      <Card color="transparent" shadow={false} className="w-full ">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="flex justify-between items-center"
        >
          <div className="mx-0 flex items-center gap-4 pt-0 pb-8">
            <Avatar
              size="lg"
              variant="circular"
              src={author_image}
              alt="tania andrew"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  {author_name}
                </Typography>
              </div>
              <Typography color="blue-gray">{author_email}</Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <div>
            <p>Posted Date: {publish_date}</p>
            <p>Status: {status}</p>
            <p>Publisher: {publisher}</p>
          </div>
          <h2 className="mt-6">{title}</h2>
          <div className="mt-6 flex gap-2">
            <Button
              onClick={() => handleAprove(_id)}
              size="sm"
              className="text-green-500"
            >
              Approve
            </Button>

            <Button
              onClick={() => handleDecline(_id)}
              size="sm"
              className="text-yellow-500"
            >
              decline
            </Button>
            <Button
              onClick={() => handleDelete(_id)}
              size="sm"
              className="text-red-500"
            >
              Delete
            </Button>
            <Button
              onClick={() => handlePremium(_id)}
              size="sm"
              className="text-blue-500"
            >
              Premium
            </Button>
          </div>
        </CardBody>
      </Card>
      <DeclineModal
        id={getId}
        open={open}
        handleOpen={handleOpen}
        setOpen={setOpen}
      ></DeclineModal>
      ;
    </>
  );
};

export default AdminArticleCard;
