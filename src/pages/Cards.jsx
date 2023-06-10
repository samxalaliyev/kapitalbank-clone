// import React, { useState } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import data from "../Cartdata";

// const Cards = () => {
//   const [activeCategory, setActiveCategory] = useState(data[0].category);

//   const handleTabChange = (event, newTab) => {
//     setActiveCategory(newTab);
//   };

//   const activeItems = data.find(
//     (item) => item.category === activeCategory
//   ).items;

//   return (
//     <div>
//       <Tabs value={activeCategory} onChange={handleTabChange} centered>
//         {data.map((item, index) => (
//           <Tab key={index} label={item.category} value={item.category} />
//         ))}
//       </Tabs>
//       <div>
//         {activeItems.map((item) => (
//           <div key={item.id}>
//             <Typography variant="h6">{item.title}</Typography>
//             <img src={item.image} alt={item.title} style={{ width: "200px" }} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;

// import React, { useState } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import data from "../Cartdata";

// const Cards = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const handleTabChange = (event, newTab) => {
//     setActiveCategory(newTab);
//   };

//   const renderCategoryTabs = () => {
//     return (
//       <Tabs value={activeCategory} onChange={handleTabChange} centered>
//         <Tab label="Hamısı" value="all" />
//         {data.categories.map((item, index) => (
//           <Tab key={index} label={item.category} value={item.category} />
//         ))}
//       </Tabs>
//     );
//   };

//   const renderCardsForCategory = (category) => {
//     if (category === "all") {
//       return data.categories.map((category, index) => (
//         <div key={index}>
//           <Typography variant="h6">{category.category}</Typography>
//           {category.items.map((item, itemIndex) => (
//             <div key={item.id} className={itemIndex === 0 ? "first-card" : ""}>
//               <Typography variant="h6">{item.title}</Typography>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{ width: "200px" }}
//               />
//             </div>
//           ))}
//         </div>
//       ));
//     } else {
//       const categoryData = data.categories.find(
//         (item) => item.category === category
//       );
//       return (
//         <div>
//           <Typography variant="h6">{categoryData.category}</Typography>
//           {categoryData.items.map((item) => (
//             <div key={item.id}>
//               <Typography variant="h6">{item.title}</Typography>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{ width: "200px" }}
//               />
//             </div>
//           ))}
//         </div>
//       );
//     }
//   };

//   return (
//     <div>
//       <div className="cards">
//         <div className="container">
//           <div className="cards-head">
//             <h1 className="section-title">Kartlar</h1>
//             <p className="section-text">
//               Debet kart ilə nağdsız ödənişlərin rahatlığını hiss edin.
//               Ödənişlərinizi sürətli və təhlükəsiz şəkildə həyata keçirin və
//               Birbank kartlarının üstünlüklərindən faydalanın.
//             </p>
//           </div>
//           {renderCategoryTabs()}
//           <div>{renderCardsForCategory(activeCategory)}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;
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
          <Typography variant="h6" className="category-title">
            {category.category}
          </Typography>
          {category.items.map((item, index) => (
            <div key={index}>
              {index === 0 ? (
                <Typography variant="h6" className="category-item-title-first">
                  {item.title}
                </Typography>
              ) : (
                <Typography variant="h6" className="category-item-title">
                  {item.title}
                </Typography>
              )}
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "200px" }}
              />
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
          <Typography variant="h6">{categoryData.category}</Typography>
          {categoryData.items.map((item, index) => (
            <div key={index}>
              {index === 0 ? (
                <Typography variant="h6" className="category-item-title-first">
                  {item.title}
                </Typography>
              ) : (
                <Typography variant="h6" className="category-item-title">
                  {item.title}
                </Typography>
              )}
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "200px" }}
              />
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
          <Tabs value={activeCategory} onChange={handleTabChange} centered>
            <Tab label="Hamısı" value="all" />
            {data.map((item, index) => (
              <Tab key={index} label={item.category} value={item.category} />
            ))}
          </Tabs>
          {renderCardsForCategory()}
        </div>
      </div>
    </div>
  );
};

export default Cards;
