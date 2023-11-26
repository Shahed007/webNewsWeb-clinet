import { Helmet } from "react-helmet-async";
import AllPublisher from "./allPubliser/AllPublisher";
import HeroSection from "./heroSection/HeroSection";
import TrendingArticles from "./trendingArticles/TrendingArticles";
import Statastics from "./statastics/Statastics";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>wev-news-web || Home</title>
      </Helmet>
      <HeroSection></HeroSection>
      <TrendingArticles></TrendingArticles>
      <AllPublisher></AllPublisher>
      <Statastics></Statastics>
    </>
  );
};

export default Home;
