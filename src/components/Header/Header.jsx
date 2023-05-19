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

            <ul>
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
