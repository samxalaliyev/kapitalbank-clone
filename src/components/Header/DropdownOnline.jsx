import React from "react";
import { Link } from "react-router-dom";

const DropdownOnline = () => {
  return (
    <div>
      <div className="onlinedown-content">
        <div className="container">
          <div className="content-main">
            <div className="left-content">
              <div className="left-parent">
                <ul className="left-ul">
                  <li className="ul-child">Kart sifarişi</li>
                  <li className="ul-child">Kredit sifarişi</li>
                  <li className="ul-child">Kredit ödənişi</li>
                  <li className="ul-child"> Kommunal ödənişlər </li>
                </ul>
                <ul className="right-ul">
                  <li className="ul-child">Onlayn növbə</li>
                  <li className="ul-child">Arayış və çıxarışların alınması</li>
                </ul>
              </div>
            </div>
            <div className="right-content">
              <div className="right-parent">
                <div className="right-left-child">
                  <p className="child-up">Birbank Cashback taksit</p>
                  <p className="child-middle">
                    Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən başlayan
                    keşbek, faizsiz və komissiyasız taksit imkanı verən unikal
                    bir kartdır.
                  </p>
                  <Link to="/product-details/5" className="btn">
                    Bir kliklə sifariş et
                  </Link>
                </div>
                <div className="right-right-child">
                  <img
                    src="https://www.kapitalbank.az/images/cards/D/birbank-cashback-debet1656680037.png?v=3"
                    width="278"
                    height="444"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownOnline;
