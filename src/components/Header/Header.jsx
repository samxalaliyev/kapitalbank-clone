import React from "react";
import Logo from "../../Logo--main.svg";
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <nav className="nav">
            <img src={Logo} alt="" />
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
