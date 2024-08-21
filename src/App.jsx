import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import SingleProduct from "./pages/single-product/SingleProduct";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import Casual from "./pages/casual/Casual";
import Auth from "./pages/auth/Auth";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/create-product/CreateProduct";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageProduct from "./pages/admin/manage-product/ManageProduct";

const App = () => {
    return (
        <Fragment>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/casual" element={<Casual />} />
                </Route>
                <Route path="/login" element={<Login />} />

                <Route path="/" element={<Auth />}>
                    <Route path="/admin" element={<Admin />}>
                        <Route
                            path="createProduct"
                            element={<CreateProduct />}
                        />
                        <Route
                            path="manageProduct"
                            element={<ManageProduct />}
                        />
                    </Route>
                </Route>
            </Routes>
            <ToastContainer />
        </Fragment>
    );
};

export default App;
