import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {

    return (
        <form className="signup-main-container flex-column flex-center">
            <div className="signup-container flex-column">
                <h2 className="m-auto">Signup</h2>
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
                    <Link to="/all-products">
                        Create New Account
                    </Link>
                </button>
                <label className="text-align">Already a member?
                    <Link to="/login"><strong>Login</strong></Link>
                </label>
            </div>
        </form>
    )
}

export { Signup }