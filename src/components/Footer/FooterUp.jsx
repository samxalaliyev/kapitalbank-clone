import React from "react";
import { Link } from "react-router-dom";

const FooterUp = () => {
  return (
    <div>
      <div className="footer-main">
        <div className="container">
          <div className="footer-rows">
            <div className="row">
              <h3>Kapital Bank</h3>
              <ul>
                <li>
                  <Link>Bank haqqında</Link>
                </li>
                <li>
                  <Link>İnsan resursları</Link>
                </li>
                <li>
                  <Link>Xidmət şəbəkəsi</Link>
                </li>
                <li>
                  <Link>Birbank</Link>
                </li>
                <li>
                  <Link>Xəbərlər</Link>
                </li>
                <li>
                  <Link>Təklif və şikayətlər</Link>
                </li>
              </ul>
            </div>
            <div className="row">
              <h3>Məhsullar</h3>
              <ul>
                <li>
                  <Link to="/cards">Kartlar</Link>
                </li>
                <li>
                  <Link>Kreditlər</Link>
                </li>
                <li>
                  <Link>Depozitlər</Link>
                </li>
                <li>
                  <Link>Sığorta</Link>
                </li>
                <li>
                  <Link>Pul köçürmələri</Link>
                </li>
                <li>
                  <Link>Fərdi Bankçılıq</Link>
                </li>
                <li>
                  <Link>Onlayn Xidmətlər</Link>
                </li>
              </ul>
            </div>
            <div className="row">
              <h3>Çevik keçidlər</h3>
              <ul>
                <li>
                  <Link>Birbank kartı sifariş et</Link>
                </li>
                <li>
                  <Link>Kredit sifariş et</Link>
                </li>
                <li>
                  <Link>Debet kart sifariş et</Link>
                </li>
                <li>
                  <Link>Onlayn ödənişlər</Link>
                </li>
              </ul>
            </div>
            <div className="row">
              <h3>Digər</h3>
              <ul>
                <li>
                  <Link>Onlayn növbə</Link>
                </li>
                <li>
                  <Link>Tariflər</Link>
                </li>
                <li>
                  <Link>Necə etməli</Link>
                </li>
                <li>
                  <Link>FAQ</Link>
                </li>
                <li>
                  <Link>Bloqlar</Link>
                </li>
              </ul>
            </div>
            <div className="download-links">
              <h3>
                Birbank tətbiqini yükləmək üçün <br /> QR-kodunu oxudun
              </h3>
              <svg
                width="180"
                height="180"
                viewBox="-1 -1 31 31"
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="crispEdges"
                id="qr code"
              >
                <rect
                  id="qr background"
                  fill-opacity="1"
                  fill="rgb(255, 255, 255)"
                  x="-1"
                  y="-1"
                  width="31"
                  height="31"
                ></rect>
                <path
                  fill-opacity="1"
                  fill="rgb(0, 0, 0)"
                  id="qr dark pixels"
                  fill-rule="evenodd"
                  d="M 9 0 L 10 0 L 10 2 L 11 2 L 11 1 L 13 1 L 13 2 L 12 2 L 12 4 L 11 4 L 11 3 L 10 3 L 10 4 L 8 4 L 8 3 L 9 3 L 9 2 L 8 2 L 8 1 L 9 1 z M 13 0 L 14 0 L 14 1 L 13 1 z M 16 0 L 21 0 L 21 2 L 20 2 L 20 1 L 18 1 L 18 2 L 17 2 L 17 1 L 16 1 z M 15 1 L 16 1 L 16 2 L 17 2 L 17 3 L 15 3 L 15 5 L 12 5 L 12 4 L 13 4 L 13 3 L 14 3 L 14 2 L 15 2 z M 19 2 L 20 2 L 20 3 L 19 3 z M 17 3 L 18 3 L 18 4 L 21 4 L 21 5 L 17 5 L 17 7 L 16 7 L 16 6 L 15 6 L 15 5 L 16 5 L 16 4 L 17 4 z M 10 4 L 11 4 L 11 7 L 10 7 z M 8 5 L 9 5 L 9 7 L 8 7 z M 12 6 L 13 6 L 13 8 L 14 8 L 14 6 L 15 6 L 15 7 L 16 7 L 16 9 L 12 9 z M 18 6 L 19 6 L 19 7 L 18 7 z M 20 6 L 21 6 L 21 8 L 20 8 L 20 10 L 18 10 L 18 11 L 17 11 L 17 10 L 16 10 L 16 9 L 17 9 L 17 8 L 19 8 L 19 7 L 20 7 z M 0 8 L 5 8 L 5 9 L 6 9 L 6 10 L 7 10 L 7 9 L 6 9 L 6 8 L 11 8 L 11 9 L 10 9 L 10 11 L 11 11 L 11 10 L 13 10 L 13 11 L 12 11 L 12 13 L 11 13 L 11 12 L 10 12 L 10 13 L 11 13 L 11 18 L 10 18 L 10 19 L 9 19 L 9 20 L 8 20 L 8 19 L 6 19 L 6 20 L 5 20 L 5 19 L 4 19 L 4 18 L 3 18 L 3 16 L 2 16 L 2 18 L 1 18 L 1 21 L 0 21 L 0 10 L 1 10 L 1 14 L 2 14 L 2 15 L 3 15 L 3 14 L 5 14 L 5 15 L 4 15 L 4 16 L 5 16 L 5 18 L 8 18 L 8 17 L 10 17 L 10 15 L 9 15 L 9 16 L 8 16 L 8 14 L 9 14 L 9 10 L 8 10 L 8 14 L 7 14 L 7 13 L 6 13 L 6 12 L 7 12 L 7 11 L 6 11 L 6 12 L 5 12 L 5 13 L 4 13 L 4 12 L 2 12 L 2 11 L 4 11 L 4 10 L 3 10 L 3 9 L 0 9 z M 21 8 L 22 8 L 22 9 L 23 9 L 23 8 L 24 8 L 24 9 L 25 9 L 25 10 L 23 10 L 23 11 L 22 11 L 22 10 L 21 10 z M 25 8 L 26 8 L 26 9 L 25 9 z M 27 8 L 28 8 L 28 9 L 27 9 z M 28 9 L 29 9 L 29 10 L 28 10 z M 14 10 L 16 10 L 16 11 L 17 11 L 17 12 L 15 12 L 15 14 L 16 14 L 16 13 L 17 13 L 17 12 L 18 12 L 18 13 L 19 13 L 19 11 L 22 11 L 22 12 L 20 12 L 20 13 L 23 13 L 23 14 L 24 14 L 24 15 L 25 15 L 25 16 L 24 16 L 24 17 L 25 17 L 25 18 L 24 18 L 24 19 L 25 19 L 25 21 L 26 21 L 26 20 L 27 20 L 27 19 L 28 19 L 28 20 L 29 20 L 29 22 L 27 22 L 27 23 L 25 23 L 25 25 L 24 25 L 24 26 L 25 26 L 25 25 L 26 25 L 26 24 L 29 24 L 29 26 L 28 26 L 28 28 L 27 28 L 27 27 L 26 27 L 26 28 L 27 28 L 27 29 L 22 29 L 22 28 L 20 28 L 20 27 L 21 27 L 21 26 L 23 26 L 23 25 L 20 25 L 20 24 L 19 24 L 19 22 L 20 22 L 20 19 L 22 19 L 22 18 L 18 18 L 18 19 L 17 19 L 17 18 L 16 18 L 16 17 L 17 17 L 17 16 L 18 16 L 18 17 L 19 17 L 19 16 L 20 16 L 20 17 L 23 17 L 23 15 L 20 15 L 20 14 L 19 14 L 19 15 L 18 15 L 18 14 L 17 14 L 17 15 L 16 15 L 16 17 L 15 17 L 15 15 L 13 15 L 13 14 L 14 14 L 14 13 L 13 13 L 13 12 L 14 12 zM 21 21 L 24 21 L 24 24 L 21 24 z M 24 27 L 25 27 L 25 28 L 24 28 z M 23 11 L 24 11 L 24 12 L 23 12 z M 25 11 L 26 11 L 26 12 L 27 12 L 27 13 L 25 13 z M 27 11 L 28 11 L 28 12 L 27 12 z M 5 13 L 6 13 L 6 14 L 5 14 z M 12 13 L 13 13 L 13 14 L 12 14 z M 24 13 L 25 13 L 25 14 L 24 14 z M 28 13 L 29 13 L 29 14 L 28 14 z M 6 14 L 7 14 L 7 15 L 6 15 z M 25 14 L 27 14 L 27 15 L 25 15 z M 12 15 L 13 15 L 13 16 L 14 16 L 14 18 L 16 18 L 16 20 L 14 20 L 14 19 L 12 19 L 12 21 L 11 21 L 11 20 L 10 20 L 10 19 L 11 19 L 11 18 L 13 18 L 13 17 L 12 17 z M 27 15 L 28 15 L 28 16 L 27 16 z M 6 16 L 8 16 L 8 17 L 6 17 z M 25 16 L 27 16 L 27 19 L 26 19 L 26 17 L 25 17 z M 28 17 L 29 17 L 29 18 L 28 18 z M 2 19 L 4 19 L 4 20 L 3 20 L 3 21 L 2 21 z M 18 19 L 19 19 L 19 22 L 18 22 L 18 23 L 17 23 L 17 24 L 15 24 L 15 23 L 14 23 L 14 24 L 13 24 L 13 25 L 12 25 L 12 23 L 13 23 L 13 22 L 12 22 L 12 21 L 14 21 L 14 22 L 16 22 L 16 20 L 18 20 z M 4 20 L 5 20 L 5 21 L 4 21 z M 6 20 L 8 20 L 8 21 L 6 21 z M 9 20 L 10 20 L 10 21 L 11 21 L 11 26 L 13 26 L 13 27 L 12 27 L 12 29 L 8 29 L 8 24 L 10 24 L 10 23 L 8 23 L 8 21 L 9 21 zM 9 25 L 10 25 L 10 27 L 9 27 z M 10 27 L 11 27 L 11 28 L 10 28 z M 22 22 L 23 22 L 23 23 L 22 23 z M 14 24 L 15 24 L 15 25 L 14 25 z M 17 24 L 18 24 L 18 25 L 17 25 z M 16 25 L 17 25 L 17 26 L 19 26 L 19 25 L 20 25 L 20 27 L 16 27 L 16 29 L 15 29 L 15 28 L 14 28 L 14 27 L 15 27 L 15 26 L 16 26 z M 17 28 L 18 28 L 18 29 L 17 29 z M 19 28 L 20 28 L 20 29 L 19 29 z"
                ></path>
                <path
                  id="qr squares"
                  d="M0,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M22,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM23,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM24,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M0,22h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,23h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,24h3h0v0v3v0h0h-3h0v0v-3v0h0z"
                  fill-rule="evenodd"
                  fill-opacity="1"
                  fill="rgb(0, 0, 0)"
                ></path>
              </svg>
              <ul className="mobile">
                <li>
                  <Link to="https://play.google.com/store/apps/details?id=az.kapitalbank.mbanking&pli=1">
                    <img
                      src="https://www.kapitalbank.az/assets/static/img/play-store.svg"
                      alt=""
                    />
                    <p>
                      <strong>Google Play</strong> Mobil tətbiqi yüklə
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="https://apps.apple.com/us/app/birbank/id1293207342">
                    <img
                      src="https://www.kapitalbank.az/assets/static/img/app-store.svg"
                      alt=""
                    />
                    <p>
                      <strong>App Store </strong> Mobil tətbiqi yüklə
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="https://appgallery.huawei.com/#/app/C102156391">
                    <img
                      src="https://www.kapitalbank.az/assets/static/img/app-gallery.svg"
                      alt=""
                    />
                    <p>
                      <strong>App Gallery</strong> Mobil tətbiqi yüklə
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterUp;
