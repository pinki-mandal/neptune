import React from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';
import { useProductContext } from "../../contexts/ProductsListContext";
import { useFeatureContext } from '../../contexts/featuresContext';

const Navigation = () => {

    const { productDispatch } = useProductContext();
    const {feature:{ cart, wishList }} = useFeatureContext();

    return (
        <header className="header-bar flex justify-between fixed">
            <div className='logo-design flex-column ml-16'>
                <Link to="/" className="logo ml-16">Neptune</Link>
                <small className='small-txt m-auto'>Capture The World</small>
            </div>
            <input onChange={(e) => { productDispatch({ type: "SEARCH", payload: e.target.value }) }} className="search-bar" type="search" placeholder="Search" />
            <ul className="login-section flex justify-around align-center">
                <li><Link to="/login" className="login-btn">Log in</Link></li>
                <li><Link to="/wishlist" className="wishlist-btn btn"><span className="material-icons favorite-icon">favorite_border</span><span
                    className="badge">{wishList.length}</span></Link></li>
                <li><Link to="/mycart" className="add-cart-btn btn"><span className="material-icons cart-icon">shopping_cart</span><span
                    className="badge">{cart.length}</span></Link></li>
            </ul>
        </header>
    )
}

export { Navigation }
