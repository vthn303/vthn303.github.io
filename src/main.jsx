import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header/Header.jsx";
import Banner from "./layout/Banner/Banner.jsx";
import Content from "./layout/Content/Content.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import "../src/index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Content />
    <Footer />
  </React.StrictMode>
);
