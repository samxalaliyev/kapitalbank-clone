import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "160px", top: "250px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",

        left: "1290px",
        zIndex: "5",
        top: "250px",
      }}
      onClick={onClick}
    />
  );
}

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="div-main">
      <Slider {...settings}>
        <div className="banner">
          <div className="banner-main">
            <div className="container">
              <div className="banner-content">
                <div className="left-content">
                  <div className="banner-text">
                    <p>
                      <span className="font-sm">Nağd krediti onlayn almaq</span>
                      <br />
                      <span className="font-bold">5% daha sərfəlidir!</span>
                    </p>
                  </div>
                  <div className="banner-button">
                    <Link to="/" className="btn">
                      Sifariş et
                    </Link>
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
        <div className="banner">
          <div className="banner-main">
            <div className="container">
              <div className="banner-content">
                <div className="left-content">
                  <div className="banner-text">
                    <p>
                      <span className="font-sm">Onlayn sifariş etmək,</span>
                      <br />
                      <span className="font-bold">2 qat sərfəlidir!</span>
                    </p>
                  </div>
                  <div className="banner-button">
                    <Link to="/" className="btn">
                      Sifariş et
                    </Link>
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

        <div className="banner">
          <div className="banner-main">
            <div className="container">
              <div className="banner-content">
                <div className="left-content">
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
                    <Link to="/" className="btn">
                      Daha ətraflı
                    </Link>
                  </div>
                </div>
                <div className="right-content">
                  <div className="banner-img">
                    <picture>
                      <img src="https://www.kapitalbank.az/images/slider/version_48/ipoteka-krediti1655890221.png" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="banner-main">
            <div className="container">
              <div className="banner-content">
                <div className="left-content">
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
      </Slider>
    </div>
  );
};

export default Banner;
