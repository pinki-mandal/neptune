import "./WishList.css";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useFeatureContext } from "../../contexts/featuresContext";
import { addToCart, removeFromWishlist } from "../../contexts/Services";


const WishList = () => {

    const { feature: { wishList, cart }, dispatchFeature } = useFeatureContext();

    const actionHandler = (type,items) => {
        if(type === "RemoveToWishlist"){
            removeFromWishlist(items._id, dispatchFeature)
        }else{
            addToCart(items, dispatchFeature);
        }
    };
    return (
        <div className="cart-container">
            <div className="wish-list-container">
                <div className="item-length p-8 text-align">
                    <h3 className="m-auto">{wishList.length} items in your wishlist</h3>
                </div>
                {
                    wishList.map(items => (
                        <>
                            <div className="wishlist-container p-16 m-tb-16">
                                <section className="img-section relative">
                                    <img className="camera-images" src={items.imgURL}
                                        alt="camera image" />
                                    <button onClick={() => actionHandler("RemoveToWishlist",items)} className="like-btn wishlist-icon setColor"><img src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png" /></button>
                                </section>
                                <section className="about-product">
                                    <div>
                                        <p className="camera-title">{items.title}</p>
                                        <p className="rating">{items.rating}⭐ 65 Ratings & 472 Reviews</p>
                                        <ul className="features">
                                            <li>2 Year Warranty</li>
                                            <li>{items.stock ? <div>InStock</div> : <div>Out Of Stock</div>}</li>
                                            <li>Brand : {items.brand}</li>
                                        </ul>
                                        {
                                            cart.some(i => i.id === items.id) ? (
                                                <Link to="/mycart">
                                                    <button className="add-btn go-btn-style">Go to Cart</button>
                                                </Link>
                                            ) : (
                                                <button className="add-btn btn-style" onClick={() => actionHandler("AddToCart", items)}>
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
                                </section>
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