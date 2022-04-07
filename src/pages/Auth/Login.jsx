import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {

    return (
        <>
            <form className="login-main-container">
                <div className="login-container">
                    <h1 className="login-heading">Login</h1>
                    <section className="mail-password-container">
                        <label for="/">Email address</label>
                        <input className="mail-input" type="email" placeholder="abc@gmail.com" />
                        <label for="/">Password</label>
                        <input className="pass-input" type="password" placeholder="*************" />
                    </section>
                    <section className="forget-password-section">
                        <label for="/">
                            <input className="checkbox-inpt" type="checkbox" />
                            Remember me</label>
                        <Link to="/Forget" className="forget-pass-link">Forget Password?</Link>
                    </section>
                    <Link to="/AllProducts">
                        <button className="login-btn">Login</button><br />
                    </Link>
                    <Link className="create-account-link" to="/Signup">Create New Account</Link>
                </div>
            </form>
        </>
    )
}

export { Login }