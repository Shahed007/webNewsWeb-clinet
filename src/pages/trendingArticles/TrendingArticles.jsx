import { useTrending } from "../../hooks/api";
import loadingAnimation from "../../assets/loading/loading-animation.gif";
import Container from "../../components/container/Container";
import ArticlesCard from "../../components/card/ArticlesCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

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
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="h-full"
          >
            {tending?.map((data, idx) => (
              <SwiperSlide key={idx} className="h-full mb-10">
                <ArticlesCard data={data}></ArticlesCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default TrendingArticles;
