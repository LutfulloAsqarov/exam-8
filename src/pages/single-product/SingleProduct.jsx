import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    useGetProductByIdQuery,
    useGetProductsQuery,
} from "../../context/api/productApi";
import "./singleProduct.scss";
import { GoStarFill } from "react-icons/go";
import Products from "../../components/products/Products";

const SingleProduct = () => {
    const { data: products } = useGetProductsQuery();

    let { id } = useParams();

    const { data } = useGetProductByIdQuery(id);

    let product = data?.payload;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="single">
            <div className="container">
                <div className="single">
                    <div className="single__details">
                        <div className="single__images">
                            <div className="single__images__exams">
                                {product?.urls?.map((el, i) => (
                                    <span key={el}>
                                        <img src={el} alt="img" />
                                    </span>
                                ))}
                            </div>
                            <div className="single__images__main">
                                <img src={product?.urls[0]} alt="img" />
                            </div>
                        </div>
                        <div className="single__info">
                            <div className="single__info__context">
                                <h1 className="single__info__title">
                                    {product?.title}
                                </h1>
                                <div className="products__card__rating">
                                    <div className="products__card__stars single__info__stars">
                                        <GoStarFill color="gold" />
                                        <GoStarFill color="gold" />
                                        <GoStarFill color="gold" />
                                        <GoStarFill color="gold" />
                                        <GoStarFill color="gold" />
                                    </div>
                                    <p>{product?.rating}</p>
                                </div>
                                <div className="products__card__price single__info__price">
                                    <p className="products__card__price-new">
                                        ${product?.price}
                                    </p>
                                    <p className="products__card__price-old">
                                        ${product?.oldPrice}
                                    </p>
                                </div>
                                <p className="single__info__desc">
                                    {product?.description}
                                </p>
                            </div>
                            <div className="single__info__colors">
                                <p className="single__info__subtitle">
                                    Select Colors
                                </p>
                                <div className="single__info__colors__items">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="single__info__size">
                                <p className="single__info__subtitle">
                                    Choose size
                                </p>
                                <div className="single__info__size__items">
                                    <button>Small</button>
                                    <button>Medium</button>
                                    <button>Large</button>
                                    <button>X-Large</button>
                                </div>
                            </div>
                            <div className="single__info__btns">
                                <div className="counter">
                                    <button>-</button>
                                    <span>0</span>
                                    <button>+</button>
                                </div>
                                <button className="single__info__cart-btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="single__like__cards">
                        <h2 className="section-title">You might also like</h2>
                        <div className="new__products">
                            <Products data={products?.payload} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
