import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import BookCard from "../uiElements/bookCard";

SwiperCore.use([Pagination, Autoplay]);
const MainSwiper = ({ booksData }) => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
      }}
      pagination={{
        clickable: true,
        type: "progressbar",
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      {booksData?.map((item) => (
        <SwiperSlide key={item.id}>
          <BookCard bookData={item} type="large" categoryMode={true} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSwiper;
