import React from "react";

const DropdownDepozit = () => {
  return (
    <div>
      <div className="depozitdown-content">
        <div className="container">
          <div className="content-main">
            <div className="left-content">
              <div className="left-parent">
                <ul className="left-ul">
                  <li className="ul-child">Kapital depoziti</li>
                  <li className="ul-child">Müddətsiz depozit</li>
                  <li className="ul-child">Depozit seyfləri</li>
                </ul>
              </div>
            </div>
            <div className="right-content">
              <div className="right-parent">
                <div className="right-left-child">
                  <p className="child-up">
                    Kapital
                    <strong> depoziti</strong>
                  </p>
                  <p className="child-middle">
                    Yüksək faiz əldə etməklə yanaşı müddətin yarısınadək məbləğı
                    artırın.
                  </p>
                  <a href="#" className="btn">
                    Daha ətraflı
                  </a>
                </div>
                <div className="right-right-child">
                  <img src="https://www.kapitalbank.az/assets/static/img/menu/deposits.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownDepozit;
