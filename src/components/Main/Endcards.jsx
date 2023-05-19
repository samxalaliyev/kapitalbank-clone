import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Endcards = () => {
  return (
    <div>
      <div className="end-cards">
        <div className="end-card-left">
          <div className="card-left-content">
            <div className="content-left">
              <div className="content-title-img">
                <div className="content-title">
                  <h2>Onlayn kredit ödənişi</h2>
                  <p>
                    Banka gəlmədən və növbələrdə vaxt itirmədən kartınızla 4
                    addıma kredit borcunuzun ödənişi.
                  </p>
                </div>
                <Link to="/" className="content-link">
                  <span>Ödəniş et </span>
                  <FiArrowRight />
                </Link>
                <div className="content-img">
                  <div className="img-main">
                    <picture>
                      <img
                        src="https://www.kapitalbank.az/assets/static/img/content/elements/png/cashPayment.png"
                        alt="Onlayn kredit ödənişi"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="end-card-right">
          <div className="card-right-content">
            <div className="content-right">
              <div className="content-title-img">
                <div className="content-title">
                  <h2>İnsan resursları</h2>
                  <p>
                    Kapital Bankın peşəkarlar komandasına qoşulmaq
                    istəyirsinizsə, Sizi müvafiq vakansiyaya müraciət etməyə
                    dəvət edirik. Biz sizə dinamik mühitdə maraqlı və
                    perspektivli iş təklif edirik.
                  </p>
                </div>
                <Link className="content-link">
                  <span>Daha ətraflı </span>
                  <FiArrowRight />
                </Link>
                <div className="content-img">
                  <div className="img-main">
                    <picture>
                      <img
                        src="https://www.kapitalbank.az/assets/static/img/content/elements/png/90789318742-min.png"
                        alt="İnsan resursları"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endcards;
