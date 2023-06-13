// // import React, { useState, useEffect } from "react";
// // import Tabs from "@mui/material/Tabs";
// // import Tab from "@mui/material/Tab";
// // import Typography from "@mui/material/Typography";
// // import data from "../Cartdata";
// // import { useParams, useLocation, Link } from "react-router-dom";

// // const Cards = () => {
// //   const { category } = useParams();
// //   const location = useLocation();

// //   const [activeCategory, setActiveCategory] = useState(category || "all");

// //   useEffect(() => {
// //     const searchParams = new URLSearchParams(location.search);
// //     const tab = searchParams.get("tab");

// //     if (tab && data.find((item) => item.category === tab)) {
// //       setActiveCategory(tab);
// //     } else {
// //       setActiveCategory("all");
// //     }
// //   }, [location.search]);

// //   const handleTabChange = (event, newTab) => {
// //     setActiveCategory(newTab);
// //     const searchParams = new URLSearchParams(location.search);
// //     searchParams.set("tab", newTab);
// //     window.history.replaceState({}, "", `${location.pathname}?${searchParams}`);
// //   };

// //   const renderCardsForCategory = () => {
// //     if (activeCategory === "all") {
// //       return data.map((category, index) => (
// //         <div key={index}>
// //           <Typography variant="h6" className="category-title">
// //             {category.category}
// //           </Typography>
// //           {category.items.map((item, index) => (
// //             <div key={index}>
// //               {index === 0 ? (
// //                 <Typography variant="h6" className="category-item-title-first">
// //                   {item.title}
// //                 </Typography>
// //               ) : (
// //                 <Typography variant="h6" className="category-item-title">
// //                   {item.title}
// //                 </Typography>
// //               )}
// //               <img
// //                 src={item.image}
// //                 alt={item.title}
// //                 style={{ width: "200px" }}
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       ));
// //     } else {
// //       const categoryData = data.find(
// //         (item) => item.category === activeCategory
// //       );
// //       return (
// //         <div>
// //           <Typography variant="h6">{categoryData.category}</Typography>
// //           {categoryData.items.map((item, index) => (
// //             <div key={index}>
// //               {index === 0 ? (
// //                 <Typography variant="h6" className="category-item-title-first">
// //                   {item.title}
// //                 </Typography>
// //               ) : (
// //                 <Typography variant="h6" className="category-item-title">
// //                   {item.title}
// //                 </Typography>
// //               )}
// //               <img
// //                 src={item.image}
// //                 alt={item.title}
// //                 style={{ width: "200px" }}
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       );
// //     }
// //   };

// //   return (
// //     <div>
// //       <div className="cards">
// //         <div className="container">
// //           <div className="cards-head">
// //             <h1 className="section-title">Kartlar</h1>
// //             <p className="section-text">
// //               Debet kart ilə nağdsız ödənişlərin rahatlığını hiss edin.
// //               Ödənişlərinizi sürətli və təhlükəsiz şəkildə həyata keçirin və
// //               Birbank kartlarının üstünlüklərindən faydalanın.
// //             </p>
// //           </div>
// //           <Tabs value={activeCategory} onChange={handleTabChange}>
// //             <Tab
// //               label="Hamısı"
// //               value="all"
// //               sx={{
// //                 "&.MuiTab-root": {
// //                   backgroundColor: "#e8ecf1",
// //                   borderRadius: "37px",
// //                   marginRight: "14px",
// //                   textTransform: "none",
// //                 },
// //                 "&.Mui-selected": {
// //                   backgroundColor: "#f45369",
// //                   color: "#fff",
// //                 },
// //               }}
// //             />
// //             {data.map((item, index) => (
// //               <Tab
// //                 key={index}
// //                 label={item.category}
// //                 value={item.category}
// //                 sx={{
// //                   "&.MuiTab-root": {
// //                     backgroundColor: "#e8ecf1",
// //                     borderRadius: "37px",
// //                     marginRight: "14px",
// //                     textTransform: "none",
// //                     padding: "8px 16px",
// //                     minHeight: "0",
// //                   },
// //                   "&.Mui-selected": {
// //                     backgroundColor: "#f45369",
// //                     color: "#fff",
// //                   },
// //                 }}
// //               />
// //             ))}
// //           </Tabs>

// //           {renderCardsForCategory()}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cards;

// import React, { useState, useEffect } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import data from "../Cartdata";
// import { useParams, useLocation, Link } from "react-router-dom";

// const Cards = () => {
//   const { category } = useParams();
//   const location = useLocation();

//   const [activeCategory, setActiveCategory] = useState(category || "all");

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const tab = searchParams.get("tab");

//     if (tab && data.find((item) => item.category === tab)) {
//       setActiveCategory(tab);
//     } else {
//       setActiveCategory("all");
//     }
//   }, [location.search]);

//   const handleTabChange = (event, newTab) => {
//     setActiveCategory(newTab);
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set("tab", newTab);
//     window.history.replaceState({}, "", `${location.pathname}?${searchParams}`);
//   };

//   const renderCardsForCategory = () => {
//     if (activeCategory === "all") {
//       return data.map((category, index) => (
//         <div key={index}>
//           <Typography variant="h6" className="category-title">
//             {category.category}
//           </Typography>
//           {category.items.map((item, index) => (
//             <div
//               key={index}
//               className={
//                 index === 0
//                   ? "category-item-parent-first"
//                   : "category-item-parent"
//               }
//             >
//               <Typography
//                 variant="h6"
//                 className={
//                   index === 0
//                     ? "category-item-title-first"
//                     : "category-item-title"
//                 }
//               >
//                 {item.title}
//               </Typography>
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
//       const categoryData = data.find(
//         (item) => item.category === activeCategory
//       );
//       return (
//         <div>
//           <Typography variant="h6">{categoryData.category}</Typography>
//           {categoryData.items.map((item, index) => (
//             <div
//               key={index}
//               className={
//                 index === 0
//                   ? "category-item-parent-first"
//                   : "category-item-parent"
//               }
//             >
//               <Typography
//                 variant="h6"
//                 className={
//                   index === 0
//                     ? "category-item-title-first"
//                     : "category-item-title"
//                 }
//               >
//                 {item.title}
//               </Typography>
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
//           <Tabs value={activeCategory} onChange={handleTabChange}>
//             <Tab
//               label="Hamısı"
//               value="all"
//               sx={{
//                 "&.MuiTab-root": {
//                   backgroundColor: "#e8ecf1",
//                   borderRadius: "37px",
//                   marginRight: "14px",
//                   textTransform: "none",
//                 },
//                 "&.Mui-selected": {
//                   backgroundColor: "#f45369",
//                   color: "#fff",
//                 },
//               }}
//             />
//             {data.map((item, index) => (
//               <Tab
//                 key={index}
//                 label={item.category}
//                 value={item.category}
//                 sx={{
//                   "&.MuiTab-root": {
//                     backgroundColor: "#e8ecf1",
//                     borderRadius: "37px",
//                     marginRight: "14px",
//                     textTransform: "none",
//                     padding: "8px 16px",
//                     minHeight: "0",
//                   },
//                   "&.Mui-selected": {
//                     backgroundColor: "#f45369",
//                     color: "#fff",
//                   },
//                 }}
//               />
//             ))}
//           </Tabs>

//           {renderCardsForCategory()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;

// import React, { useState, useEffect } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import data from "../Cartdata";
// import { useParams, useLocation, Link } from "react-router-dom";

// const Cards = () => {
//   const { category } = useParams();
//   const location = useLocation();

//   const [activeCategory, setActiveCategory] = useState(category || "all");

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const tab = searchParams.get("tab");

//     if (tab && data.find((item) => item.category === tab)) {
//       setActiveCategory(tab);
//     } else {
//       setActiveCategory("all");
//     }
//   }, [location.search]);

//   const handleTabChange = (event, newTab) => {
//     setActiveCategory(newTab);
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set("tab", newTab);
//     window.history.replaceState({}, "", `${location.pathname}?${searchParams}`);
//   };

//   const renderCardsForCategory = () => {
//     if (activeCategory === "all") {
//       return data.map((category, index) => (
//         <div key={index}>
//           <Typography variant="h6" className="category-title">
//             {category.category}
//           </Typography>
//           {category.items.map((item, index) => (
//             <div
//               key={index}
//               className={
//                 index === 0
//                   ? "category-item-parent-first"
//                   : "category-item-parent"
//               }
//             >
//               {index === 0 && (
//                 <div className="category-item-wrapper">
//                   <div className="category-item-image">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       style={{ width: "200px" }}
//                     />
//                   </div>
//                   <div className="category-item-details">
//                     <Typography
//                       variant="h6"
//                       className="category-item-title-first"
//                     >
//                       {item.items.popular.title2}
//                     </Typography>
//                     <Typography variant="subtitle1">
//                       {item.items.items1}
//                     </Typography>
//                     <Typography variant="subtitle1">
//                       {item.items.items2}
//                     </Typography>
//                     <Typography variant="subtitle1">
//                       {item.items.items3}
//                     </Typography>
//                     <Typography variant="subtitle1">
//                       {item.items.items4}
//                     </Typography>
//                     <Typography variant="subtitle1">
//                       {item.items.items5}
//                     </Typography>
//                     <Typography variant="subtitle1">
//                       {item.items.items6}
//                     </Typography>
//                     <div className="category-item-buttons">
//                       <button className="category-item-button">
//                         {item.buttons.button1}
//                       </button>
//                       <button className="category-item-button">
//                         {item.buttons.button2}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {index !== 0 && (
//                 <>
//                   <Typography variant="h6" className="category-item-title">
//                     {item.title}
//                   </Typography>
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     style={{ width: "200px" }}
//                   />
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       ));
//     } else {
//       const categoryData = data.find(
//         (item) => item.category === activeCategory
//       );
//       return (
//         <div>
//           <Typography variant="h6">{categoryData.category}</Typography>
//           {categoryData.items.map((item, index) => (
//             <div
//               key={index}
//               className={
//                 index === 0
//                   ? "category-item-parent-first"
//                   : "category-item-parent"
//               }
//             >
//               <Typography
//                 variant="h6"
//                 className={
//                   index === 0
//                     ? "category-item-title-first"
//                     : "category-item-title"
//                 }
//               >
//                 {item.title}
//               </Typography>
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
//           <Tabs value={activeCategory} onChange={handleTabChange}>
//             <Tab
//               label="Hamısı"
//               value="all"
//               sx={{
//                 "&.MuiTab-root": {
//                   backgroundColor: "#e8ecf1",
//                   borderRadius: "37px",
//                   marginRight: "14px",
//                   textTransform: "none",
//                 },
//                 "&.Mui-selected": {
//                   backgroundColor: "#f45369",
//                   color: "#fff",
//                 },
//               }}
//             />
//             {data.map((item, index) => (
//               <Tab
//                 key={index}
//                 label={item.category}
//                 value={item.category}
//                 sx={{
//                   "&.MuiTab-root": {
//                     backgroundColor: "#e8ecf1",
//                     borderRadius: "37px",
//                     marginRight: "14px",
//                     textTransform: "none",
//                     padding: "8px 16px",
//                     minHeight: "0",
//                   },
//                   "&.Mui-selected": {
//                     backgroundColor: "#f45369",
//                     color: "#fff",
//                   },
//                 }}
//               />
//             ))}
//           </Tabs>

//           {renderCardsForCategory()}
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
                    <Typography variant="subtitle1">
                      {item.items.items1}
                    </Typography>
                    <Typography variant="subtitle1">
                      {item.items.items3}
                    </Typography>
                    <div className="category-item-buttons">
                      <button className="category-item-button">
                        {item.buttons.button1}
                      </button>
                      <button className="category-item-button">
                        {item.buttons.button2}
                      </button>
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
          <Typography variant="h6">{categoryData.category}</Typography>
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
                    <Typography variant="subtitle1">
                      {item.items.items1}
                    </Typography>
                    <Typography variant="subtitle1">
                      {item.items.items3}
                    </Typography>
                    <div className="category-item-buttons">
                      <button className="category-item-button">
                        {item.buttons.button1}
                      </button>
                      <button className="category-item-button">
                        {item.buttons.button2}
                      </button>
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
                },
                "&.Mui-selected": {
                  backgroundColor: "#f45369",
                  color: "#fff",
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
                    padding: "8px 16px",
                    minHeight: "0",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#f45369",
                    color: "#fff",
                  },
                }}
              />
            ))}
          </Tabs>

          {renderCardsForCategory()}
        </div>
      </div>
    </div>
  );
};

export default Cards;
