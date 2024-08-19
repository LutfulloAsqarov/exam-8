import React from "react";
import "./topProducts.scss";
import Products from "../products/Products";
import { useGetProductsQuery } from "../../context/api/productApi";

const TopProducts = () => {
    const { data } = useGetProductsQuery();
    return (
        <section id="top">
            <div className="container">
                <div className="top">
                    <h2 className="section-title">TOP SELLING</h2>
                    <div className="top__products">
                        <Products data={data?.payload} />
                    </div>
                    <button className="view-all__btn">View All</button>
                </div>
            </div>
        </section>
    );
};

export default TopProducts;
