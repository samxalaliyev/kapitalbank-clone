import React from "react";
import { Link } from "react-router-dom";

const DailyLoan = () => {
  return (
    <div>
      <div className="daily-loan">
        <div className="daily-loan-top">
          <div className="container">
            <div className="top-content">
              <h2 className="loan-title">
                Gündəlik <strong>tələbat krediti</strong>
              </h2>
              <p>
                30000 AZN-dək, arzularınızı reallaşdırmaq və ya ehtiyaclarınızı
                ödəmək üçün nağd kredit təklif edirik.
              </p>
            </div>
          </div>
        </div>
        <div className="daily-loan-bottom">
          <div className="container">
            <div className="bottom-content">
              <div className="loan-img">
                <img
                  src="https://www.kapitalbank.az/assets/static/img/main-page/daily-loan3.png"
                  alt="Gundelik telebat krediti"
                />
              </div>
              <div className="list-and-button">
                <ul className="loan-list">
                  <li>
                    <span>30 000 AZN-dək</span>Kredit məbləği
                  </li>
                  <li>
                    <span>59 ayadək</span>Kredit müddəti
                  </li>
                  <li>
                    <span>13%-dən</span>İllik faiz dərəcəsi
                  </li>
                </ul>
                <div className="loan-button">
                  <Link to="/" className="btn">
                    Sifariş et
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyLoan;
