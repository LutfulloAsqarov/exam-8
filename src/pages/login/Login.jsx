import React, { useEffect, useState } from "react";
import "./login.scss";
import loginImg from "../../assets/login.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../context/slices/authSlice";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useSignInMutation } from "../../context/api/adminApi";

const Login = () => {
    const [username, setUsername] = useState("john33");
    const [password, setPassword] = useState("12345678");
    const [showPass, setShowPass] = useState(false);

    const [signIn, { data, isSuccess, isError }] = useSignInMutation();

    console.log(data);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccess) {
            dispatch(setToken(data.payload.token));
            navigate("/admin");
            // dispatch(setUser(data.admin));
        }
        if (isError) {
            // toast.error("Xato kiritingiz");
        }
    }, [isSuccess, isError]);

    const handelSubmit = (e) => {
        e.preventDefault();
        signIn({
            username: username,
            password: password,
        });
    };

    return (
        <div className="login">
            <div className="login__left">
                <img src={loginImg} alt="" />
            </div>
            <div className="login__right">
                <form onSubmit={handelSubmit} action="" className="login__form">
                    <p className="login__form__title">Sign In</p>
                    <p className="login__form__desc">
                        Don’t have an accout yet? Sign Up
                    </p>
                    <div className="login__form__input">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="login__form__input">
                        <input
                            type={`${showPass ? "text" : "password"}`}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            onClick={() => setShowPass((p) => !p)}
                            type="button"
                        >
                            {showPass ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                    <div className="login__form__ask">
                        <p>Remember me</p>
                        <p>Forgot Password?</p>
                    </div>
                    <button className="login__form__btn">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
