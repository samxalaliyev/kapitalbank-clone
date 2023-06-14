import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import data from "../Cartdata";
import { useParams, useLocation, Link } from "react-router-dom";

const Cards = () => {
  const { category } = useParams();
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState(category || "all");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");

    if (tab && data.find((item) => item.category === tab)) {
      setActiveCategory(tab);
    } else {
      setActiveCategory("all");
    }
  }, [location.search]);

  const handleTabChange = (event, newTab) => {
    setActiveCategory(newTab);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("tab", newTab);
    window.history.replaceState({}, "", `${location.pathname}?${searchParams}`);
  };

  const renderCardsForCategory = () => {
    if (activeCategory === "all") {
      return data.map((category, index) => (
        <div key={index}>
          {index == 0 ? (
            ""
          ) : (
            <Typography variant="h2" className="category-title">
              {category.category}
            </Typography>
          )}
          {category.items.map((item, index) => (
            <div key={index}>
              {index === 0 && item.id === 1 ? (
                <div className="category-item-wrapper-first">
                  <div className="category-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="category-item-details">
                    <div className="item-popular">
                      <img src={item.items.popular.icon} />
                      {item.items.popular.text}
                    </div>
                    <div className="category-item-title-first">
                      {item.title}
                    </div>
                    <ul className="first-card-ul">
                      <li>
                        <span>{item.items.items1}</span>
                        {item.items.items2}
                      </li>

                      <li>
                        <span>{item.items.items3}</span>
                        {item.items.items4}
                      </li>

                      <li>
                        <span>{item.items.items5}</span>
                        {item.items.items6}
                      </li>
                    </ul>

                    <div className="category-item-buttons">
                      <Link className="category-item-button-left">
                        {item.buttons.button1}
                      </Link>
                      <Link className="category-item-button-right">
                        {item.buttons.button2}
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="category-item-wrapper">
                  <div className="category-item-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "200px" }}
                    />
                  </div>
                  <div className="category-item-details">
                    <Typography variant="h6" className="category-item-title">
                      {item.title}
                    </Typography>
                    <ul>
                      <li className="detalis-li">{item.items.items1}</li>
                      <li className="detalis-li">{item.items.items3}</li>
                    </ul>

                    <div className="category-item-buttons">
                      <Link className="category-item-button">
                        {item.buttons.button1}
                      </Link>
                      <Link className="category-item-button">
                        {item.buttons.button2}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ));
    } else {
      const categoryData = data.find(
        (item) => item.category === activeCategory
      );
      return (
        <div>
          {categoryData.items.map((item, index) => (
            <div key={index}>
              {index === 0 ? (
                <div className="category-item-wrapper-first">
                  <div className="category-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="category-item-details">
                    <div className="item-popular">
                      <img src={item.items.popular.icon} />
                      {item.items.popular.text}
                    </div>
                    <div className="category-item-title-first">
                      {item.title}
                    </div>
                    <ul className="first-card-ul">
                      <li>
                        <span>{item.items.items1}</span>
                        {item.items.items2}
                      </li>

                      <li>
                        <span>{item.items.items3}</span>
                        {item.items.items4}
                      </li>

                      <li>
                        <span>{item.items.items5}</span>
                        {item.items.items6}
                      </li>
                    </ul>

                    <div className="category-item-buttons">
                      <Link className="category-item-button-left">
                        {item.buttons.button1}
                      </Link>
                      <Link className="category-item-button-right">
                        {item.buttons.button2}
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="category-item-wrapper">
                  <div className="category-item-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "200px" }}
                    />
                  </div>
                  <div className="category-item-details">
                    <Typography variant="h6" className="category-item-title">
                      {item.title}
                    </Typography>
                    <ul>
                      <li className="detalis-li">{item.items.items1}</li>
                      <li className="detalis-li">{item.items.items3}</li>
                    </ul>
                    <div className="category-item-buttons">
                      <Link className="category-item-button">
                        {item.buttons.button1}
                      </Link>
                      <Link className="category-item-button">
                        {item.buttons.button2}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <div className="cards">
        <div className="container">
          <div className="cards-head">
            <h1 className="section-title">Kartlar</h1>
            <p className="section-text">
              Debet kart ilə nağdsız ödənişlərin rahatlığını hiss edin.
              Ödənişlərinizi sürətli və təhlükəsiz şəkildə həyata keçirin və
              Birbank kartlarının üstünlüklərindən faydalanın.
            </p>
          </div>
          <Tabs value={activeCategory} onChange={handleTabChange}>
            <Tab
              label="Hamısı"
              value="all"
              sx={{
                "&.MuiTab-root": {
                  backgroundColor: "#e8ecf1",
                  borderRadius: "37px",
                  marginRight: "14px",
                  textTransform: "none",
                  minHeight: "0",
                  padding: "8px",
                },
                "&.Mui-selected": {
                  backgroundColor: "#f45369",
                  color: "#fff",
                  minHeight: "0",
                  padding: "8px",
                },
              }}
            />
            {data.map((item, index) => (
              <Tab
                key={index}
                label={item.category}
                value={item.category}
                sx={{
                  "&.MuiTab-root": {
                    backgroundColor: "#e8ecf1",
                    borderRadius: "37px",
                    marginRight: "14px",
                    textTransform: "none",
                    minHeight: "0",
                    padding: "8px",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#f45369",
                    color: "#fff",
                    minHeight: "0",
                    padding: "8px",
                  },
                }}
              />
            ))}
          </Tabs>

          {renderCardsForCategory()}
        </div>
        <div className="cards-footer">
          <div className="tags">
            <div className="container">
              <ul>
                <li>
                  <Link>kart sifarisi</Link>
                </li>
                <li>
                  <Link>online kart sifarisi</Link>
                </li>
                <li>
                  <Link>online birkart sifarişi</Link>
                </li>
                <li>
                  <Link to="/cards?tab=Digital">digital kart</Link>
                </li>
                <li>
                  <Link to="/cards?tab=Debet">debet kart nedir</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-text">
            <div className="container">
              <p>
                Beynəlxalq ödəniş sistemlərini dəstəkləyən debet kartlar
                vasitəsiylə Azərbaycanın və dünyanın istənilən yerində sürətli
                ödənişlər edə bilərsiniz. Kapital Bankın təqdim etdiyi Visa və
                MasterCard debet kart məhsulları sizə təhlükəsiz əməliyyatlar
                etməyə imkan tanıyır. Kapital Bankın NFC və Apple Pay funksiyası
                ilə siz, eyni zamanda kartınız fiziki olaraq yanınızda olmasa
                belə istənilən yerdə sürətli ödəmələr edə bilərsiniz. Birbank
                mobil tətbiqi ilə əməliyyatlarınızı izləyə, büdcənizi optimal
                şəkildə idarə edə, karta mədaxil və məxaric əməliyyatlarınıı
                izləyə, kommunal və stasionar ödənişləri edə bilərsiniz. Eyni
                zamanda Birbank istifadəçisi olaraq Dijital karta ödənişsiz
                şəkildə sahib olma imkanı əldə edirsiniz. Pul karti almaq üçün
                siz Birbank mobil tətbiqi, Kapitalbank.az və ya Birbank.az-dan
                onlayn müraciət etməlisiniz. Debet kart sifarisi üçün müraciət
                formasına müvafiq məlumatları doldurmağınız yetərlidir.
              </p>
            </div>
          </div>
          <div className="footer-links">
            <div className="container">
              <ul>
                <li>
                  <Link to="/cards?tab=Taksit">Taksit kartlar</Link>
                </li>
                <li>
                  <Link to="/cards?tab=Debet">Debet kartlar</Link>
                </li>
                <li>
                  <Link to="/cards?tab=Digital">Digital kart</Link>
                </li>
                <li>
                  <Link to="/cards?tab=Hediye">Hədiyyə kartı</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
