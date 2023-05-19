import React, { useState } from "react";

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
    const totalPayments = durationVal * 12;

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
          <h2>Kalkulyator</h2>
          <h3>Gündəlik tələbat krediti</h3>
          <h4>
            Siz müştərilərimizə asanlıqla əldə edə biləcəyiniz nağd kredit
            təklif edirik.
          </h4>
          <p>% dərəcəsi rəsmiləşmə zamanı müəyyən olunacaq</p>
          <div className="range-loan">
            <label htmlFor="loanAmount">
              <span className="lable-text">Məbləğ</span> {loanAmount}
            </label>
            <input
              type="range"
              id="loanAmount"
              min="300"
              max="30000"
              step="100"
              value={loanAmount}
              onChange={handleLoanAmountChange}
            />
          </div>
          <div>
            <label htmlFor="interestRate">Faiz {interestRate}%</label>
            <input
              type="range"
              id="interestRate"
              min="12"
              max="20"
              step="1"
              value={interestRate}
              onChange={handleInterestRateChange}
            />
          </div>
          <div>
            <label htmlFor="loanDuration">Müddət {loanDuration} Ay</label>
            <input
              type="range"
              id="loanDuration"
              min="3"
              max="59"
              step="1"
              value={loanDuration}
              onChange={handleLoanDurationChange}
            />
          </div>
          <h3>Nağd pul krediti üçün aylıq ödəniş: {monthlyPayment} Manat</h3>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
