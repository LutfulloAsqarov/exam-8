import React from "react";
import NewProducts from "./new-products/NewProducts";
import TopProducts from "./top-products/TopProducts";
import Browse from "./browse/Browse";

const Home = () => {
    return (
        <div>
            <NewProducts />
            <TopProducts />
            <Browse />
        </div>
    );
};

export default Home;
