import React, { Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
const Home = lazy(() => import("./pages/home/Home"));
const SingleProduct = lazy(() =>
    import("./pages/single-product/SingleProduct")
);
const Cart = lazy(() => import("./pages/cart/Cart"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
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
const Shop = lazy(() => import("./pages/shop/Shop"));
const Empty = lazy(() => import("./components/empty/Empty"));

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import wishlistImg from "./assets/images/wishlist.webp";
import cartImg from "./assets/images/cart.webp";

const App = () => {
    let wishlistData = useSelector((state) => state.wishlist.value);
    let cartData = useSelector((state) => state.cart.value);

    return (
        <Fragment>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/cart"
                        element={
                            cartData.length ? (
                                <Cart />
                            ) : (
                                <Empty
                                    image={cartImg}
                                    title={"No carts yet!"}
                                />
                            )
                        }
                    />
                    <Route
                        path="/wishlist"
                        element={
                            wishlistData.length ? (
                                <Wishlist />
                            ) : (
                                <Empty
                                    image={wishlistImg}
                                    title={"No liked products yet!"}
                                />
                            )
                        }
                    />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/shop" element={<Shop />} />
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
