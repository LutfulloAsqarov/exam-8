import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import SingleProduct from "./pages/single-product/SingleProduct";

const App = () => {
    return (
        <Fragment>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Route>
            </Routes>
        </Fragment>
    );
};

export default App;
