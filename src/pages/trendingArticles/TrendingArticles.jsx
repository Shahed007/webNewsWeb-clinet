import { useTrending } from "../../hooks/api";
import loadingAnimation from "../../assets/loading/loading-animation.gif";
import Container from "../../components/container/Container";
import ArticlesCard from "../../components/card/ArticlesCard";

const TrendingArticles = () => {
  const { isLoading, error, tending } = useTrending();
  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center w-full">
        <img src={loadingAnimation} alt="Loading Animation" />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center">
        <h1>{error}</h1>
      </div>
    );
  return (
    <section className="my-20">
      <Container>
        <div className="flex justify-center items-center font-popins">
          <h2 className="border-b-4 border-b-secondary_color text-3xl font-semibold uppercase">
            Trending Articles
          </h2>
        </div>

        <div className="mt-12">
          {tending?.map((data, idx) => (
            <ArticlesCard key={idx} data={data}></ArticlesCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrendingArticles;
