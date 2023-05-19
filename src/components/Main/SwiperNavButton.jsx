import React from "react";
import { useSwiper } from "swiper/react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btn">
      <button onClick={() => swiper.slidePrev()}>
        <MdArrowBackIos />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default SwiperNavButton;
