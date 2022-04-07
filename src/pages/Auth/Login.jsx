import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {

    return (
        <>
            <form class="login-main-container">
                <div class="login-container">
                    <h1 class="login-heading">Login</h1>
                    <section class="mail-password-container">
                        <label for="/">Email address</label>
                        <input class="mail-input" type="email" placeholder="abc@gmail.com" />
                        <label for="/">Password</label>
                        <input class="pass-input" type="password" placeholder="*************" />
                    </section>
                    <section class="forget-password-section">
                        <label for="/">
                            <input class="checkbox-inpt" type="checkbox" />
                            Remember me</label>
                        <Link to="/Forget" class="forget-pass-link">Forget Password?</Link>
                    </section>
                    <Link to="/AllProducts">
                        <button class="login-btn">Login</button><br />
                    </Link>
                    <Link class="create-account-link" to="/Signup">Create New Account</Link>
                </div>
            </form>
        </>
    )
}

export { Login }