import AllPublisher from "./allPubliser/AllPublisher";
import HeroSection from "./heroSection/HeroSection";
import TrendingArticles from "./trendingArticles/TrendingArticles";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <TrendingArticles></TrendingArticles>
      <AllPublisher></AllPublisher>
    </>
  );
};

export default Home;
