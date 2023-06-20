import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import SwiperNavButton from "./SwiperNavButton";

const Banner = () => {
  return (
    <Swiper
      // spaceBetween={30}
      loop={true}
      navigation={true}
      modules={[EffectFade, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="banner">
          <div className="banner-main">
            <div className="container">
              <div className="banner-content">
                <div className="left-content">
                  <div className="left-items">
                    <div className="banner-text">
                      <p>
                        <span className="font-sm">
                          Nağd krediti onlayn almaq
                        </span>
                        <br />
                        <span className="font-bold">5% daha sərfəlidir!</span>
                      </p>
                    </div>
                    <div className="banner-button">
                      <Link to="/cash" className="btn">
                        Sifariş et
                      </Link>
                    </div>
                  </div>
                  <div className="navigate-btns">
                    <SwiperNavButton
                      isPrevButton={true}
                      buttonClassName="prev-button"
                    />
                    <SwiperNavButton
                      isNextButton={true}
                      buttonClassName="next-button"
                    />
                  </div>
                </div>
                <div className="right-content">
                  <div className="banner-img">
                    <picture>
                      <img src="https://www.kapitalbank.az/images/slider/version_103/gtk-5-dek-endirim1681471299.png" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="banner">
          <div className="banner-main">
            <div className="container">
              <div className="banner-content">
                <div className="left-content">
                  <div className="left-items">
                    <div className="banner-text">
                      <p>
                        <span className="font-sm">Onlayn sifariş etmək,</span>
                        <br />
                        <span className="font-bold">2 qat sərfəlidir!</span>
                      </p>
                    </div>
                    <div className="banner-button">
                      <Link to="/cash" className="btn">
                        Sifariş et
                      </Link>
                    </div>
                  </div>
                  <div className="navigate-btns">
                    <SwiperNavButton
                      isPrevButton={true}
                      buttonClassName="prev-button"
                    />
                    <SwiperNavButton
                      isNextButton={true}
                      buttonClassName="next-button"
                    />
                  </div>
                </div>
                <div className="right-content">
                  <div className="banner-img">
                    <picture>
                      <img src="https://www.kapitalbank.az/images/slider/version_41/bb-10-azn-ilk-taksit-emeliyyatinda1681974546.png" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner">
          <div className="banner-main">
            <div className="container">
              <div className="banner-content">
                <div className="left-content">
                  <div className="left-items">
                    <div className="banner-text">
                      <p>
                        <span className="font-bold">İpoteka krediti</span>
                        <br />
                        <span className="font-xs">
                          Mənzil sahibi olmaq və ya yeniləmək istəyənlər üçün
                        </span>
                      </p>
                    </div>
                    <div className="banner-button">
                      <Link to="/cash" className="btn">
                        Daha ətraflı
                      </Link>
                    </div>
                  </div>
                  <div className="navigate-btns">
                    <SwiperNavButton
                      isPrevButton={true}
                      buttonClassName="prev-button"
                    />
                    <SwiperNavButton
                      isNextButton={true}
                      buttonClassName="next-button"
                    />
                  </div>
                </div>
                <div className="right-content">
                  <div className="banner-img">
                    <picture>
                      <img
                        className="ipotek-img"
                        src="https://www.kapitalbank.az/images/slider/version_48/ipoteka-krediti1655890221.png"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner">
          <div className="banner-main">
            <div className="container">
              <div className="banner-content">
                <div className="left-content">
                  <div className="left-items">
                    <div className="banner-text">
                      <p>
                        <span className="font-bold">Həftəsonu iş rejimi</span>
                        <br />
                        <span className="font-xs">
                          Bir çox filiallarımız şənbə və bazar günü də fəaliyyət
                          göstərir.
                        </span>
                      </p>
                    </div>
                    <div className="banner-button">
                      <Link to="/" className="btn">
                        Daha ətraflı
                      </Link>
                    </div>
                  </div>
                  <div className="navigate-btns">
                    <SwiperNavButton
                      isPrevButton={true}
                      buttonClassName="prev-button"
                    />
                    <SwiperNavButton
                      isNextButton={true}
                      buttonClassName="next-button"
                    />
                  </div>
                </div>
                <div className="right-content">
                  <div className="banner-img">
                    <picture>
                      <img src="https://www.kapitalbank.az/images/slider/version_1/heftesonu-is-rejimi1639578179.webp" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
