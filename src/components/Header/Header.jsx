import React, { useState } from "react";
import Logo from "../../Logo--main.svg";
import { FaSearch } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeLink, setActiveLink] = useState("AZ");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [sectionLink, setsectionLink] = useState("FS");

  const Sections = (link) => {
    setsectionLink(link);
  };

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
              <li className="birbank-icon">
                <Link>
                  <img
                    alt="BirBank"
                    src="https://www.kapitalbank.az/assets/static/img/birbanklogo-mobile.svg"
                  />
                </Link>
              </li>
              <li onClick={toggleMenu}>
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
      <div className={`mobile-nav${isOpen ? "-open" : ""}`}>
        {isOpen && (
          <div className="mobile-main">
            <div className="mobile-menu-header">
              <div className="container">
                <div className="header-items">
                  <ul className="language">
                    <li>
                      <Link
                        to="#"
                        className={activeLink === "AZ" ? "active" : ""}
                        onClick={() => handleLinkClick("AZ")}
                      >
                        AZ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className={activeLink === "EN" ? "active" : ""}
                        onClick={() => handleLinkClick("EN")}
                      >
                        EN
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className={activeLink === "RU" ? "active" : ""}
                        onClick={() => handleLinkClick("RU")}
                      >
                        RU
                      </Link>
                    </li>
                  </ul>
                  <div className="mobile-search"></div>
                  <ul className="search-close">
                    <li>
                      <FaSearch color="#ef3e42" />
                    </li>
                    <li className="close" onClick={toggleMenu} id="close">
                      <FiX color="#ef3e42" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mobile-middle">
              <ul>
                <li>
                  <Link
                    to="/"
                    className={sectionLink === "FS" ? "active" : ""}
                    onClick={() => Sections("FS")}
                  >
                    Fiziki şəxslər üçün
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={sectionLink === "BU" ? "active" : ""}
                    onClick={() => Sections("BU")}
                  >
                    Biznes üçün
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mobile-content">
              <ul className="accordion">
                <li className="main-li">
                  <input type="radio" name="accordion" id="kartlar" checked />
                  <label htmlFor="kartlar">KARTLAR</label>
                  <ul className="child-ul">
                    <li>Bütün kartlar</li>
                    <li>Taksit kartlar</li>
                    <li>Debet kartlar</li>
                    <li>Digital kart</li>
                    <li>Taksit</li>
                    <li>Hədiyyə kartı</li>
                    <li>Kartın müddətinin uzadılması</li>
                    <li>Kartlar üzrə xidmətlər</li>
                    <li>Təhlükəsizlik qaydaları</li>
                    <li>3D secure</li>
                    <li>Kart sifarişi</li>
                  </ul>
                  <div className="card-img"></div>
                </li>

                <li className="main-li">
                  <input type="radio" name="accordion" id="kreditler" checked />
                  <label htmlFor="kreditler">KREDİTLƏR</label>
                  <ul className="child-ul">
                    <li style={{ color: "#ef3e42" }}>
                      Çoxdan gözlənilən nağd kredit endirimi!
                    </li>
                    <li>Bütün kreditlər</li>
                    <li>Nağd pul kediti</li>
                    <li>Mikro Biznes Keditləri</li>
                    <li>Təminatlı manat krediti</li>
                    <li>Əmanət təminatlı kredit</li>
                    <li>Avtomobil krediti</li>
                    <li>Daşınmaz əmlak təminatlı kredit</li>
                  </ul>
                  <div className="card-img"></div>
                </li>
                <p>İPOTEKALAR</p>
                <li className="main-li">
                  <input
                    type="radio"
                    name="accordion"
                    id="depozitler"
                    checked
                  />
                  <label htmlFor="depozitler">DEPOZİTLƏR</label>
                  <ul className="child-ul">
                    <li>Bütün depozitlər</li>
                    <li>Kapital depoziti</li>
                    <li>Müddətsiz depozit</li>
                    <li>Depozit seyfləri</li>
                  </ul>
                  <div className="card-img"></div>
                </li>
                <li className="main-li">
                  <input
                    type="radio"
                    name="accordion"
                    id="pulkocurmeleri"
                    checked
                  />
                  <label htmlFor="pulkocurmeleri">PUL KÖÇÜRMƏLƏRİ</label>
                  <ul className="child-ul">
                    <li>Birbank ilə istənilən karta pul köçürün!</li>
                    <li>Bütün pul köçürmələri</li>
                    <li>Xəzri</li>
                    <li>Zolotoya Korona</li>
                    <li>Western Union</li>
                  </ul>
                  <div className="card-img"></div>
                </li>
                <li className="main-li">
                  <input
                    type="radio"
                    name="accordion"
                    id="onlaynxidmetler"
                    checked
                  />
                  <label htmlFor="onlaynxidmetler">ONLAYN XİDMƏTLƏR</label>
                  <ul className="child-ul">
                    <li>Bütün online xidmətlər</li>
                    <li>Kart siafrişi</li>
                    <li>Kredot sifarişi</li>
                    <li>Kredit ödənişi</li>
                    <li>Kommunal ödənişləri</li>
                    <li>Onlayn növbə</li>
                    <li>Arayış və çıxarışların alınması</li>
                  </ul>
                  <div className="card-img"></div>
                </li>
                <p>KAMPANİYALAR</p>
                <p>FƏRDİ BANKÇILIQ</p>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
