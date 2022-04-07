import "./WishList.css";
import { Link } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductsListContext";

const WishList = () => {

    const { wishListState: { addWishList }, addCartState: { addCart }, addCartDispatch, wishListDispatch } = useProductContext();

    return (
        <div className="cart-container">
            <div className="add-cart-container">
                <div className="item-length">
                    <h3>{addWishList.length} items in your wishlist</h3>
                </div>
                {
                    addWishList.map(items => (
                        <>
                            <div className="wishlist-container">
                                <div className="img-container">
                                    <img className="camera-images" src={items.imgURL}
                                        alt="camera image" />
                                    <button onClick={() => wishListDispatch({ type: "REMOVE_FROM_WISHLIST", payload: items })} className="heart-btn wishlist-icon setColor"><img src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png" /></button>
                                </div>
                                <div className="about-product">
                                    <div>
                                        <p className="camera-title">{items.title}</p>
                                        <p className="rating">{items.rating}⭐ 65 Ratings & 472 Reviews</p>
                                        <ul className="features">
                                            <li>2 Year Warranty</li>
                                            <li>{items.stock ? <div>InStock</div> : <div>Out Of Stock</div>}</li>
                                            <li>Brand : {items.brand}</li>
                                        </ul>
                                        {
                                            addCart.some(i => i.id === items.id) ? (
                                                <Link to="/MyCart">
                                                    <button className="add-btn go-btn-style">Go to Cart</button>
                                                </Link>
                                            ) : (
                                                <button className="add-btn btn-style" onClick={() => addCartDispatch({ type: "ADD_TO_CART", payload: items })}>
                                                    Add To Cart</button>
                                            )
                                        }
                                    </div>
                                    <div className="price-section">
                                        <h3>₹{items.price}</h3>
                                        <small className="price-off">₹{items.offPrice}</small>
                                        <small className="percent-off">15% off</small>
                                        <br />
                                        <small>Free delivery</small>
                                        <p>{items.delivery ? <div>FastDelivary</div> : <div>3-4 Days</div>}</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export { WishList }