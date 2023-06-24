import React, { useState } from "react";
import Logo from "../../Logo--main.svg";
import { FaSearch } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchMenu = () => {
    setIsSearchOpen(!isSearchOpen);
  };
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

  const [activeItem, setActiveItem] = useState(null);

  const handleMenuClick = (item) => {
    setActiveItem((prevItem) => (prevItem === item ? null : item));
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
              <li>
                <Link to="/">Fiziki şəxslər üçün</Link>
              </li>
              <li>
                <Link to="/">Biznes üçün</Link>
              </li>
              <li>
                <Link to="/">
                  <IoLocationSharp color="#ef3e42" fontSize="16px" /> Xidmət
                  şəbəkəsi
                </Link>
              </li>
              <li>
                <Link to="/">EN</Link>
              </li>
              <li>
                <Link to="/">RU</Link>
              </li>
              <li onClick={searchMenu}>
                <FaSearch color="#ef3e42" />
              </li>
            </ul>
            <ul className="mobile-ul">
              <li className="birbank-icon">
                <Link to="https://birbank.az/">
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
        <div className={`header-search${isSearchOpen ? " open" : ""}`}>
          <div className="search-top">
            <div className="container">
              <Link onClick={searchMenu} to="/">
                <img
                  class="top-logo"
                  src="https://www.kapitalbank.az/assets/static/img/small-logo.svg"
                  alt=""
                  height="37"
                />
              </Link>
              <form className="main-search">
                <HiSearch />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Sorğunuzu daxil edin"
                />
                <button>Axtar</button>
                <Link onClick={searchMenu}>
                  <img
                    src="https://www.kapitalbank.az/assets/static/img/close.svg"
                    alt=""
                  />
                </Link>
              </form>
            </div>
          </div>
          <div className="search-bottom">
            <div className="container">
              <ul>
                <li onClick={searchMenu}>
                  <Link to="/product-details/5">Birbank kartı al</Link>
                </li>
                <li onClick={searchMenu}>
                  <Link to="/cash">kredit əldə et</Link>
                </li>
                <li onClick={searchMenu}>
                  <Link to="/cards">kart sifarişi</Link>
                </li>
                <li onClick={searchMenu}>
                  <Link to="/cards?tab=Taksit">taksit kartı</Link>
                </li>
              </ul>
            </div>
          </div>
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
                  <div className="mobile-search">
                    <ul className="search-close">
                      <li className="mobile-search-button" onClick={searchMenu}>
                        <FaSearch color="#ef3e42" />
                      </li>
                      <li className="close" onClick={toggleMenu} id="close">
                        <FiX color="#ef3e42" />
                      </li>
                      <div
                        className={`header-search${
                          isSearchOpen ? " open" : ""
                        }`}
                      >
                        <div className="search-top">
                          <div className="container">
                            <Link onClick={searchMenu} to="/"></Link>
                            <form className="main-search">
                              <HiSearch />
                              <input
                                type="text"
                                className="search-input"
                                placeholder="Sorğunuzu daxil edin"
                              />
                              <button type="submit">Axtar</button>
                              <div
                                className="close-search"
                                onClick={searchMenu}
                                id="close"
                              >
                                <FiX color="#ef3e42" className="close-icon" />
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="search-bottom">
                          <div className="container">
                            <ul className="bottom-ul">
                              <li
                                className="bottom-li"
                                onClick={() => {
                                  toggleMenu();
                                  searchMenu();
                                }}
                              >
                                <Link
                                  className="bottom-link"
                                  to="/product-details/5"
                                >
                                  Birbank kartı al
                                </Link>
                              </li>
                              <li
                                className="bottom-li"
                                onClick={() => {
                                  toggleMenu();
                                  searchMenu();
                                }}
                              >
                                <Link className="bottom-link" to="/cash">
                                  kredit əldə et
                                </Link>
                              </li>
                              <li
                                className="bottom-li"
                                onClick={() => {
                                  toggleMenu();
                                  searchMenu();
                                }}
                              >
                                <Link className="bottom-link" to="/cards">
                                  kart sifarişi
                                </Link>
                              </li>
                              <li
                                className="bottom-li"
                                onClick={() => {
                                  toggleMenu();
                                  searchMenu();
                                }}
                              >
                                <Link
                                  className="bottom-link"
                                  to="/cards?tab=Taksit"
                                >
                                  taksit kartı
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
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
                <li
                  className={`main-li ${
                    activeItem === "item1" ? "active" : ""
                  }`}
                >
                  <button
                    className="menu-btn"
                    onClick={() => handleMenuClick("item1")}
                  >
                    <span className="menu-icon">
                      {activeItem === "item1" ? "-" : "+"}
                    </span>
                    KARTLAR
                  </button>
                  {activeItem === "item1" && (
                    <ul className="child-ul">
                      <li>
                        <Link to="/cards?tab=all" onClick={toggleMenu}>
                          Bütün kartlar
                        </Link>
                      </li>
                      <li>
                        <Link to="/cards?tab=Taksit" onClick={toggleMenu}>
                          Taksit kartlar
                        </Link>
                      </li>
                      <li>
                        <Link to="/cards?tab=Debet" onClick={toggleMenu}>
                          Debet kartlar
                        </Link>
                      </li>
                      <li>
                        <Link to="/cards?tab=Digital" onClick={toggleMenu}>
                          Digital kart
                        </Link>
                      </li>

                      <li>
                        <Link to="/cards?tab=Hediye" onClick={toggleMenu}>
                          Hədiyyə kartı
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Kartın müddətinin uzadılması
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Kartlar üzrə xidmətlər
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Təhlükəsizlik qaydaları
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          3D secure
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Kart sifarişi
                        </Link>
                      </li>
                      <div className="card-img">
                        <div className="card-content">
                          <div className="img-content">
                            <img
                              src="https://www.kapitalbank.az/images/cards/D/birbank-cashback-debet1656680037.png?v=3"
                              alt="Birbank Cashback taksit"
                            />
                          </div>
                          <div className="text-content">
                            <p className="img-title">Birbank Cashback taksit</p>
                            <p className="img-text">
                              Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən
                              başlayan keşbek, faizsiz və komissiyasız taksit
                              imkanı verən unikal bir kartdır.
                            </p>
                            <Link to="/"> Bir kliklə sifariş et</Link>
                          </div>
                        </div>
                      </div>
                    </ul>
                  )}
                </li>

                {/* mobile menu */}

                <li
                  className={`main-li ${
                    activeItem === "item2" ? "active" : ""
                  }`}
                >
                  <button
                    className="menu-btn"
                    onClick={() => handleMenuClick("item2")}
                  >
                    <span className="menu-icon">
                      {activeItem === "item2" ? "-" : "+"}
                    </span>
                    KREDITLƏR
                  </button>
                  {activeItem === "item2" && (
                    <ul className="child-ul">
                      <li style={{ color: "#ef3e42" }}>
                        <Link to="/" onClick={toggleMenu}>
                          Çoxdan gözlənilən nağd kredit endirimi!
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Bütün kreditlər
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Nağd pul kediti
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Mikro Biznes Keditləri
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Təminatlı manat krediti
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Əmanət təminatlı kredit
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Avtomobil krediti
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Daşınmaz əmlak təminatlı kredit
                        </Link>
                      </li>
                      <div className="card-img">
                        <div className="card-content">
                          <div className="img-content">
                            <img
                              src="https://www.kapitalbank.az/assets/static/img/main-page/daily-loan3.png"
                              alt="Nağd pul krediti"
                            />
                          </div>
                          <div className="text-content">
                            <p className="img-title"> Nağd pul krediti</p>
                            <p className="img-text">
                              30000 AZN dək Nağd pul krediti
                            </p>
                            <Link to="/"> Bir kliklə sifariş et</Link>
                          </div>
                        </div>
                      </div>
                    </ul>
                  )}
                </li>

                {/* mobile menu */}

                <p className="no-childs">
                  <Link to="/" onClick={toggleMenu}>
                    İPOTEKALAR
                  </Link>
                </p>

                {/* mobile menu */}

                <li
                  className={`main-li ${
                    activeItem === "item3" ? "active" : ""
                  }`}
                >
                  <button
                    className="menu-btn"
                    onClick={() => handleMenuClick("item3")}
                  >
                    <span className="menu-icon">
                      {activeItem === "item3" ? "-" : "+"}
                    </span>
                    DEPOZİTLƏR
                  </button>
                  {activeItem === "item3" && (
                    <ul className="child-ul">
                      <li>
                        <Link to="/deposits" onClick={toggleMenu}>
                          Bütün depozitlər
                        </Link>
                      </li>
                      <li>
                        <Link to="/deposits" onClick={toggleMenu}>
                          Kapital depoziti
                        </Link>
                      </li>
                      <li>
                        <Link to="/deposits" onClick={toggleMenu}>
                          Müddətsiz depozit
                        </Link>
                      </li>
                      <li>
                        <Link to="/deposits" onClick={toggleMenu}>
                          Depozit seyfləri
                        </Link>
                      </li>
                      <div className="card-img">
                        <div className="card-content">
                          <div className="img-content">
                            <img
                              src="https://www.kapitalbank.az/assets/static/img/menu/deposits.png"
                              alt="Kapital depoziti"
                            />
                          </div>
                          <div className="text-content">
                            <p className="img-title">Kapital depoziti</p>
                            <p className="img-text">
                              Yüksək faiz əldə etməklə yanaşı müddətin
                              yarısınadək məbləğı artırın.
                            </p>
                            <Link to="/deposits"> Bir kliklə sifariş et</Link>
                          </div>
                        </div>
                      </div>
                    </ul>
                  )}
                </li>

                {/* mobile menu */}
                <li
                  className={`main-li ${
                    activeItem === "item4" ? "active" : ""
                  }`}
                >
                  <button
                    className="menu-btn"
                    onClick={() => handleMenuClick("item4")}
                  >
                    <span className="menu-icon">
                      {activeItem === "item4" ? "-" : "+"}
                    </span>
                    PUL KÖÇÜRMƏLƏRİ
                  </button>
                  {activeItem === "item4" && (
                    <ul className="child-ul">
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Birbank ilə istənilən karta pul köçürün!
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Bütün pul köçürmələri
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Xəzri
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Zolotoya Korona
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Western Union
                        </Link>
                      </li>
                      <div className="card-img">
                        <div className="card-content">
                          <div className="img-content">
                            <img
                              src="https://www.kapitalbank.az/assets/static/img/menu/bblogo.png"
                              alt="Birbank"
                            />
                          </div>
                          <div className="text-content">
                            <p className="img-title"> Birbank </p>
                            <p className="img-text">
                              Birbankla istənilən karta pul köçürün! Artıq
                              Birbankla telefonunuzdan istənilən bank kartına
                              asanlıqla pul göndərə bilərsiniz.
                            </p>
                            <Link to="/"> Daha ətraflı</Link>
                          </div>
                        </div>
                      </div>
                    </ul>
                  )}
                </li>
                {/* mobile menu */}

                <li
                  className={`main-li ${
                    activeItem === "item5" ? "active" : ""
                  }`}
                >
                  <button
                    className="menu-btn"
                    onClick={() => handleMenuClick("item5")}
                  >
                    <span className="menu-icon">
                      {activeItem === "item5" ? "-" : "+"}
                    </span>
                    ONLAYN XİDMƏTLƏR
                  </button>
                  {activeItem === "item5" && (
                    <ul className="child-ul">
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Bütün online xidmətlər
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Kart siafrişi
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Kredit sifarişi
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Kredit ödənişi
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Kommunal ödənişləri
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Onlayn növbə
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Arayış və çıxarışların alınması
                        </Link>
                      </li>
                      <div className="card-img">
                        <div className="card-content">
                          <div className="img-content">
                            <img
                              src="https://www.kapitalbank.az/images/cards/D/birbank-cashback-debet1656680037.png?v=3"
                              alt="Birbank Cashback taksit"
                            />
                          </div>
                          <div className="text-content">
                            <p className="img-title">Birbank Cashback taksit</p>
                            <p className="img-text">
                              Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən
                              başlayan keşbek, faizsiz və komissiyasız taksit
                              imkanı verən unikal bir kartdır.
                            </p>
                            <Link to="/"> Bir kliklə sifariş et</Link>
                          </div>
                        </div>
                      </div>
                    </ul>
                  )}
                </li>
                {/* mobile menu */}
                <p className="no-childs">
                  <Link to="/" onClick={toggleMenu}>
                    KAMPANİYALAR
                  </Link>
                </p>
                <p className="no-childs">
                  <Link to="/" onClick={toggleMenu}>
                    FƏRDİ BANKÇILIQ
                  </Link>
                </p>
              </ul>
              <hr />
              <div className="mobile-footer">
                <ul>
                  <li>
                    <Link to="/">Bank haqqında</Link>
                  </li>
                  <li>
                    <Link to="/">İnsan resusları</Link>
                  </li>
                  <li>
                    <Link to="/">Xidmət şəbəkəsi</Link>
                  </li>
                  <li>
                    <Link to="/">Birbank</Link>
                  </li>
                  <li>
                    <Link to="/">Xəbərlər</Link>
                  </li>
                  <li>
                    <Link to="/">Sığortalar</Link>
                  </li>
                  <li>
                    <Link to="/">təklif və şikayətlər</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/">Kart sifarişi</Link>
                  </li>
                  <li>
                    <Link to="/">Kredit sifarişi</Link>
                  </li>
                  <li>
                    <Link to="/">Kredit ödənişi</Link>
                  </li>
                  <li>
                    <Link to="/">Onlayn ödənişlər</Link>
                  </li>
                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/">Tariflər</Link>
                  </li>
                  <li>
                    <Link to="/">ATM xidmətləri</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
