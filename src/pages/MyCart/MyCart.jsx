import "./MyCart.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProductContext } from "../../contexts/ProductsListContext";
import { OrderBookModal } from "../../components/index";

const MyCart = () => {

    const { addCartState: { addCart }, addCartDispatch, wishListDispatch, wishListState: { addWishList }, setCartItemLength, setTotalPrice, hideCard, setHideCard } = useProductContext();
    let totalPrice = 0;

    for (let i in addCart) {
        totalPrice += addCart[i].price
    }

    const orderPlace = () => {
        setHideCard(true);
        setCartItemLength(addCart.length);
        setTotalPrice(totalPrice);
        toast.success("Your order is added successfully!")
    }

    const addWishlisthandler = (items) => {
        wishListDispatch({ type: "ADD_TO_WISHLIST", payload: items });
        toast.success("Item added in Cart");
    }

    const removeCartHandler = (items) => {
        addCartDispatch({ type: "REMOVE_FROM_CART", payload: items });
        toast.success("Item remove from Cart");
    }

    return (
        <div className="cart-container">
            <div className="add-cart-container m-16">
                {
                    addCart.length ? <div className="item-length p-8 text-align">
                        <h3>{addCart.length} item in your cart</h3>
                    </div> : undefined
                }
                {
                    addCart.map((items) => (
                        <>
                            <div className="wishlist m-tb-16">
                                <section className="img-section relative">
                                    <img className="camera-images" src={items.imgURL}
                                        alt="camera image" />
                                    {
                                        addWishList.some(item => item.id === items.id) ? (
                                            <button className="like-btn wishlist-icon setColor">&#10084;</button>
                                        ) : (
                                            <button onClick={() => addWishlisthandler(items)} className="like-btn wishlist-icon">&#10084;</button>
                                        )
                                    }
                                </section>
                                <div className="grid gap-8">
                                    <div>
                                        <p className="cart-camera-title">{items.title}</p>
                                        <span>Brand : {items.brand}</span>
                                    </div>
                                    <div className="flex">
                                        <div className="cart-price-section">
                                            <h3>₹{items.price}</h3>
                                            <small className="price-off">₹{items.offPrice}</small>
                                            <small className="percent-off">15% off</small>
                                        </div>
                                        <div className="ml-16">
                                            <button className="count-btn" onClick={() => addCartDispatch({ type: "DECREMENT", payload: items })}>-</button>
                                            <span className="m-lr-8">{items.qty}</span>
                                            <button className="count-btn" onClick={() => addCartDispatch({ type: "INCREMENT", payload: items })}>+</button>
                                        </div>
                                    </div>
                                    <button className="cart-btn btn-style" onClick={() => removeCartHandler(items)}>Remove From Cart</button>
                                </div>
                            </div>
                            <hr />
                        </>
                    ))
                }
                {
                    addCart.length ? <div className="total-price-container flex-column justify-around p-16 fixed m-t-32">
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
                        <div className="grid justify-center m-8">
                            <button className="order-btn" onClick={orderPlace}>PLACE ORDER</button>
                        </div>
                    </div> :
                        <div className="item-length p-8">
                            <h3>{addCart.length} item in your cart</h3>
                        </div>
                }
            </div>
            {hideCard && <OrderBookModal />}
        </div>
    )
}

export { MyCart }