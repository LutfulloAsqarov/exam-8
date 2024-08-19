import React, { useEffect, useState } from "react";
import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
    decrementCart,
    incrementCart,
    removeFromCart,
} from "../../context/slices/cartSlice";
const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    let cartData = useSelector((state) => state.cart.value);

    let cartItems = cartData?.map((el) => (
        <div key={el._id} className="cart__product">
            <div className="cart__product__img">
                <Link to={`product/${el._id}`}>
                    <img src={el.urls[0]} alt="" />
                </Link>
            </div>
            <div className="cart__product__context">
                <div className="cart__product__info">
                    <div className="cart__product__row">
                        <h3>{el.title}</h3>
                        <button
                            className="cart__product__del-btn"
                            onClick={() => dispatch(removeFromCart(el._id))}
                        >
                            <RiDeleteBin6Fill />
                        </button>
                    </div>
                    <ul>
                        <li>
                            <span>Size:</span> Large
                        </li>
                        <li>
                            <span>Color:</span> White
                        </li>
                    </ul>
                    <div className="cart__product__row">
                        <p>${el.price}</p>
                        <div className="counter">
                            <button
                                onClick={() =>
                                    el?.quantity > 1
                                        ? dispatch(decrementCart(el))
                                        : dispatch(removeFromCart(el._id))
                                }
                            >
                                -
                            </button>
                            <span>{el?.quantity}</span>
                            <button onClick={() => dispatch(incrementCart(el))}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    useEffect(() => {
        let total = cartData.reduce(
            (sum, el) => sum + el.price * el.quantity,
            0
        );
        setTotalPrice(+total.toFixed(2));
    }, [cartData]);

    return (
        <div id="cart">
            <div className="container">
                <div className="cart">
                    <h1 className="section-title">YOUR CART</h1>
                    <div className="cart__wrapper">
                        <div className="cart__left">
                            <div className="cart__products">{cartItems}</div>
                        </div>
                        <div className="cart__right">
                            <div className="cart__order">
                                <h3>Order Summary</h3>
                                <ul>
                                    <li>
                                        <span>Subtotal</span>{" "}
                                        <p>${totalPrice}</p>
                                    </li>
                                    <li>
                                        <span>Discount(-20%)</span>
                                        <p>-${totalPrice * 0.2}</p>
                                    </li>
                                    <li>
                                        <span>Delivery Fee</span> <p>$15</p>
                                    </li>
                                    <li>
                                        <span>Total</span>
                                        <p>
                                            $
                                            {totalPrice + 15 - totalPrice * 0.2}
                                        </p>
                                    </li>
                                </ul>
                                <button>Go to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
