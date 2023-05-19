import React from "react";

const DropdownMoney = () => {
  return (
    <div>
      <div className="moneydown-content">
        <div className="container">
          <div className="content-main">
            <div className="left-content">
              <div className="left-parent">
                <ul className="left-ul">
                  <li className="ul-child">
                    Birbank ilə istənilən karta pul köçürün!
                  </li>
                  <li className="ul-child">Xəzri</li>
                  <li className="ul-child">Zolotaya Korona</li>
                  <li className="ul-child"> Western Union </li>
                </ul>
              </div>
            </div>
            <div className="right-content">
              <div className="right-parent">
                <div className="right-left-child">
                  <p className="child-up">Birbank</p>
                  <p className="child-middle">
                    Birbankla istənilən karta pul köçürün! Artıq Birbankla
                    telefonunuzdan istənilən bank kartına asanlıqla pul göndərə
                    bilərsiniz.
                  </p>
                  <a href="#" className="btn">
                    Daha ətraflı
                  </a>
                </div>
                <div className="right-right-child">
                  <img
                    src="https://www.kapitalbank.az/assets/static/img/menu/bblogo.png"
                    width="466"
                    height="444"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMoney;
