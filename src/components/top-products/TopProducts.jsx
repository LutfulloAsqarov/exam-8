import React from "react";
import "./topProducts.scss";
import Products from "../products/Products";
import { useGetProductsQuery } from "../../context/api/productApi";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";

const TopProducts = () => {
    const { data, isLoading } = useGetProductsQuery({ limit: 4, skip: 1 });
    return (
        <section id="top">
            <div className="container">
                <div className="top">
                    <h2 className="section-title">TOP SELLING</h2>
                    {isLoading ? (
                        <Loading limit={4} />
                    ) : (
                        <div className="top__products">
                            <Products data={data?.payload} />
                        </div>
                    )}
                    <Link to={"/shop"} className="view-all__btn">
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TopProducts;
