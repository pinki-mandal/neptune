import React from "react";
import "./ProductList.css";
import { useProductContext } from "../../contexts/ProductsListContext";

const ProductList = () => {

    const { product,productState:{sort, byStock, byFastDelivery, byHomeCategory, byNikon, bySony, byCanon, bySamsung, byPanasonic, byRating, bySearch, byRange } } = useProductContext()

    const transformProducts = ()=>{
        let sortedProducts = product;

        if (sort) {
            sortedProducts = sortedProducts.sort((a,b) => 
            sort === "LOW_TO_HIGH" ? a.price - b.price : b.price - a.price 
            )
        }
        if (byStock){
            sortedProducts = sortedProducts.filter((prod) => prod.stock);
        }
        if (byFastDelivery){
            sortedProducts = sortedProducts.filter((prod) => prod.delivery);
        }
        if (byNikon){
            sortedProducts = sortedProducts.filter((prod) => prod.brand === byNikon || prod.brand === bySony || prod.brand === byCanon || prod.brand === bySamsung || prod.brand === byPanasonic );
        }
        if (bySony){
            sortedProducts = sortedProducts.filter((prod) => prod.brand === bySony || prod.brand === byNikon || prod.brand === byCanon || prod.brand === bySamsung || prod.brand === byPanasonic);
        }
        if (byCanon){
            sortedProducts = sortedProducts.filter((prod) => prod.brand === byCanon || prod.brand === bySony || prod.brand === byNikon || prod.brand === bySamsung || prod.brand === byPanasonic);
        }
        if (bySamsung){
            sortedProducts = sortedProducts.filter((prod) => prod.brand === bySamsung || prod.brand === bySony || prod.brand === byCanon || prod.brand === byNikon || prod.brand === byPanasonic);
        }
        if (byPanasonic){
            sortedProducts = sortedProducts.filter((prod) => prod.brand === byPanasonic || prod.brand === bySony || prod.brand === byCanon || prod.brand === bySamsung || prod.brand === byNikon);
        }
        if (byHomeCategory){
            sortedProducts = sortedProducts.filter((prod) => prod.brand === byHomeCategory)
        }
        if (byRating){
            sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating)
        }
        if (bySearch){
            sortedProducts = sortedProducts.filter((prod) => prod.brand.toLowerCase().includes(bySearch))
        }
        if (byRange){
            sortedProducts = sortedProducts.filter((prod) => prod.price >= byRange )
        }
         return sortedProducts
    }

    return (
        <div className="main-container">
            {
                transformProducts().map(({ title, brand, price, offPrice, imgURL, rating, mpixel, zoom, display_size, delivery, stock }) => {
                    return (
                        <>
                            <div className="wishlist">
                                <div className="img-container">
                                    <img className="camera-images" src={imgURL}
                                        alt="camera image" />
                                    <a className="wishlist-icon"><button className="heart-btn">♡</button></a>
                                </div>
                                <div className="about-product">
                                    <div>
                                        <p className="camera-title">{title}</p>
                                        <p className="rating">{rating}⭐ 65 Ratings & 472 Reviews</p>
                                        <ul className="features">
                                            <li>{mpixel}</li>
                                            <li>{zoom}</li>
                                            <li>{display_size}</li>
                                            <li>2 Year Warranty</li>
                                            <li>{stock ?<div>InStock</div>: <div>Out Of Stock</div>}</li>
                                            <li>Brand : {brand}</li>
                                        </ul>
                                        <button className="add-to-cart-btn">Add to Cart</button>
                                    </div>
                                    <div className="price-section">
                                        <h3>₹{price}</h3>
                                        <small className="price-off">₹{offPrice}</small>
                                        <small className="percent-off">5% off</small>
                                        <br />
                                        <small>Free delivery</small>
                                        <p>{delivery ? <div>FastDelivary</div>:<div>3-4 Days</div>}</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </>
                    )
                })
            }
        </div>
    )
}

export { ProductList }