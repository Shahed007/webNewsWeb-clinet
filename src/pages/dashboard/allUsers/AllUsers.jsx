import {
  Card,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import Title from "../../../components/title/Title";
import { useAllUser } from "../../../hooks/api";
import LoadingAnimation from "../../../components/loadingAnimation/LoadingAnimation";
import PageError from "../../../components/error/PageError";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const TABLE_HEAD = ["Serial No:", "Picture", "Name", "Email", ""];

const AllUsers = () => {
  const { isLoading, error, allUser, refetch } = useAllUser();
  const axios = useAxiosPublic();

  if (isLoading) return <LoadingAnimation />;
  if (error) return <PageError />;

  const handleCreateAdmin = async (id) => {
    const res = await axios.patch(`/admin/${id}`, { roll: "admin" });
    if (res.data.success) {
      toast.success("Admin created successful");
      refetch();
    } else if (res.status === 404) {
      toast.error(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };
  return (
    <section className="mt-12">
      <Title>All Users</Title>
      <div className="mt-12">
        <Card className="h-full w-full">
          <CardBody className="overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allUser.map(({ photo, name, email, _id, roll }, index) => {
                  const isLast = index === allUser.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>{index + 1}</td>
                      <td className={classes}>
                        <img
                          src={photo}
                          alt={`image of ${name}`}
                          className="h-10 w-10 object-cover"
                        />
                      </td>
                      <td className={classes}>{name}</td>
                      <td className={classes}>{email}</td>
                      <td className={classes}>
                        {roll === "normal" ? (
                          <Button
                            onClick={() => handleCreateAdmin(_id)}
                            size="sm"
                            className="text-green-500"
                          >
                            Make admin
                          </Button>
                        ) : (
                          <span className="text-green-500">{roll}</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              Page 1 of 10
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm">
                Previous
              </Button>
              <Button variant="outlined" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default AllUsers;
