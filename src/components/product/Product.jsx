import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./product.scss";
import { GoStarFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/slices/cartSlice";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import { BsCart2, BsCartFill, BsHeart, BsHeartFill } from "react-icons/bs";
import Model from "../model/Model";
import { useDeleteProductMutation } from "../../context/api/productApi";
import { Button } from "antd";

const Product = ({ product, setEditProduct }) => {
    const [delId, setDelId] = useState(null);
    let wishlistData = useSelector((state) => state.wishlist.value);
    let cartData = useSelector((state) => state.cart.value);
    let [deleteProduct, { isLoading }] = useDeleteProductMutation();
    let dispatch = useDispatch();
    let { pathname } = useLocation();
    return (
        <>
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

                {pathname === "/admin/manageProduct" ? (
                    <div className="products__card__manage-btns">
                        <button onClick={() => setEditProduct(product)}>
                            Edit
                        </button>
                        <button onClick={() => setDelId(product._id)}>
                            Delete
                        </button>
                    </div>
                ) : (
                    <>
                        <button
                            className="like-btn"
                            onClick={() => dispatch(toggleHeart(product))}
                        >
                            {wishlistData?.some(
                                (el) => el._id === product._id
                            ) ? (
                                <BsHeartFill color="crimson" />
                            ) : (
                                <BsHeart />
                            )}
                        </button>
                        <button
                            className="cart-btn"
                            onClick={() => dispatch(addToCart(product))}
                        >
                            {cartData?.some((el) => el._id === product._id) ? (
                                <BsCartFill />
                            ) : (
                                <BsCart2 />
                            )}
                        </button>
                    </>
                )}
            </div>
            {delId ? (
                <Model close={setDelId} width={300}>
                    <h2 style={{ textAlign: "center" }}>Are you sure</h2>
                    <div style={{ display: "flex" }}>
                        <Button
                            style={{ minWidth: "50%" }}
                            loading={isLoading}
                            className="w-full"
                            type="dark"
                            // htmlType="submit"
                            onClick={() => deleteProduct(delId)}
                        >
                            {isLoading ? "" : "Ok"}
                        </Button>
                        <button onClick={() => setDelId(null)}>No</button>
                    </div>
                </Model>
            ) : (
                <></>
            )}
        </>
    );
};

export default Product;
