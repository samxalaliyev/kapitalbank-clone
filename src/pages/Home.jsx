import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Banner from "../components/Main/Banner";
import Operations from "../components/Main/Operations";
import Cardsection from "../components/Main/Cardsection";
import DailyLoan from "../components/Main/DailyLoan";
import Calculator from "../components/Main/Calculator";
import Endcards from "../components/Main/Endcards";
import News from "../components/Main/News";
import MainCurrency from "../components/Main/MainCurrency";
import FooterUp from "../components/Footer/FooterUp";
import FoorerBottom from "../components/Footer/FooterBottom";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Operations />
      <Cardsection />
      <DailyLoan />
      <Calculator />
      <Endcards />
      <News />
      <MainCurrency />
      <FooterUp />
      <FoorerBottom />
    </div>
  );
};

export default Home;
