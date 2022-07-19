import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { Link } from "react-router-dom";
import "./Auth.css";

export const Logout = () => {

    const { logoutHandler } = useAuthContext();
    return (
        <main className='logout-main-container'>
            <div className='logout-container'>
                <section className="logout-avatar-section">
                    <img src="./assets/avatar.svg" alt="avatar" className='logout-avatar' />
                    <section>
                        <h3>Manoj Kumar</h3>
                        <p>manojkumar@gmail.com</p>
                    </section>
                </section>
                <Link to="/">
                    <button onClick={logoutHandler} className='logout-btn'>Logout</button>
                </Link>
            </div>
        </main >
    )
}
