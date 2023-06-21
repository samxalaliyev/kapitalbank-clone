import React, { useState } from "react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(300);
  const [loanDuration, setLoanDuration] = useState(3);
  const [interestRate, setInterestRate] = useState(12);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
    calculateMonthlyPayment(event.target.value, loanDuration, interestRate);
  };

  const handleLoanDurationChange = (event) => {
    setLoanDuration(event.target.value);
    calculateMonthlyPayment(loanAmount, event.target.value, interestRate);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
    calculateMonthlyPayment(loanAmount, loanDuration, event.target.value);
  };

  const calculateMonthlyPayment = (amount, duration, rate) => {
    const principal = parseFloat(amount);
    const durationVal = parseFloat(duration);
    const interest = parseFloat(rate) / 100;

    const monthlyInterest = interest / 12;
    const totalPayments = durationVal;

    const numerator =
      monthlyInterest * Math.pow(1 + monthlyInterest, totalPayments);
    const denominator = Math.pow(1 + monthlyInterest, totalPayments) - 1;

    const monthlyPayment = (principal * (numerator / denominator)).toFixed(2);
    setMonthlyPayment(monthlyPayment);
  };

  return (
    <div>
      <div className="loan-calculator">
        <div className="container">
          <h1>Kalkulyator</h1>

          <div className="calculator-main">
            <div className="calculator-left">
              <h3>Gündəlik tələbat krediti</h3>
              <h4>
                Siz müştərilərimizə asanlıqla əldə edə biləcəyiniz nağd kredit
                təklif edirik.
              </h4>
              <h4>% dərəcəsi rəsmiləşmə zamanı müəyyən olunacaq</h4>
              <div className="ranges">
                <div className="range-loan">
                  <label htmlFor="loanAmount">
                    <span className="lable-text">Məbləğ</span>
                    <span className="inner-amount">{loanAmount}</span>
                  </label>
                  <input
                    type="range"
                    id="loanAmount"
                    min="300"
                    max="30000"
                    step="100"
                    value={loanAmount}
                    onChange={handleLoanAmountChange}
                    className="range-field"
                  />
                </div>
                <div className="range-values">
                  <span>300</span>
                  <span>30 000</span>
                </div>
                <div className="range-loan">
                  <label htmlFor="interestRate">
                    <span className="lable-text">Faiz</span>
                    <span className="inner-amount">{interestRate}%</span>
                  </label>
                  <input
                    type="range"
                    id="interestRate"
                    min="12"
                    max="20"
                    step="1"
                    value={interestRate}
                    onChange={handleInterestRateChange}
                    className="range-field"
                  />
                </div>
                <div className="range-values">
                  <span>12%</span>
                  <span>20%</span>
                </div>

                <div className="range-loan">
                  <label htmlFor="loanDuration">
                    <span className="lable-text">Müddət</span>
                    <span className="inner-amount">{loanDuration} Ay</span>
                  </label>
                  <input
                    type="range"
                    id="loanDuration"
                    min="3"
                    max="59"
                    step="1"
                    value={loanDuration}
                    onChange={handleLoanDurationChange}
                    className="range-field"
                  />
                </div>
                <div className="range-values">
                  <span>3 ay</span>
                  <span>59 ay</span>
                </div>
              </div>
            </div>
            <div className="calculator-right">
              <div className="payment-section">
                <p className="month-payment">
                  Nağd pul krediti üçün
                  <br /> aylıq ödəniş
                </p>
                <p className="month-payment-bottom">
                  <span>{monthlyPayment}</span>
                  <span>₼</span>
                </p>
                <Link to="/cash" className="btn">
                  Sifariş et
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
