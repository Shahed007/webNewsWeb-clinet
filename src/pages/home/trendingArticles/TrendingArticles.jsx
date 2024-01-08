import loadingAnimation from "../../../assets/loading/loading-animation.gif";
import Container from "../../../components/container/Container";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Title from "../../../components/title/Title";
import { useAllArticle } from "../../../hooks/api";
import TrendingArticleCard from "../../../components/card/TrendingArtilceCard";

const TrendingArticles = () => {
  const { isLoading, error, allArticles } = useAllArticle();
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

  const shortByView = allArticles?.article?.sort(function (a, b) {
    return b.viewers - a.viewers;
  });

  return (
    <section className="mt-20" data-aos="zoom-in">
      <Container>
        <Title>Trending news</Title>

        <div className="mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              1100: {
                slidesPerView: 2,
              },
            }}
            className="h-full"
          >
            {shortByView?.slice(0, 6)?.map((data, idx) => (
              <SwiperSlide key={idx} className="h-full mb-10">
                <TrendingArticleCard data={data}></TrendingArticleCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default TrendingArticles;
