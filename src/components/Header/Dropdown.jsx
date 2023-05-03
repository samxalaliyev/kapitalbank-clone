import React from "react";

const Dropdown = () => {
  return (
    <div>
      <div className="dropdown-content">
        <div className="container">
          <div className="content-main">
            <div className="left-content">
              <div className="left-parent">
                <ul className="left-ul">
                  <li className="ul-child">
                    Nağd krediti onlayn almaq 5% daha sərfəlidir
                  </li>
                  <li className="ul-child">Gündəlik təlabat krediti</li>
                  <li className="ul-child">Mikro Biznes Krediti</li>
                  <li className="ul-child"> Təminatlı manat krediti </li>
                </ul>
                <ul className="right-ul">
                  <li className="ul-child">Əmanət təminatlı kredit</li>
                  <li className="ul-child"> Avtomobil krediti </li>
                  <li className="ul-child">Daşınmaz əmlak təminatlı kredit </li>
                </ul>
              </div>
            </div>
            <div className="right-content">
              <div className="right-content">
                <div className="right-left-child">
                  <ul>
                    <p>
                      <strong>Gündəlik tələbat krediti</strong>
                    </p>
                    <p>30000 AZN dək Gündəlik tələbat krediti</p>
                    <a href="#" className="btn">
                      Bir kliklə sifariş et
                    </a>
                  </ul>
                </div>
                <div className="right-right-child">
                  <img src="https://www.kapitalbank.az/assets/static/img/main-page/daily-loan3.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
