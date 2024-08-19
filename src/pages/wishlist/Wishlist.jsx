import React from "react";
import Product from "../../components/product/Product";
import Products from "../../components/products/Products";
import { useSelector } from "react-redux";

const Wishlist = () => {
    let wishlistData = useSelector((state) => state.wishlist.value);
    console.log(wishlistData);
    return (
        <div className="container">
            <h2 className="section-title">WISHLIST</h2>
            <div className="new__products">
                <Products data={wishlistData} />
            </div>
        </div>
    );
};

export default Wishlist;
