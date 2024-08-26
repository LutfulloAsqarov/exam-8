import React from "react";
import logo1 from "../../assets/brand/logo1.png";
import logo3 from "../../assets/brand/logo3.png";
import logo4 from "../../assets/brand/logo4.png";
import logo5 from "../../assets/brand/logo6.jpg";
import logo6 from "../../assets/brand/logo16.png";
import logo7 from "../../assets/brand/logo18.png";
import logo8 from "../../assets/brand/logo20.png";
import logo9 from "../../assets/brand/logo21.jpg";
import logo10 from "../../assets/brand/logo22.png";
import logo11 from "../../assets/brand/logo23.jpg";
import logo12 from "../../assets/brand/logo24.png";
import logo13 from "../../assets/brand/logo25.png";
import "./brands.scss";

const Brands = () => {
    return (
        <div className="container">
            <div className="our-brands">
                <img src={logo6} alt="logo" />
                <img src={logo7} alt="logo" />
                <img src={logo8} alt="logo" />
                <img src={logo9} alt="logo" />
                <img src={logo10} alt="logo" />
                <img src={logo11} alt="logo" />
                <img src={logo12} alt="logo" />
                <img src={logo13} alt="logo" />
                <img src={logo1} alt="logo" />
                <img src={logo3} alt="logo" />
                <img src={logo4} alt="logo" />
                <img src={logo5} alt="logo" />
            </div>
        </div>
    );
};

export default Brands;
