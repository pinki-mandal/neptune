import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {

    return (
        <>
            <form className="signup-main-container">
                <div className="signup-container">
                    <h2 className="signup-heading">Signup</h2>
                    <label className="email-add-txt">Email address</label>
                    <input className="email-input input" type="email" placeholder="abc@gmail.com" />
                    <label className="email-add">First name</label>
                    <input className="email-input input" type="text" placeholder="Enter First Name" />
                    <label className="email-add">Last name</label>
                    <input className="email-input input" type="text" placeholder="Enter Last Name" />
                    <label className="password">Password</label>
                    <input className="email-input input" type="password" placeholder="Enter Password" />
                    <label className="password">Confirm Password</label>
                    <input className="email-input input" type="password" placeholder="Confirm Password" /><br />
                    <div className="checkbox-item">
                        <input className="checkbox-input" type="checkbox" />
                        <label className="checkbox-txt">I accept all Terms & Conditions</label><br />
                    </div>
                    <button className="submit-btn">
                        <Link to="/AllProducts">
                            Create New Account
                        </Link>
                    </button>
                    <label className="login-link">Already a member?
                        <Link to="/Login"><strong>Login</strong></Link>
                    </label>
                </div>
            </form>
        </>
    )
}

export { Signup }