import axios from 'axios';
import React, { useState, createContext, useContext } from 'react';
import { toast } from 'react-toastify';

const authContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState({
        user: localStorage.getItem("user"),
        authToken: localStorage.getItem("authToken"),
        status: localStorage.getItem("status") // || false
    });

    const LoginGuest = async ({ email, password }) => {
        try {
            const { data } = await axios.post("/api/auth/login", { email, password });
            localStorage.setItem("authToken", data.encodedToken);
            localStorage.setItem("user", data.foundUser.firstName);
            localStorage.setItem("status", true);
            setIsLogin({ status: true });
            setIsLogin({ ...isLogin, user: data.foundUser.firstName });
            toast.success(`Welcome back ${data.foundUser.firstName}`);
        } catch (error) {
            console.log(error.message);
        }
    };

    const postSignup = async ({ firstname, lastname, email, password }) => {
        try {
            const { data } = await axios.post('/api/auth/signup', {
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: password
            });
            setIsLogin({ ...isLogin, user: data.createdUser.firstName });
            toast.success(`Welcome ${data.createdUser.firstName}`);
        } catch (error) {
            console.log(error.message);
        }
    }

    const logoutHandler = () => {
        isLogin.authToken = localStorage.removeItem("authToken");
        isLogin.user = localStorage.removeItem("user");
        localStorage.removeItem("status", false);
        setIsLogin({ status: false });
        toast.info(`loggedout seccessfully`);
    }

    return (
        <authContext.Provider value={{ LoginGuest, isLogin, postSignup, logoutHandler }}>
            {children}
        </authContext.Provider>
    )
}

const useAuthContext = () => useContext(authContext);
export { useAuthContext, AuthProvider };