import Marquee from "react-fast-marquee";
import { useAllArticle } from "../../../hooks/api";
import LoadingAnimation from "../../../components/loadingAnimation/LoadingAnimation";
import LatestNewsCard from "../../../components/card/LatestNewsCard";
import PageError from "../../../components/error/PageError";
import Title from "../../../components/title/Title";

const LatestNews = () => {
  const { isLoading, error, allArticles } = useAllArticle();
  if (isLoading) return <LoadingAnimation></LoadingAnimation>;
  if (error) return <PageError err={error}></PageError>;
  const { article } = allArticles || [];
  return (
    <section className=" py-5" data-aos="fade-up">
      <div className="mb-4">
        <Title>Latest News</Title>
      </div>
      <Marquee className="flex items-center gap-6">
        {article?.slice(0, 8).map((article) => (
          <LatestNewsCard key={article._id} {...article}></LatestNewsCard>
        ))}
      </Marquee>
    </section>
  );
};

export default LatestNews;
