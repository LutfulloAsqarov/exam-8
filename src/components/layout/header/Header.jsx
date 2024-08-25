import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../../assets/images/logo.png";
import { BsCart2, BsHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

import "./header.scss";
import Search from "../../search/Search";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const [close, setClose] = useState(true);
    const [show, setShow] = useState(false);
    const [navShrink, setNavShrink] = useState(false);

    const wishlistData = useSelector((state) => state.wishlist.value);
    const cartData = useSelector((state) => state.cart.value);

    let { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavShrink(true);
            } else {
                setNavShrink(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (pathname.includes("login") || pathname.includes("admin")) {
        return <></>;
    }

    return (
        <>
            {close && (
                <div className="header__top">
                    <div className="header__top__info container">
                        <div></div>
                        <div className="header__top__info__desc">
                            <p>
                                Sign up and get 20% off your first order.{" "}
                                <span>Sign Up Now</span>
                            </p>
                        </div>
                        <button
                            onClick={() => setClose(false)}
                            className="header__top__close"
                        >
                            <IoCloseSharp />
                        </button>
                    </div>
                </div>
            )}
            <header className={`header ${navShrink ? "header--shrink" : ""}`}>
                <nav className="header__nav container">
                    <div className="header__nav__logo">
                        <RxHamburgerMenu
                            onClick={() => setShow(true)}
                            className="header__nav__logo-menu"
                        />
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <ul
                        className={`header__nav__link ${
                            show ? "header__show" : ""
                        }`}
                    >
                        <li
                            onClick={() => setShow(false)}
                            className="header__nav__close"
                        >
                            <IoCloseSharp />
                        </li>
                        <li className="header__nav__item">
                            <Link to={"/shop"}>Shop</Link>
                        </li>
                        <li className="header__nav__item">Brands</li>
                    </ul>
                    <div className="header__nav__form">
                        <Search />
                    </div>
                    <div className="header__nav__btns">
                        <div className="header__nav__btns-search">
                            <IoSearchOutline />
                        </div>
                        <Link to={"/cart"}>
                            <BsCart2 />
                            {cartData.length > 0 ? (
                                <sup>
                                    {cartData.length > 99 && cartData.length > 0
                                        ? "99+"
                                        : cartData.length}
                                </sup>
                            ) : (
                                <></>
                            )}
                        </Link>
                        <Link to={"/wishlist"}>
                            <BsHeart />
                            {wishlistData.length > 0 ? (
                                <sup>
                                    {wishlistData.length > 99
                                        ? "99+"
                                        : wishlistData.length}
                                </sup>
                            ) : (
                                <></>
                            )}
                        </Link>
                        <Link
                            to={`${
                                localStorage.getItem("x-auth-token")
                                    ? "/admin/manageProduct"
                                    : "/login"
                            }`}
                        >
                            <VscAccount />
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
