import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FiArrowRight } from "react-icons/fi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="news">
        <div className="container">
          <div className="news-top">
            <h2 className="news-title">Xəbərlər</h2>
            <Link to="/" className="news-link">
              <span>Bütün xəbərlər</span> <FiArrowRight />
            </Link>
          </div>
          <div className="news-bottom">
            <div className="news-content">
              <div className="news-slider">
                <Slider {...settings}>
                  <div>
                    <Link>
                      <div className="news-item">
                        <div className="news-item-day">
                          <div className="day">17</div>
                          <span className="month">May</span>
                        </div>
                        <div className="news-item-content">
                          <p>
                            Kapital Bank Xudat şəhərində yeni filialını
                            istifadəyə verdi
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link>
                      <div className="news-item">
                        <div className="news-item-day">
                          <div className="day">18</div>
                          <span className="month">May</span>
                        </div>
                        <div className="news-item-content">
                          <p>
                            Kapital Bank Xudat şəhərində yeni filialını
                            istifadəyə verdi
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link>
                      <div className="news-item">
                        <div className="news-item-day">
                          <div className="day">19</div>
                          <span className="month">May</span>
                        </div>
                        <div className="news-item-content">
                          <p>
                            Kapital Bank Xudat şəhərində yeni filialını
                            istifadəyə verdi
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link>
                      <div className="news-item">
                        <div className="news-item-day">
                          <div className="day">20</div>
                          <span className="month">May</span>
                        </div>
                        <div className="news-item-content">
                          <p>
                            Kapital Bank Xudat şəhərində yeni filialını
                            istifadəyə verdi
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link>
                      <div className="news-item">
                        <div className="news-item-day">
                          <div className="day">21</div>
                          <span className="month">May</span>
                        </div>
                        <div className="news-item-content">
                          <p>
                            Kapital Bank Xudat şəhərində yeni filialını
                            istifadəyə verdi
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link>
                      <div className="news-item">
                        <div className="news-item-day">
                          <div className="day">22</div>
                          <span className="month">May</span>
                        </div>
                        <div className="news-item-content">
                          <p>
                            Kapital Bank Xudat şəhərində yeni filialını
                            istifadəyə verdi
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";
// import { Swiper, SwiperSlide } from "swiper/react";

// import SwiperNavButton from "./SwiperNavButton";
// import { Navigation } from "swiper";

// import "swiper/css";
// import "swiper/css/pagination";

// const News = () => {
//   return (
//     <div>
//       <div className="news">
//         <div className="container">
//           <div className="news-top">
//             <h2 className="news-title">Xəbərlər</h2>
//             <Link to="/" className="news-link">
//               <span>Bütün xəbərlər</span> <FiArrowRight />
//             </Link>
//           </div>
//           <div className="news-bottom">
//             <div className="news-content">
//               <div className="news-slider">
//                 <Swiper
//                   slidesPerView={3}
//                   spaceBetween={5}
//                   navigation={true}
//                   loop={true}
//                   breakpoints={{
//                     320: {
//                       slidesPerView: 1,
//                     },
//                     768: {
//                       slidesPerView: 2,
//                     },
//                   }}
//                   modules={[Navigation]}
//                   className="mySwiper"
//                 >
//                   <div className="button-next">
//                     <SwiperNavButton
//                       isNextButton={true}
//                       buttonClassName="next-button"
//                     />
//                   </div>
//                   <SwiperSlide>
//                     <div>
//                       <div className="news-item">
//                         <div className="news-item-day">
//                           <div className="day">17</div>
//                           <span className="month">May</span>
//                         </div>
//                         <div className="news-item-content">
//                           <p>
//                             Kapital Bank Xudat şəhərində yeni filialını
//                             istifadəyə verdi
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <div>
//                       <div className="news-item">
//                         <div className="news-item-day">
//                           <div className="day">18</div>
//                           <span className="month">May</span>
//                         </div>
//                         <div className="news-item-content">
//                           <p>
//                             Kapital Bank Xudat şəhərində yeni filialını
//                             istifadəyə verdi
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <div>
//                       <div className="news-item">
//                         <div className="news-item-day">
//                           <div className="day">19</div>
//                           <span className="month">May</span>
//                         </div>
//                         <div className="news-item-content">
//                           <p>
//                             Kapital Bank Xudat şəhərində yeni filialını
//                             istifadəyə verdi
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <div>
//                       <div className="news-item">
//                         <div className="news-item-day">
//                           <div className="day">20</div>
//                           <span className="month">May</span>
//                         </div>
//                         <div className="news-item-content">
//                           <p>
//                             Kapital Bank Xudat şəhərində yeni filialını
//                             istifadəyə verdi
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <div>
//                       <div className="news-item">
//                         <div className="news-item-day">
//                           <div className="day">21</div>
//                           <span className="month">May</span>
//                         </div>
//                         <div className="news-item-content">
//                           <p>
//                             Kapital Bank Xudat şəhərində yeni filialını
//                             istifadəyə verdi
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <div>
//                       <div className="news-item">
//                         <div className="news-item-day">
//                           <div className="day">22</div>
//                           <span className="month">May</span>
//                         </div>
//                         <div className="news-item-content">
//                           <p>
//                             Kapital Bank Xudat şəhərində yeni filialını
//                             istifadəyə verdi
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <div>
//                       <div className="news-item">
//                         <div className="news-item-day">
//                           <div className="day">23</div>
//                           <span className="month">May</span>
//                         </div>
//                         <div className="news-item-content">
//                           <p>
//                             Kapital Bank Xudat şəhərində yeni filialını
//                             istifadəyə verdi
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;
