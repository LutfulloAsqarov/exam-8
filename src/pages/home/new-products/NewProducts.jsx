import React from "react";
import Products from "../../../components/products/Products";
import { NEW_PRODUCTS } from "../../../static";
import "./newProducts.scss";

const NewProducts = () => {
    let data = NEW_PRODUCTS;
    return (
        <section id="new">
            <div className="container">
                <div className="new">
                    <h2 className="section-title">NEW ARRIVALS</h2>
                    <div className="new__products">
                        <Products data={data} />
                    </div>
                    <button className="view-all__btn">View All</button>
                </div>
            </div>
        </section>
    );
};

export default NewProducts;
