import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

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
                <Link>
                  <FaPhone />
                </Link>
              </li>
              <li>
                <Link>
                  <FaPhone />
                </Link>
              </li>
              <li>
                <Link>
                  <FaPhone />
                </Link>
              </li>
              <li>
                <Link>
                  <FaPhone />
                </Link>
              </li>
              <li>
                <Link>
                  <FaPhone />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
