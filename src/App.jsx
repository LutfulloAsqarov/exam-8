import React, { Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
const Home = lazy(() => import("./pages/home/Home"));
const SingleProduct = lazy(() =>
    import("./pages/single-product/SingleProduct")
);
const Cart = lazy(() => import("./pages/cart/Cart"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
const Casual = lazy(() => import("./pages/casual/Casual"));
const Auth = lazy(() => import("./pages/auth/Auth"));
const Login = lazy(() => import("./pages/login/Login"));
const Admin = lazy(() => import("./pages/admin/Admin"));
const CreateProduct = lazy(() =>
    import("./pages/admin/create-product/CreateProduct")
);
const ManageProduct = lazy(() =>
    import("./pages/admin/manage-product/ManageProduct")
);
const CreateCategory = lazy(() =>
    import("./pages/admin/create-category/CreateCategory")
);
const ManageCategory = lazy(() =>
    import("./pages/admin/manage-category/ManageCategory")
);

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

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
                        <Route
                            path="createCategory"
                            element={<CreateCategory />}
                        />
                        <Route
                            path="manageCategory"
                            element={<ManageCategory />}
                        />
                    </Route>
                </Route>
            </Routes>
            <ToastContainer />
        </Fragment>
    );
};

export default App;
