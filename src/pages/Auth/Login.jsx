import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import "./Login.css";

const Login = () => {

    const { LoginGuest, isLogin } = useAuthContext();

    const loginGuestHandler = () => {
        LoginGuest();
        console.log(isLogin,"tf");
    }

    return (
        <>
            <form className="login-main-container flex-center align-center">
                <div className="login-container">
                    <h1 className="login-heading text-align">Login</h1>
                    <section className="flex-column">
                        <label htmlFor="/">Email address</label>
                        <input className="mail-input" type="email" placeholder="abc@gmail.com" />
                        <label htmlFor="/">Password</label>
                        <input className="pass-input" type="password" placeholder="*************" />
                    </section>
                    <section className="flex justify-between">
                        <label htmlFor="/">
                            <input className="checkbox-inpt" type="checkbox" />
                            Remember me</label>
                        <Link to="/Forget" className="forget-pass-link">Forget Password?</Link>
                    </section>
                    <Link to="/all-products">
                        <button onClick={loginGuestHandler} className="login-btn">Login</button><br />
                    </Link>
                    <Link className="create-account-link block text-align" to="/Signup">Create New Account</Link>
                </div>
            </form>
        </>
    )
}

export { Login }