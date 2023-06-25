import React from "react";
import { Link } from "react-router-dom";

const DropdownDepozit = () => {
  return (
    <div>
      <div className="depozitdown-content">
        <div className="container">
          <div className="content-main">
            <div className="left-content">
              <div className="left-parent">
                <ul className="left-ul">
                  <li className="ul-child">
                    <Link to="/deposits">Kapital depoziti</Link>
                  </li>
                  <li className="ul-child">
                    <Link to="/deposits">Müddətsiz depozit</Link>
                  </li>
                  <li className="ul-child">
                    <Link to="/deposits">Depozit seyfləri</Link>
                  </li>
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
                  <Link to="/" className="btn">
                    Daha ətraflı
                  </Link>
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
