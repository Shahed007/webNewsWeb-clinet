import { Helmet } from "react-helmet-async";
import AllPublisher from "./allPubliser/AllPublisher";
import HeroSection from "./heroSection/HeroSection";
import TrendingArticles from "./trendingArticles/TrendingArticles";
import Statastics from "./statastics/Statastics";
import Plan from "./plan/Plan";

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
      <Plan></Plan>
    </>
  );
};

export default Home;
