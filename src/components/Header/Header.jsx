import React from "react";
import Logo from "../../Logo--main.svg";
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <nav className="nav">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>

            <ul className="desktop-ul">
              <li>Fiziki şəxslər üçün</li>
              <li>Biznes üçün</li>
              <li>
                <IoLocationSharp color="#ef3e42" fontSize="16px" /> Xidmət
                şəbəkəsi
              </li>
              <li>EN</li>
              <li>RU</li>
              <li>
                <FaSearch color="#ef3e42" />
              </li>
            </ul>
            <ul className="mobile-ul">
              <li>
                <Link>
                  <img
                    alt="BirBank"
                    src="https://www.kapitalbank.az/assets/static/img/birbanklogo-mobile.svg"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <svg
                    role="img"
                    aria-label="BirBank"
                    width="18"
                    height="14"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4789 6.37992H1.52124C0.681181 6.37992 6.10352e-05 7.06806 6.10352e-05 7.91694C6.10352e-05 8.76582 0.681181 9.61992 1.52124 9.61992H16.4789C17.3189 9.61992 18.0001 8.76564 18.0001 7.91694C18.0001 7.06824 17.3189 6.37992 16.4789 6.37992ZM1.52124 4.21992H16.4789C17.3189 4.21992 18.0001 3.36564 18.0001 2.51694C18.0001 1.66824 17.3189 0.979919 16.4789 0.979919H1.52124C0.681181 0.979919 6.10352e-05 1.66806 6.10352e-05 2.51694C6.10352e-05 3.36582 0.681181 4.21992 1.52124 4.21992ZM16.4789 11.7799H1.52124C0.681181 11.7799 6.10352e-05 12.4681 6.10352e-05 13.3169C6.10352e-05 14.1658 0.681181 15.0199 1.52124 15.0199H16.4789C17.3189 15.0199 18.0001 14.1656 18.0001 13.3169C18.0001 12.4682 17.3189 11.7799 16.4789 11.7799Z"
                      fill="white"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
