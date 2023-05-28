import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const MainCurrency = () => {
  const RenderCurrencyInfo = () => {
    const [currencyData, setCurrencyData] = useState(null);

    useEffect(() => {
      fetchCurrencyData();
    }, []);

    const fetchCurrencyData = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/AZN"
        );
        setCurrencyData(response.data.rates);
      } catch (error) {
        console.error("API hatası:", error);
      }
    };

    if (!currencyData) {
      return <p>Veri yükleniyor...</p>;
    }

    const usdBuy = (1 / currencyData.USD).toFixed(3);
    const usdSell = ((1 / currencyData.USD) * 1.08).toFixed(3); // Örnek olarak %10 fark
    const euroBuy = (1 / currencyData.EUR).toFixed(3);
    const euroSell = ((1 / currencyData.EUR) * 1.08).toFixed(3); // Örnek olarak %10 fark

    return (
      <div>
        <div className="left-text">
          <h2>
            <span>Valyuta</span> kalkulyatoru
          </h2>
          <p>Bəzi filiallar üzrə fərqli məzənnələr təyin edilə bilər</p>
        </div>
        <table className="left-table">
          <tr>
            <td className="table-head">Valyuta</td>
            <td className="table-head">Alış</td>
            <td className="table-head ">Satış</td>
            <td></td>
          </tr>
          <tr>
            <td className="table-data">USD</td>
            <td className="table-data">{usdBuy} </td>
            <td className="table-data">{usdSell}</td>
            <td className="table-data"></td>
          </tr>
          <tr>
            <td className="table-data">EUR</td>
            <td className="table-data">{euroBuy}</td>
            <td className="table-data">{euroSell}</td>
            <td className="table-data"></td>
          </tr>
        </table>
        <Link className="more-info">
          Daha ətraflı <FiArrowRight />
        </Link>
      </div>
    );
  };

  const CurrencyConverter = () => {
    const [amount, setAmount] = useState("100");
    const [baseCurrency, setBaseCurrency] = useState("AZN");
    const [exchangeRates, setExchangeRates] = useState({});

    useEffect(() => {
      const fetchExchangeRates = async () => {
        try {
          const response = await fetch(
            "https://api.exchangerate-api.com/v4/latest/AZN"
          );
          const data = await response.json();
          setExchangeRates(data.rates);
        } catch (error) {
          console.error("Error fetching exchange rates:", error);
        }
      };

      fetchExchangeRates();
    }, []);

    const handleAmountChange = (e) => {
      const value = e.target.value;
      setAmount(value);
    };

    const handleBaseCurrencyChange = (e) => {
      const selectedBaseCurrency = e.target.value;
      setBaseCurrency(selectedBaseCurrency);
    };

    const convertCurrency = (currency) => {
      if (amount !== "") {
        const convertedValue =
          parseFloat(amount) *
          (exchangeRates[currency] / exchangeRates[baseCurrency]);
        return convertedValue.toFixed(2);
      }
      return "";
    };

    return (
      <div>
        <div className="right-content">
          <div className="right-top">
            <div>
              <div className="radio-group">
                <input type="checkbox" id="radio-btn" className="check-btn" />
                <label htmlFor="radio-btn">Mən satıram</label>
                <label htmlFor="radio-btn">Mən alıram</label>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  className="input-main"
                />
                <select
                  value={baseCurrency}
                  onChange={handleBaseCurrencyChange}
                  className="select-btn"
                >
                  <option value="AZN">AZN</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
            <div>
              <p>Məbləği daxil edin</p>
            </div>
          </div>

          <div className="right-bottom">
            <table>
              <tbody>
                {baseCurrency !== "AZN" && (
                  <tr>
                    <td>{convertCurrency("AZN")}</td>
                    <td>AZN</td>
                  </tr>
                )}
                {baseCurrency !== "USD" && (
                  <tr>
                    <td>{convertCurrency("USD")}</td>
                    <td>USD</td>
                  </tr>
                )}
                {baseCurrency !== "EUR" && (
                  <tr>
                    <td>{convertCurrency("EUR")}</td>
                    <td>EUR</td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* {baseCurrency !== "AZN" && <p>{convertCurrency("AZN")} AZN</p>}
            {baseCurrency !== "USD" && <p>{convertCurrency("USD")} USD</p>}
            {baseCurrency !== "EUR" && <p>{convertCurrency("EUR")} EUR</p>} */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="maincurrency">
      <div className="container">
        <div className="main-content">
          <div className="main-left">
            <RenderCurrencyInfo />
          </div>
          <div className="main-right">
            <CurrencyConverter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCurrency;
