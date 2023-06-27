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
              <img
                src="https://www.kapitalbank.az/assets/static/img/qr-code.svg"
                alt=""
              />
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
