import React from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';
import { useProductContext } from "../../contexts/ProductsListContext";

const Navigation = () => {

    const { productDispatch } = useProductContext()

    return (
        <>
            <nav className="navigation-bar">
                <div className='logo-design'>
                    <Link to="/" className="logo">Neptune</Link>
                    <small className='small-txt'>Capture The World</small>
                </div>
                <input onChange={(e) => {productDispatch({type: "SEARCH", payload: e.target.value })}} className="search-bar" type="text" placeholder="Search" />
                <ul className="side-nav-section">
                    <li><Link to="/Login" className="login-btn">👤</Link></li>
                    <li><Link to="/Wishlist" className="wishlist-btn btn">❤️<span
                        className="badge">5</span></Link></li>
                    <li><Link to="/MyCart" className="add-cart-btn btn"> &#128722; <span
                        className="badge">2</span></Link></li>
                </ul>
            </nav>
        </>
    )
}

export { Navigation }
