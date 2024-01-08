import RecomendedCard from "../../../components/card/RecomendedCard";
import Container from "../../../components/container/Container";
import PageError from "../../../components/error/PageError";
import LoadingAnimation from "../../../components/loadingAnimation/LoadingAnimation";
import Title from "../../../components/title/Title";
import { useAllArticle } from "../../../hooks/api";

const Recomended = () => {
  const { isLoading, error, allArticles } = useAllArticle();
  if (isLoading) return <LoadingAnimation></LoadingAnimation>;
  if (error) return <PageError err={error}></PageError>;
  const { article } = allArticles;
  return (
    <section className="mt-20" data-aos="zoom-in">
      <Container>
        <div className="text-left flex justify-start mb-12">
          <Title className="justify-start">Recommended For You</Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          {article?.slice(4, 10).map((item) => (
            <RecomendedCard key={item._id} {...item}></RecomendedCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Recomended;
