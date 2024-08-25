import React from "react";
import "./newProducts.scss";
import Products from "../products/Products";
import { useGetProductsQuery } from "../../context/api/productApi";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";

const NewProducts = () => {
    const { data, isLoading } = useGetProductsQuery({ limit: 4, skip: 1 });
    return (
        <section id="new">
            <div className="container">
                <div className="new">
                    <h2 className="section-title">NEW ARRIVALS</h2>
                    {isLoading ? (
                        <Loading limit={4} />
                    ) : (
                        <div className="new__products">
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

export default NewProducts;
