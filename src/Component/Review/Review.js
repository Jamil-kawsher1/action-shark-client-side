import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, navigation } from "swiper/react";
import "swiper/swiper-bundle.min.css";
// swiper core styles
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SingleReview from "./SingleReview";

const Review = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  const [allreviews, setAllReviews] = useState([]);
 
  useEffect(() => {
    fetch(`${process.env.REACT_APP_Base_Url}/reviews`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, [allreviews]);

  return (
    <>
      <h3>Reviews</h3>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {allreviews.map((review) => (
          <SwiperSlide>
            {" "}
            <SingleReview review={review} key={review._id}></SingleReview>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Review;
