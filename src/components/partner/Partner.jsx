import React from "react";
import "./partner.scss";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";

const Partner = () => {
    return (
        <div className="partner">
            <div className="scroll container">
                <div className="partner__logo">
                    <img src={logo1} alt="img" />
                    <img src={logo2} alt="img" />
                    <img src={logo3} alt="img" />
                    <img src={logo4} alt="img" />
                    <img src={logo5} alt="img" />
                </div>
                <div className="partner__logo ">
                    <img src={logo1} alt="img" />
                    <img src={logo2} alt="img" />
                    <img src={logo3} alt="img" />
                    <img src={logo4} alt="img" />
                    <img src={logo5} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Partner;
