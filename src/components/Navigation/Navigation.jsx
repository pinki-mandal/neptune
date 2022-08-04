import React, { useState } from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';
import { useProductContext } from "../../contexts/ProductsListContext";
import { useFeatureContext } from '../../contexts/featuresContext';
import { useAuthContext } from '../../contexts/AuthContext';

const Navigation = () => {

    const [profileShow, setProfileShow] = useState(false);
    const { productDispatch } = useProductContext();
    const { feature: { cart, wishList } } = useFeatureContext();
    const { isLogin: { user, status } } = useAuthContext();
    const authStatus = localStorage.getItem("status");

    return (
        <header className="header-bar flex justify-between fixed">
            <div className='logo-design flex-column ml-16'>
                <Link to="/" className="logo ml-16">Neptune</Link>
                <small className='small-txt m-auto'>Capture The World</small>
            </div>
            <input
                onChange={(e) => { productDispatch({ type: "SEARCH", payload: e.target.value }) }}
                className="search-bar"
                type="search"
                placeholder="Search"
            />
            <ul className="login-section flex justify-around align-center relative">
                {
                    authStatus ?
                        <li onClick={() => setProfileShow(profileShow ? false : true)} className="auth-btn"><span class="material-icons">person</span></li> :
                        <li><Link to={"/login"} className="auth-btn"><span class="material-icons">person</span></Link></li>
                }
                <li><Link to="/wishlist" className="wishlist-btn btn"><span className="material-icons favorite-icon">favorite_border</span><span
                    className="badge">{wishList.length}</span></Link></li>
                <li><Link to="/mycart" className="add-cart-btn btn"><span className="material-icons cart-icon">shopping_cart</span><span
                    className="badge">{cart.length}</span></Link></li>
                {
                    profileShow && <section className='profile-order-view'>
                        <span class="material-icons dropdown-arrow">arrow_drop_up</span>
                        <p><Link to={"/logout"} onClick={() => { setProfileShow(false) }}>Profile</Link></p>
                        <p><Link to={"/ordersummary"} onClick={() => { setProfileShow(false) }}> Order</Link></p>
                    </section>
                }
            </ul>
        </header>
    )
}

export { Navigation }
