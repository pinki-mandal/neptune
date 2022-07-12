import axios from 'axios';
import React, { useState, createContext, useContext } from 'react';

const authContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState({
        user:localStorage.getItem("user"),
        authToken:localStorage.getItem("authToken")
    });

    const LoginGuest = async() => {
        const { data } = await axios.post("/api/auth/login", {
            email: "manojkumar@gmail.com",
            password: "manoj@123", 
        });
        localStorage.setItem("authToken", data.encodedToken, 500);
        localStorage.setItem("user", data.foundUser.firstName, 500);
        setIsLogin({...isLogin,user:data.foundUser.firstName});
    };

    return (
        <authContext.Provider value={{ LoginGuest, isLogin }}>
            {children}
        </authContext.Provider>
    )
}

const useAuthContext = () => useContext(authContext);
export { useAuthContext, AuthProvider };