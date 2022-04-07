import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {

    return (
        <>
            <form class="signup-main-container">
                <div class="signup-container">
                    <h2 class="signup-heading">Signup</h2>
                    <label class="email-add-txt">Email address</label>
                    <input class="email-input input" type="email" placeholder="abc@gmail.com" />
                    <label class="email-add">First name</label>
                    <input class="email-input input" type="text" placeholder="Enter First Name" />
                    <label class="email-add">Last name</label>
                    <input class="email-input input" type="text" placeholder="Enter Last Name" />
                    <label class="password">Password</label>
                    <input class="email-input input" type="password" placeholder="Enter Password" />
                    <label class="password">Confirm Password</label>
                    <input class="email-input input" type="password" placeholder="Confirm Password" /><br />
                    <div class="checkbox-item">
                        <input class="checkbox-input" type="checkbox" />
                        <label class="checkbox-txt">I accept all Terms & Conditions</label><br />
                    </div>
                    <button class="submit-btn">
                        <Link to="/AllProducts">
                            Create New Account
                        </Link>
                    </button>
                    <label class="login-link">Already a member?
                        <Link to="/Login"><strong>Login</strong></Link>
                    </label>
                </div>
            </form>
        </>
    )
}

export { Signup }