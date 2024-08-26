import React, { memo, useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./cartModel.scss";
import { Checkbox } from "@mui/material";

const BOT_TOKEN = "7133064436:AAE11MDDY8hmQ2E7ivSYPqHku7k4Zpj-yUg";
const CHAT_ID = "-1001658369787";
const USER_ID = "5009656627";

const CartModal = ({ setOpen }) => {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [email, setEmail] = useState("john@gmail.com");
    const [address, setAddress] = useState("Nyu york");
    const [payment, setPayment] = useState("paypal");
    const [phone, setPhone] = useState(9991578387);
    const handleModalSubmit = (e) => {
        e.preventDefault();
        let text = "Order: %0A";
        text += `First Name: <b>${firstName}</b> %0A`;
        text += `Last Name: <b>${lastName}</b> %0A`;
        text += `Email: <b>${email}</b> %0A`;
        text += `Address: <b>${address}</b> %0A`;
        text += `Payment: <b>${payment}</b> %0A`;
        text += `Phone: <b>${phone}</b> %0A`;

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=html`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

        setOpen(false);
    };
    return (
        <>
            <div className="cart-overlay" onClick={() => setOpen(false)}></div>
            <div className="cart-modal">
                <h2 className="cart-modal__title">Make Payment</h2>
                <button className="cart-close" onClick={() => setOpen(false)}>
                    <IoMdClose />
                </button>

                <form
                    onSubmit={handleModalSubmit}
                    className="cart-modal__form"
                    action=""
                >
                    <div className="cart-modal__item">
                        <input
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="cart-modal__input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="cart-modal__item">
                        <input
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="cart-modal__input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="cart-modal__item">
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="cart-modal__input"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="cart-modal__item">
                        <textarea
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="cart-modal__input"
                            placeholder="Address for Delivery"
                            rows={5}
                        ></textarea>
                    </div>
                    <div className="cart-modal__item cart-modal__item-pay">
                        <label htmlFor="card">
                            Credit Card Or Debit
                            <input
                                required
                                value="card"
                                onChange={(e) => setPayment(e.target.value)}
                                type="radio"
                                name="pay"
                                id="card"
                                checked={payment === "card"}
                            />
                        </label>
                        <label htmlFor="paypal">
                            Paypal
                            <input
                                required
                                value="paypal"
                                onChange={(e) => setPayment(e.target.value)}
                                type="radio"
                                name="pay"
                                id="paypal"
                                checked={payment === "paypal"}
                            />
                        </label>
                        <label htmlFor="bank">
                            Bank Transfer
                            <input
                                required
                                value="bank"
                                onChange={(e) => setPayment(e.target.value)}
                                type="radio"
                                name="pay"
                                id="bank"
                                checked={payment === "bank"}
                            />
                        </label>
                    </div>
                    <div className="cart-modal__item">
                        <input
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="cart-modal__input"
                            type="number"
                            placeholder="Mobile phone"
                        />
                    </div>
                    <button>Go to Payment</button>
                </form>
            </div>
        </>
    );
};

export default memo(CartModal);
