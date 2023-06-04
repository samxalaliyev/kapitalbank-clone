// import React from "react";
// import { useSwiper } from "swiper/react";
// import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

// const SwiperNavButton = () => {
//   const swiper = useSwiper();
//   return (
//     <div className="swiper-nav-btn">
//       <button onClick={() => swiper.slidePrev()}>
//         <MdArrowBackIos />
//       </button>
//       <button onClick={() => swiper.slideNext()}>
//         <MdArrowForwardIos />
//       </button>
//     </div>
//   );
// };

// export default SwiperNavButton;

import React from "react";
import { useSwiper } from "swiper/react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const SwiperNavButton = ({ isNextButton, isPrevButton, buttonClassName }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (isNextButton) {
      swiper.slideNext();
    } else if (isPrevButton) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="swiper-nav-btn">
      <button
        className={`swiper-nav-btn__button ${buttonClassName}`}
        onClick={handleClick}
      >
        {isNextButton ? (
          <MdArrowForwardIos />
        ) : isPrevButton ? (
          <MdArrowBackIos />
        ) : null}
      </button>
    </div>
  );
};

export default SwiperNavButton;
