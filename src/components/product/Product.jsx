import React from "react";
import { Link } from "react-router-dom";
import "./product.scss";
import { GoStarFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/slices/cartSlice";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import { BsCart2, BsHeart } from "react-icons/bs";

const Product = ({ product }) => {
    let wishlistData = useSelector((state) => state.wishlist.value);
    console.log(wishlistData);
    let dispatch = useDispatch();
    return (
        <div className="products__card">
            <div className="products__card__img">
                <Link to={`/product/${product?._id}`}>
                    <img src={product?.urls[0]} alt="card-img" />
                </Link>
            </div>
            <div className="products__card__content">
                <h3>{product.title}</h3>
                <div className="products__card__rating">
                    <div className="products__card__stars">
                        <GoStarFill color="gold" />
                        <GoStarFill color="gold" />
                        <GoStarFill color="gold" />
                        <GoStarFill color="gold" />
                        <GoStarFill color="gold" />
                    </div>
                    <p>{product?.rating}.0</p>
                </div>
                <div className="products__card__price">
                    <p className="products__card__price-new">
                        ${product?.price}
                    </p>
                    <p className="products__card__price-old">
                        ${product?.oldPrice}
                    </p>
                </div>
            </div>
            <button
                className="like-btn"
                onClick={() => dispatch(toggleHeart(product))}
            >
                <BsHeart />
            </button>
            <button
                className="cart-btn"
                onClick={() => dispatch(addToCart(product))}
            >
                <BsCart2 />
            </button>
        </div>
    );
};

export default Product;
