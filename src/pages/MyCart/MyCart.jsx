import "./MyCart.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProductContext } from "../../contexts/ProductsListContext";
import { OrderBookModal } from "../../components/index";
import { useFeatureContext } from "../../contexts/featuresContext";
import { addToWishlist, incrementDecrementCartValue, removeFromCart } from "../../contexts/Services";
import { useState } from "react";


const MyCart = () => {

    const { setCartItemLength, setTotalPrice, hideCard, setHideCard } = useProductContext();
    const { feature: { cart, wishList }, dispatchFeature } = useFeatureContext();
    const [totalPrice, setTotalValue] = useState(0);

    const incrementPrice = () => {
        cart.reduce((acc,curr) => {
            acc = (curr.qty+1) * curr.price
            setTotalValue(acc);
        },0)
    }

    const decrementPrice = () => {
        cart.reduce((acc,curr) => {
            acc = (curr.qty+1) * curr.price
            setTotalValue(acc);
        },0)
    }

    const orderPlace = () => {
        setHideCard(true);
        setCartItemLength(cart.qty);
        setTotalPrice(totalPrice);
        toast.success("Your order is added successfully!")
    }

    const actionHandler = (action, items) => {
        if (action === "AddToWishlist") {
            addToWishlist(items, dispatchFeature)
        } else if (action === "RemoveFromCart") {
            removeFromCart(items._id, dispatchFeature)
        } else if (action === "increment") {
            incrementDecrementCartValue(items._id, dispatchFeature, action)
        } else if (action == "decrement") {
            incrementDecrementCartValue(items._id, dispatchFeature, action)
        }
    }

    return (
        <div className="cart-container">
            <div className="add-cart-container m-16">
                {
                    cart.length ?
                        <div className="item-length p-8 text-align">
                            <h3>{cart.length} item in your cart</h3>
                        </div> : undefined
                }
                {
                    cart.map((items) => (
                        <div key={items._id}>
                            <section className="wishlist m-tb-16">
                                <section className="img-section relative">
                                    <img className="camera-images" src={items.imgURL}
                                        alt="camera image" />
                                    {
                                        wishList.some(item => item.id === items.id) ? (
                                            <button className="like-btn wishlist-icon setColor">&#10084;</button>
                                        ) : (
                                            <button onClick={() => actionHandler("AddToWishlist", items)} className="like-btn wishlist-icon">&#10084;</button>
                                        )
                                    }
                                </section>
                                <section className="grid gap-8">
                                    <section>
                                        <p className="cart-camera-title">{items.title}</p>
                                        <span>Brand : {items.brand}</span>
                                    </section>
                                    <section className="flex">
                                        <section className="cart-price-section">
                                            <h3>₹{items.price}</h3>
                                            <small className="price-off">₹{items.offPrice}</small>
                                            <small className="percent-off">15% off</small>
                                        </section>
                                        <section className="ml-16">
                                            <button className="count-btn" onClick={() =>{ actionHandler("decrement", items), decrementPrice() }}><span class="material-icons minus-icon">remove_circle_outline</span></button>
                                            <span className="m-lr-8 quantity">{items.qty}</span>
                                            <button className="count-btn" onClick={() => { actionHandler("increment", items), incrementPrice() }}><span class="material-icons plus-icon">add_circle_outline</span></button>
                                        </section>
                                    </section>
                                    <button className="cart-btn btn-style" onClick={() => actionHandler("RemoveFromCart", items)}>Remove From Cart</button>
                                </section>
                            </section>
                            <hr />
                        </div>
                    ))
                }
                {
                    cart.length ?
                        <div className="total-price-container flex-column justify-around p-16 fixed m-t-32">
                            <h4>PRICE DETAILS</h4>
                            <hr />
                            <section className="flex justify-between">
                                <p>Price ({cart.length} items)</p>
                                <p>₹{totalPrice}</p>
                            </section>
                            <section className="flex justify-between">
                                <p>Delivery-charge</p>
                                <p>Free</p>
                            </section>
                            <hr />
                            <section className="flex justify-between">
                                <p>Total Amount</p>
                                <p>₹{totalPrice}</p>
                            </section>
                            <section className="grid justify-center m-8">
                                <button className="order-btn" onClick={orderPlace}>PLACE ORDER</button>
                            </section>
                        </div> :
                        <div className="item-length p-8">
                            <h3>{cart.length} item in your cart</h3>
                        </div>
                }
            </div>
            {hideCard && <OrderBookModal />}
        </div>
    )
}

export { MyCart }