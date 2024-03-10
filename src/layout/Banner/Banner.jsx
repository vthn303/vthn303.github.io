import "../Banner/Banner.css";
import React from "react";

const Banner = () => {
  return (
    <div className="main-banner">
      <div className="content-for-banner">
        <div className="content-banner">
          <h1>Promote Your App With SoftLand</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#">Get started</a>
        </div>
        <div className="image">
          <img src="https://bootstrapmade.com/demo/templates/SoftLand/assets/img/phone_2.png" alt="" />
        </div>
      </div>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
