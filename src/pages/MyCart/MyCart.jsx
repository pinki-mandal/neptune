import "./MyCart.css";
import { useProductContext } from "../../contexts/ProductsListContext";
import { useState } from "react";

const MyCart = () => {

    const { addCartState: { addCart }, addCartDispatch, wishListDispatch, wishListState: { addWishList } } = useProductContext();
    let totalPrice = 0;

    for (let i in addCart) {
        totalPrice += addCart[i].price
    }

    const [show, setShow] = useState("none")
    const ordrePlace = () => {
        setShow("block")
    }

    const hideCard = () => {
        setShow("none")
    }

    return (
        <div className="cart-container">

            <div className="add-cart-container">
                {
                    addCart.map((items, index) => (
                        <>
                            <div className="wishlist margin">
                                <div className="img-container">
                                    <img className="camera-images" src={items.imgURL}
                                        alt="camera image" />
                                    {
                                        addWishList.some(item => item.id === items.id) ? (
                                            <button className="heart-btn wishlist-icon setColor">&#10084;</button>
                                        ) : (
                                            <button onClick={() => wishListDispatch({ type: "ADD_TO_WISHLIST", payload: items })} className="heart-btn wishlist-icon">&#10084;</button>
                                        )
                                    }
                                </div>
                                <div className="about-cart-product">
                                    <div>
                                        <p className="cart-camera-title">{items.title}</p>
                                        <span>Brand : {items.brand}</span>
                                    </div>
                                    <div className="price-count-section">
                                        <div className="cart-price-section">
                                            <h3>₹{items.price}</h3>
                                            <small className="price-off">₹{items.offPrice}</small>
                                            <small className="percent-off">15% off</small>
                                        </div>
                                        <div className="counting-section">
                                            <button className="count-btn" onClick={() => addCartDispatch({ type: "INCREMENT", payload: items })}>+</button>
                                            <span className="counter">{items.qty}</span>
                                            <button className="count-btn" onClick={() => addCartDispatch({ type: "DECREMENT", payload: items })}>-</button>
                                        </div>
                                    </div>
                                    <button className="cart-btn btn-style" onClick={() => addCartDispatch({ type: "REMOVE_FROM_CART", payload: items })}>Remove From Cart</button>
                                </div>
                            </div>
                            <hr />
                        </>
                    ))
                }

            </div>
            <div className="total-price-container">
                <h4>PRICE DETAILS</h4>
                <hr />
                <div className="flex-distance">
                    <p>Price ({addCart.length} items)</p>
                    <p>₹{totalPrice}</p>
                </div>
                <div className="flex-distance">
                    <p>Delivery-charge</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="flex-distance">
                    <p>Total Amount</p>
                    <p>₹{totalPrice}</p>
                </div>
                <div className="order-btn-container">
                    <button className="order-btn" onClick={ordrePlace}>PLACE ORDER</button>
                </div>
            </div>

            <div className="model-container">
                <div class="container" style={{ display: show }}>
                    <h3>Your Order Placed</h3>
                    <p className="margin">
                        address: New Patel Nagar Orai(Jalaun), Utter Pradesh
                    </p>
                    <hr />
                    <div className="flex-distance margin">
                        <p>Price ({addCart.length} items)</p>
                        <p>₹{totalPrice}</p>
                    </div>
                    <div className="flex-distance margin">
                        <p>Delivery-charge</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="flex-distance margin">
                        <p>Total Amount</p>
                        <p>₹{totalPrice}</p>
                    </div>
                    <p className="margin">Your Order is Successful booked</p>
                    <p>Thanks for shopping this side</p>
                    <button class="ok-btn" onClick={hideCard}>OK</button>
                </div>
            </div>
        </div>
    )
}

export { MyCart }