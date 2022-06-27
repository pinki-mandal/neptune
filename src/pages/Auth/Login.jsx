import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {

    return (
        <>
            <form className="login-main-container flex-center align-center">
                <div className="login-container">
                    <h1 className="login-heading text-align">Login</h1>
                    <section className="flex-column">
                        <label for="/">Email address</label>
                        <input className="mail-input" type="email" placeholder="abc@gmail.com" />
                        <label for="/">Password</label>
                        <input className="pass-input" type="password" placeholder="*************" />
                    </section>
                    <section className="flex justify-between">
                        <label for="/">
                            <input className="checkbox-inpt" type="checkbox" />
                            Remember me</label>
                        <Link to="/Forget" className="forget-pass-link">Forget Password?</Link>
                    </section>
                    <Link to="/all-products">
                        <button className="login-btn">Login</button><br />
                    </Link>
                    <Link className="create-account-link block text-align" to="/Signup">Create New Account</Link>
                </div>
            </form>
        </>
    )
}

export { Login }