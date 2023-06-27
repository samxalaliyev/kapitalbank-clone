import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Cards from "./pages/Cards";
import Credies from "./pages/Credies";
import Ipotecs from "./pages/Ipotecs";
import Deposits from "./pages/Deposits";
import Transfer from "./pages/Transfer";
import Services from "./pages/Services";
import Campains from "./pages/Campains";
import PersonalBank from "./pages/PersonalBank";
import FooterUp from "./components/Footer/FooterUp";
import FooterBottom from "./components/Footer/FooterBottom";
import CashMoney from "./pages/CashMoney";
import Products from "./pages/Products";
import ScrollTo from "./components/ScrollTo";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ScrollTo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/product-details/:id" element={<Products />} />
        <Route path="/" element={<Credies />} />
        <Route path="/" element={<Ipotecs />} />
        <Route path="/" element={<Deposits />} />
        <Route path="/" element={<Transfer />} />
        <Route path="/" element={<Services />} />
        <Route path="/" element={<Campains />} />
        <Route path="/" element={<PersonalBank />} />
        <Route path="/cash" element={<CashMoney />} />
        <Route />
      </Routes>
      <FooterUp />
      <FooterBottom />
    </div>
  );
}

export default App;
