import AllPublisher from "./allPubliser/AllPublisher";
import HeroSection from "./heroSection/HeroSection";
import TrendingArticles from "./trendingArticles/TrendingArticles";
import Statastics from "./statastics/Statastics";
import Plan from "./plan/Plan";
import SiteTitle from "../../components/siteTitle/SiteTitle";

const Home = () => {
  return (
    <>
      <SiteTitle page="Home"></SiteTitle>
      <HeroSection></HeroSection>
      <TrendingArticles></TrendingArticles>
      <AllPublisher></AllPublisher>
      <Statastics></Statastics>
      <Plan></Plan>
    </>
  );
};

export default Home;
