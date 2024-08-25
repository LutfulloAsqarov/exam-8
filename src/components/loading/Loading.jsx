import React, { useEffect } from "react";
import "./loading.scss";

const Loading = ({ limit }) => {
    const loadingCards = Array.from({ length: limit }, (_, i) => (
        <div key={i} className="loading__item">
            <div className="loading__img bg__animation"></div>
            <div className="loading__title bg__animation"></div>
            <div className="loading__title bg__animation"></div>
            <div className="loading__title bg__animation"></div>
        </div>
    ));

    return (
        <div className="loading">
            <div
                className="loading__wrapper"
                style={{ gridTemplateColumns: `repeat(${limit}, 1fr)` }}
            >
                {loadingCards}
            </div>
        </div>
    );
};

export default Loading;
