import React from "react";
import logo from "../../assets/images/logo.png";
import "./lazy.scss";

const Lazy = () => {
    return (
        <div className="lazy">
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Lazy;
