import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import SwiperNavButton from "./SwiperNavButton";

const Cardsection = () => {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      effect={"fade"}
      navigation={true}
      modules={[EffectFade, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div>
          <div className="card-section">
            <div className="card-slider">
              <div className="card-slider-top">
                <div className="container">
                  <h2 className="slide-title">
                    Birbank <strong>Cashback taksit</strong>
                  </h2>
                  <p>
                    Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən başlayan
                    keşbek, faizsiz və komissiyasız taksit imkanı verən unikal
                    bir kartdır.
                  </p>
                </div>
              </div>
              <div className="card-slider-bottom">
                <div className="container">
                  <ul>
                    <li>
                      <span>30%-dək keşbek və 2 qat ƏDV</span>Bonus
                    </li>
                    <li>
                      <span>pulsuz</span>Kartın qiyməti
                    </li>
                    <li>
                      <span>63 günədək</span>Güzəşt müddəti
                    </li>
                  </ul>
                  <Link to="/product-details/5" className="btn">
                    Sifariş et
                  </Link>

                  <div className="card-image">
                    <img
                      width="320px"
                      src="https://www.kapitalbank.az/images/cards/B/birbank-cashback-home.png?v=4"
                      alt="Birbank Cashback Kartlar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="card-section">
            <div className="card-slider">
              <div className="card-slider-top">
                <div className="container">
                  <h2 className="slide-title">
                    Birbank <strong>Umico taksit</strong>
                  </h2>
                  <p>
                    Gündəlik alış-veriş üçün olan, kredit və taksit kartı
                    imkanlarını birləşdirən, Umico bonusları qazanma imkanını
                    təqdim edən unikal bir kartdır.
                  </p>
                </div>
              </div>
              <div className="card-slider-bottom">
                <div className="container">
                  <ul>
                    <li>
                      <span>1.5%-dən başlayan</span>Keşbek
                    </li>
                    <li>
                      <span>pulsuz</span>Kartın qiyməti
                    </li>
                    <li>
                      <span>63 günədək</span>Güzəşt müddəti
                    </li>
                  </ul>
                  <Link to="/product-details/6" className="btn">
                    Sifariş et
                  </Link>

                  <div className="card-image">
                    <img
                      width="320px"
                      src="https://www.kapitalbank.az/images/cards/B/birbank-umico-home.png?v=4"
                      alt="Birbank Umico"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="card-section">
            <div className="card-slider">
              <div className="card-slider-top">
                <div className="container">
                  <h2 className="slide-title">
                    Birbank <strong>Miles taksit</strong>
                  </h2>
                  <p>
                    Kartla edilən nağdsız ödənişlərə 1 AZN-ə 1 mil bonus
                    qazandıran, pulsuz səyahət, faizsiz və komissiyasız taksit
                    imkanı verən unikal bir kartdır.
                  </p>
                </div>
              </div>
              <div className="card-slider-bottom">
                <div className="container">
                  <ul>
                    <li>
                      <span>1 AZN = 1 Mil</span>Millərin toplanması
                    </li>
                    <li>
                      <span>pulsuz</span>Kartın qiyməti
                    </li>
                    <li>
                      <span>63 günədək</span>Güzəşt müddəti
                    </li>
                  </ul>
                  <Link to="/product-details/7" className="btn">
                    Sifariş et
                  </Link>

                  <div className="card-image">
                    <img
                      width="320px"
                      src="https://www.kapitalbank.az/images/cards/B/birbank-miles-home.png?v=4"
                      alt="Birbank Miles Kartlar, Mil Kartlari"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="card-section">
            <div className="card-slider">
              <div className="card-slider-top">
                <div className="container">
                  <h2 className="slide-title">
                    Birbank <strong>Umico taksit</strong>
                  </h2>
                  <p>
                    Kapital Bank və Umiconun birgə təqdim etdiyi, gündəlik
                    alış-veriş üçün nəzərdə tutulan, kredit və taksit kartı
                    imkanlarını birləşdirən və hər yerdə əlavə Umico bonusları
                    qazanma imkanını təqdim edən unikal bir kartdır.
                  </p>
                </div>
              </div>
              <div className="card-slider-bottom">
                <div className="container">
                  <ul>
                    <li>
                      <span>1.5%-dən başlayan </span>Keşbek
                    </li>
                    <li>
                      <span>pulsuz</span>Kartın qiyməti
                    </li>
                    <li>
                      <span>63 günədək</span>Güzəşt müddəti
                    </li>
                  </ul>
                  <Link to="/product-details/8" className="btn">
                    Sifariş et
                  </Link>

                  <div className="card-image">
                    <img
                      width="320px"
                      src="https://www.kapitalbank.az/images/cards/B/birbank-umico-premium-home.png?v=4"
                      alt="Birbank Umico Premium"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div className="navigate-btns">
        <SwiperNavButton isPrevButton={true} buttonClassName="prev-button" />
        <SwiperNavButton isNextButton={true} buttonClassName="next-button" />
      </div>
    </Swiper>
  );
};

export default Cardsection;
