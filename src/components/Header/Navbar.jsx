import React from "react";
import { Link } from "react-router-dom";
import DropdownCredits from "./DropdownCredits";
import DropdownDepozit from "./DropdownDepozit";
import DropdownMoney from "./DropdowbMoney";
import DropdownOnline from "./DropdownOnline";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLinkClick = (tab) => {
    navigate(`/cards?tab=${tab}`);
  };
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="navmain">
            <ul className="nav-ul">
              <li className="ul-child">
                <Link to="/cards" className="li-link">
                  Kartlar
                </Link>
                <div className="cards-drown">
                  <div className="container">
                    <div className="cards-down-content">
                      <div className="card-down-left">
                        <div className="card-group-1">
                          <ul className="ul-group">
                            <li className="card-g-child">
                              <Link to="/cards?tab=Taksit">Taksit</Link>
                            </li>
                            <li className="card-g-child">
                              <Link to="cards?tab=Debet">Debet kartlar</Link>
                            </li>
                            <li className="card-g-child">
                              <Link to="cards?tab=Digital">Digital kart</Link>
                            </li>
                            <li className="card-g-child">
                              <Link to="/cards?tab=Hediye">Hədiyyə kartı</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="card-group-2">
                          <ul className="ul-group">
                            <li className="card-g-child">
                              <Link to="/cards">
                                Kartın müddətinin uzadılması
                              </Link>
                            </li>
                            <li className="card-g-child">
                              <Link to="/cards">Kartlar üzrə Xidmətlər</Link>
                            </li>
                            <li className="card-g-child">
                              <Link to="/cards">Təhlükəsizlik qaydaları</Link>
                            </li>
                            <li className="card-g-child">
                              <Link to="/cards">3D secure</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="card-group-3">
                          <ul className="ul-group">
                            <li className="card-g-child">
                              <Link to="/cards">Kart sifarişi</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-down-right">
                        <div className="down-right-main">
                          <div className="right-child-1">
                            <p className="child-title">
                              <strong>Birbank Cashback taksit</strong>
                            </p>
                            <p className="child-des">
                              Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən
                              başlayan keşbek, faizsiz və komissiyasız taksit
                              imkanı verən unikal bir kartdır.
                            </p>
                            <Link to="/product-details/5" className="btn">
                              Bir kliklə sifariş et
                            </Link>
                          </div>
                          <div className="right-child-2">
                            <img
                              src="https://www.kapitalbank.az/images/cards/D/birbank-cashback-debet1656680037.png?v=3"
                              width="269"
                              height="429"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="ul-child">
                <Link to="/" className="li-link">
                  Kreditlər
                </Link>

                <div className="li-drop">
                  <DropdownCredits />
                </div>
              </li>
              <li className="ul-child">
                <Link to="/" className="li-link">
                  İpotekalar
                </Link>
              </li>
              <li className="ul-child">
                <Link to="/" className="li-link">
                  Depozitlər
                </Link>
                <div className="drop-depozit">
                  <DropdownDepozit />
                </div>
              </li>
              <li className="ul-child">
                <Link to="/" className="li-link">
                  Pul Köçürmələri
                </Link>
                <div className="drop-money">
                  <DropdownMoney />
                </div>
              </li>
              <li className="ul-child">
                <Link to="/" className="li-link">
                  Onlayn Xidmətlər
                </Link>
                <div className="drop-online">
                  <DropdownOnline />
                </div>
              </li>
              <li className="ul-child">
                <Link to="/" className="li-link">
                  Kampaniyalar
                </Link>
              </li>
              <li className="ul-child">
                <Link to="/" className="li-link">
                  Fərdi Bankçılıq
                </Link>
              </li>
            </ul>
            <div className="right-nav">
              <Link to="https://birbank.az/">
                <div className="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="130"
                    height="40"
                    viewBox="0 0 130 40"
                    fill="none"
                  >
                    <path
                      d="M9.02649 0.228437L0.833418 8.56269C0.302059 9.07182 0 9.77797 0 10.5151V39.2722C0 39.9185 0.778298 40.2417 1.23469 39.7857L9.56447 31.4293C10.1002 30.8914 10.4023 30.1609 10.4023 29.3994V0.819472C10.4023 0.100047 9.54462 -0.267413 9.02649 0.228437Z"
                      fill="#fff"
                    />
                    <path
                      d="M32.1902 11.7653C30.2588 11.7653 28.8654 12.4737 27.9063 13.6226V5.60486H24.5241V27.834L27.6968 27.8251V25.8948C28.6581 27.1035 30.261 28.1328 32.1924 28.1328C36.2559 28.1328 39.2787 24.5733 39.2787 20.0155C39.2765 15.4577 36.2537 11.7653 32.1902 11.7653ZM31.5641 25.1688C29.8928 25.1688 28.5677 24.0553 27.9041 22.4195C27.6042 21.6779 27.4389 20.8301 27.4389 19.9292C27.4389 19.0282 27.6042 18.1782 27.9041 17.4388C28.5677 15.8008 29.8928 14.6895 31.5641 14.6895C33.9916 14.6895 35.826 17.036 35.826 19.9314C35.826 22.8268 33.9938 25.1688 31.5641 25.1688Z"
                      fill="#fff"
                    />
                    <path
                      d="M45.5117 12.0265H42.1295V27.8273H45.5117V12.0265Z"
                      fill="#fff"
                    />
                    <path
                      d="M43.7677 9.44322C44.9671 9.44322 45.9394 8.46701 45.9394 7.26281C45.9394 6.0586 44.9671 5.0824 43.7677 5.0824C42.5683 5.0824 41.5959 6.0586 41.5959 7.26281C41.5959 8.46701 42.5683 9.44322 43.7677 9.44322Z"
                      fill="#fff"
                    />
                    <path
                      d="M49.756 27.8207H53.1404L53.1999 16.9098L53.2263 12.0332H49.7891L49.756 27.8207Z"
                      fill="#fff"
                    />
                    <path
                      d="M59.9378 15.2142C59.9378 15.2142 57.9689 15.2873 56.6592 16.1262C53.1646 18.3664 53.1536 21.6514 53.1536 24.6973C53.1536 26.196 51.4581 29.3194 51.4316 26.2402C51.4184 24.6641 50.6291 25.0847 51.2486 22.0476C51.8682 19.0128 53.1293 14.4372 57.0362 12.3631C58.5069 11.5817 59.9223 11.7676 59.9223 11.7676L59.9378 15.2142Z"
                      fill="#fff"
                    />
                    <path
                      d="M119.371 5.60486H115.988V27.8273H119.371V5.60486Z"
                      fill="#fff"
                    />
                    <path
                      d="M116.745 25.4057C116.745 25.4057 117.874 13.1732 128.521 11.7654L128.56 15.2142C124.68 15.5883 119.377 18.6298 119.377 24.8456C119.377 25.813 118.87 26.0211 118.718 27.15C116.901 25.9613 116.745 25.4057 116.745 25.4057Z"
                      fill="#fff"
                    />
                    <path
                      d="M121.22 17.6425L126.272 27.8273H130L123.763 16.2811L121.22 17.6425Z"
                      fill="#fff"
                    />
                    <path
                      d="M70.0733 11.7653C68.1418 11.7653 66.7484 12.4737 65.7893 13.6226V5.60486H62.4071V27.8318H65.5799V25.8948C66.5412 27.1035 68.144 28.1328 70.0755 28.1328C74.1389 28.1328 77.1617 24.5733 77.1617 20.0155C77.1595 15.4577 74.1367 11.7653 70.0733 11.7653ZM69.4493 25.1688C67.778 25.1688 66.453 24.0553 65.7893 22.4195C65.4895 21.6779 65.3241 20.8301 65.3241 19.9292C65.3241 19.0282 65.4895 18.1782 65.7893 17.4388C66.453 15.8008 67.778 14.6895 69.4493 14.6895C71.8768 14.6895 73.7112 17.036 73.7112 19.9314C73.7112 22.8268 71.8768 25.1688 69.4493 25.1688Z"
                      fill="#fff"
                    />
                    <path
                      d="M79.5341 20.0155C79.5341 24.5734 82.5569 28.1329 86.6204 28.1329C88.5518 28.1329 90.1547 27.1035 91.116 25.8949L91.1402 27.8274H94.2887V12.0266H90.9043V13.6204C89.943 12.4715 88.5518 11.7632 86.6204 11.7632C82.5547 11.7654 79.5341 15.4577 79.5341 20.0155ZM82.9824 19.927C82.9824 17.0316 84.8168 14.6852 87.2443 14.6852C88.9156 14.6852 90.2407 15.7986 90.9043 17.4345C91.2042 18.176 91.3695 19.0238 91.3695 19.9248C91.3695 20.8257 91.2042 21.6757 90.9043 22.4151C90.2407 24.0532 88.9156 25.1644 87.2443 25.1644C84.8168 25.1688 82.9824 22.8224 82.9824 19.927Z"
                      fill="#fff"
                    />
                    <path
                      d="M109.061 18.8047C109.061 23.0415 112.463 26.7316 112.463 19.0769C112.463 13.9081 109.332 11.834 106.201 11.834C102.526 11.834 100.213 15.3868 99.6685 18.9397C99.1239 22.083 99.8052 24.1328 99.8052 25.6359C99.8052 28.7792 101.576 24.2701 101.576 22.767C101.576 17.5739 102.801 14.7028 105.796 14.7028C107.427 14.705 109.061 15.4732 109.061 18.8047Z"
                      fill="#fff"
                    />
                    <path
                      d="M98.1714 27.8318H101.573V14.7914V12.0288H98.3081L98.1714 27.8318Z"
                      fill="#fff"
                    />
                    <path
                      d="M112.463 27.8318V18.891L109.061 18.7538V27.8318H112.463Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
