import { useState } from "react";
import { newsWebsiteReviews } from "../../../utils/review-data";
import Container from "../../../components/container/Container";
import Title from "../../../components/title/Title";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import ReviewCard from "../../../components/card/ReviewCard";

const UserReview = () => {
  const [reviews] = useState(newsWebsiteReviews);
  return (
    <section className="mb-20" data-aos="zoom-in">
      <Container>
        <Title className="mb-12">Satisfy user</Title>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews?.map((review, idx) => (
            <SwiperSlide key={idx} className="mb-10">
              <ReviewCard {...review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default UserReview;
