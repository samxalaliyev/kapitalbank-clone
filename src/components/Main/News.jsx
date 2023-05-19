import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Slider from "react-slick";

const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
                    <div className="news-item">
                      <div className="news-item-day">
                        <div className="day">17</div>
                        <span className="month">May</span>
                      </div>
                      <div className="news-item-content">
                        <p>
                          Kapital Bank Xudat şəhərində yeni filialını istifadəyə
                          verdi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="news-item">
                      <div className="news-item-day">
                        <div className="day">17</div>
                        <span className="month">May</span>
                      </div>
                      <div className="news-item-content">
                        <p>
                          Kapital Bank Xudat şəhərində yeni filialını istifadəyə
                          verdi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="news-item">
                      <div className="news-item-day">
                        <div className="day">17</div>
                        <span className="month">May</span>
                      </div>
                      <div className="news-item-content">
                        <p>
                          Kapital Bank Xudat şəhərində yeni filialını istifadəyə
                          verdi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="news-item">
                      <div className="news-item-day">
                        <div className="day">17</div>
                        <span className="month">May</span>
                      </div>
                      <div className="news-item-content">
                        <p>
                          Kapital Bank Xudat şəhərində yeni filialını istifadəyə
                          verdi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="news-item">
                      <div className="news-item-day">
                        <div className="day">17</div>
                        <span className="month">May</span>
                      </div>
                      <div className="news-item-content">
                        <p>
                          Kapital Bank Xudat şəhərində yeni filialını istifadəyə
                          verdi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="news-item">
                      <div className="news-item-day">
                        <div className="day">17</div>
                        <span className="month">May</span>
                      </div>
                      <div className="news-item-content">
                        <p>
                          Kapital Bank Xudat şəhərində yeni filialını istifadəyə
                          verdi
                        </p>
                      </div>
                    </div>
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
