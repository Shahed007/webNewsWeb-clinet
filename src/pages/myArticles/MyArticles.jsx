import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import Title from "../../components/title/Title";
import { Button, Card, Typography } from "@material-tailwind/react";
import SiteTitle from "../../components/siteTitle/SiteTitle";
import { useUserArticle } from "../../hooks/api";
import LoadingAnimation from "../../components/loadingAnimation/LoadingAnimation";
import PageError from "../../components/error/PageError";

import { useState } from "react";
import ArticleUpdateModal from "../../components/articleUpdateModal/ArticleUpdateModal";

const TABLE_HEAD = ["Serial No", "Title", "Status", "Is Premium", ""];

const MyArticles = () => {
  const [update, setUpdate] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const { isLoading, error, userArticle, refetch } = useUserArticle();
  if (isLoading) return <LoadingAnimation />;
  if (error) return <PageError err={error} />;
  const handleUpdate = (article) => {
    setUpdate(article);
    handleOpen();
  };
  return (
    <>
      <SiteTitle page="My Articles"></SiteTitle>
      <section className="my-20">
        <Container>
          <Title>My articles</Title>
          <div className="mt-12">
            <Card className="h-full w-full overflow-scroll">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 "
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
                  {userArticle?.map((article, index) => {
                    const isLast = index === userArticle.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {index + 1}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {article.title}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {article.status === "approved" ? (
                              <span className="text-green-500">
                                {article.status}
                              </span>
                            ) : article.status === "declined" ? (
                              <span className="text-red-500">
                                {article.status}
                              </span>
                            ) : (
                              <span className="text-blue-500">
                                {article.status}
                              </span>
                            )}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {article.premium === "free" ? (
                              <span>NO</span>
                            ) : (
                              <span>YES</span>
                            )}
                          </Typography>
                        </td>
                        <td
                          className={`${classes} flex  justify-center items-center gap-2`}
                        >
                          <Link
                            to={`/articles-Details/${article._id}`}
                            className="hover:text-secondary_color"
                          >
                            Details
                          </Link>
                          <Button
                            onClick={() => handleUpdate(article)}
                            size="sm"
                            className="text-green-400"
                          >
                            Update
                          </Button>
                          <Button size="sm" className="text-red-400">
                            Delete
                          </Button>
                        </td>
                        <td className="hidden"></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
          </div>
        </Container>
      </section>
      <ArticleUpdateModal
        update={update}
        handleOpen={handleOpen}
        open={open}
        setOpen={setOpen}
      ></ArticleUpdateModal>
    </>
  );
};

export default MyArticles;
