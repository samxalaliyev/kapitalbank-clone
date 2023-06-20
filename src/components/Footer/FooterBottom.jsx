import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div>
      <div className="bottom-main">
        <div className="container">
          <div className="footer-bottom">
            <ul>
              <li className="phone-li">
                <Link to="tel:196" className="phone">
                  <FaPhone />
                  <span>196</span>
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/kapitalbank">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/kapital-bank-ojsc/">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/KapitalBankOJSC">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/kapital_bank/">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/channel/UCarG-YHqZPd42HPEBqSSmmw">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-down">
            <div className="down-childs">
              <div className="child">
                <p>© 2023 «Kapital Bank» ASC. Bütün hüquqlar qorunur.</p>
              </div>
              <div className="child">
                <div className="child-icons">
                  <Link>
                    <img
                      src="https://www.kapitalbank.az/assets/static/img/content/elements/png/93817465.png"
                      alt="e-gov.az"
                    />
                  </Link>
                  <Link>
                    <img
                      width="75"
                      src="https://www.kapitalbank.az/assets/static/img/content/elements/png/aesf-logo.png"
                      alt="adif.az"
                    />
                  </Link>
                  <Link>
                    <img
                      src="https://www.kapitalbank.az/assets/static/img/content/elements/png/info.png"
                      alt="infobank.az"
                    />
                  </Link>
                  <Link>
                    <img
                      src="https://www.kapitalbank.az/assets/static/img/content/elements/png/msp.png"
                      alt="bizimpullar.az"
                    />
                  </Link>
                </div>
              </div>
              <div className="child content-p">
                <p>
                  "Kapital Bank" ASC Azərbaycan Republikasının Maliyyə
                  Bazarlarına Nəzarət Palatasının 05 noyabr 2018-ci il tarixli
                  244 nömrəli Bank Lisenziyası əsasında fəaliyyət göstərir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
