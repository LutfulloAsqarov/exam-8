import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const savedPosition = sessionStorage.getItem(location.pathname);
        if (savedPosition) {
            window.scrollTo(0, parseInt(savedPosition, 10));
        }

        const handleScroll = () => {
            sessionStorage.setItem(location.pathname, window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

    return <>{children}</>;
};

export default ScrollManager;
