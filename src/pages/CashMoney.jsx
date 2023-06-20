import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CashMoney = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    if (selectedOption === "") {
      document.getElementById("placeholderOption").style.display = "inline";
    } else {
      document.getElementById("placeholderOption").style.display = "none";
    }
  }, [selectedOption]);

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "");

    if (numericValue.length <= 7 && numericValue.charAt(0) !== "0") {
      setPhoneNumber(numericValue);
    }
  };

  const handlePrefixChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const isButtonDisabled = phoneNumber.length !== 7 || selectedOption === "";

  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="cash-up">
            <div className="cashup-content">
              <div className="content-image">
                <img
                  src="https://gw-onboarding.kapitalbank.az/v1/media/loan/images/CASH.png"
                  alt="card"
                  className="cash-img"
                />
              </div>
              <div className="content-info">
                <div className="info-up">
                  <p className="info-title">
                    <span>Nağd</span> pul krediti
                  </p>
                  <p className="info-text">
                    Gündəlik tələbat krediti şəxsi ehtiyaclarınızı qarşılayaraq
                    büdcənizə uyğun hissə-hissə ödəmə şansı tanıyan nağd pul
                    kreditidir.
                  </p>
                </div>
                <div className="info-bottom">
                  <div className="bottom-child">
                    <p className="chlid-bold">30 000 AZN-dək</p>
                    <p>Kredit məbləği</p>
                  </div>
                  <div className="bottom-child">
                    <p className="chlid-bold">59 ayadək</p>
                    <p>Kredit müddəti</p>
                  </div>
                  <div className="bottom-child">
                    <p className="chlid-bold">10.9%-dən</p>
                    <p>İllik faiz dərəcəsi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cash-middle">
          <div className="container">
            <div className="middle-content">
              <h2>
                Krediti <span>onlayn</span> dərhal əldə et!
              </h2>
              <div className="input-butons">
                <div className="input-option">
                  <div className="input-text">
                    <span>Mobil nömrə</span>
                  </div>
                  <select
                    name=""
                    id="prefixs"
                    value={selectedOption}
                    onChange={handlePrefixChange}
                  >
                    <option value="" disabled hidden id="placeholderOption">
                      (___)
                    </option>
                    <option value="010">010</option>
                    <option value="050">050</option>
                    <option value="051">051</option>
                    <option value="055">055</option>
                    <option value="070">070</option>
                    <option value="077">077</option>
                  </select>
                  <input
                    type="number"
                    placeholder="___ __ __"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </div>
                <Link
                  className={`buton ${isButtonDisabled ? "disabled" : ""}`}
                  id="submitButton"
                  disabled={isButtonDisabled}
                >
                  Davam et
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cash-bottom"></div>
      </div>
    </div>
  );
};

export default CashMoney;
