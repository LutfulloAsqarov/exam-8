import React, { memo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./sidebar.scss";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { FaChevronCircleLeft } from "react-icons/fa";
import { useGetProfileQuery } from "../../context/api/adminApi";

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem("x-auth-token");
        navigate("/");
    };
    let { data } = useGetProfileQuery();
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h2 className="sidebar__logo">
                    <Link to={"/"}>
                        <FaArrowAltCircleLeft />
                    </Link>
                    <span>Dashboard</span>
                </h2>
                <ul className="sidebar__collection">
                    <li className="sidebar__item">
                        <NavLink
                            className={"sidebar__link"}
                            to={"createProduct"}
                        >
                            <IoCreateOutline />
                            <span>Create Product</span>
                        </NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink
                            className={"sidebar__link"}
                            to={"manageProduct"}
                        >
                            <IoCreateOutline />
                            <span>Manage Product</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <button className="sidebar__btn" onClick={handleLogOut}>
                Log out
            </button>
        </div>
    );
};

export default memo(Sidebar);
