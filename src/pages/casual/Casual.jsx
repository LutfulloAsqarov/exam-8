import React from "react";
import Products from "../../components/products/Products";
import { useGetProductsQuery } from "../../context/api/productApi";

const Casual = () => {
    let { data } = useGetProductsQuery();
    return (
        <div id="casual">
            <div className="container">
                <div className="casual">
                    <div className="casual__left"></div>
                    <div className="casual__right">
                        <div className="casual__products">
                            <Products data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Casual;
