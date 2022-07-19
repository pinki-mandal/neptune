import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { SignupValidation } from "../../validationChecker/ValidationChecker";
import "./Auth.css";

const Signup = () => {

    const { postSignup } = useAuthContext();

    const [error, setError] = useState({ isError: true });

    const [userDetail, setUserDetail] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
    });

    useEffect(() => {
        if (!error.isError) {
            postSignup(userDetail);
        }
    }, [error]);

    const inputHandler = (e) => {
        const { name, value } = e;
        setUserDetail({ ...userDetail, [name]: value });
    };

    const submitHandler = () => {
        const error = SignupValidation(userDetail);
        setError(error);
    };

    return (
        <form onSubmit={e => e.preventDefault()} className="signup-container flex-column flex-center">
            <div className="auth-container flex-column">
                <h2 className="text-align">Signup</h2>
                <label className="email-add-txt">Email address
                    <input
                        onChange={e => inputHandler(e.target)}
                        value={userDetail.email}
                        name="email"
                        className={`user-input ${error.email && "wrong-information"}`}
                        type="email"
                        placeholder="abc@gmail.com"
                    />
                </label>
                {error.email && <div className="wrong-input">{error.email}</div>}
                <label className="email-add">First name
                    <input
                        onChange={e => inputHandler(e.target)}
                        value={userDetail.firstname}
                        name="firstname"
                        className={`user-input ${error.firstName && "wrong-information"}`}
                        type="text"
                        placeholder="Enter First Name"
                    />
                </label>
                <label className="email-add">Last name
                    <input
                        onChange={e => inputHandler(e.target)}
                        value={userDetail.lastname}
                        name="lastname"
                        className={`user-input ${error.lastName && "wrong-information"}`}
                        type="text"
                        placeholder="Enter Last Name"
                    />
                </label>
                <label className="password">Password
                    <input
                        onChange={e => inputHandler(e.target)}
                        value={userDetail.password}
                        name="password"
                        className={`user-input ${error.password && "wrong-information"}`}
                        type="password"
                        placeholder="Enter Password"
                    />
                </label>
                {error.password && <div className="wrong-input">{error.password}</div>}
                <label className="password">Confirm Password
                    <input
                        onChange={e => inputHandler(e.target)}
                        value={userDetail.confirmpassword}
                        name="confirmpassword"
                        className={`user-input ${error.confirmPassword && "wrong-information"}`}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </label>
                <button
                    onClick={submitHandler}
                    className="login-btn submit-btn"
                >
                    Create New Account
                </button>
                <label className="text-align">Already a member?
                    <Link to="/login"><strong>Login</strong></Link>
                </label>
            </div>
        </form>
    )
}

export { Signup }