import React from "react";
import "./empty.scss";
import { Link } from "react-router-dom";

const Empty = ({ image, title }) => {
    return (
        <div className="container">
            <div className="empty">
                <h2>{title}</h2>
                <img src={image} alt="img" />
                <Link to={"/"}>Home</Link>
            </div>
        </div>
    );
};

export default Empty;
