import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useCategoryContext } from "../../contexts/CategoryContext";
import { useProductContext } from "../../contexts/ProductsListContext";

const Home = () => {

    const { productDispatch } = useProductContext()
    const { category } = useCategoryContext();

    return (
        <>
            <section className="main-img-container">
                <div className="about-web">
                    <h2>Welcome To Neptune Camera Gallery</h2>
                    <p className="img-txt">Here many types of cameras according to your choice</p>
                    <Link to="/AllProducts"> <button onClick={() => { productDispatch({ type: "CLEAR" }) }} className="shop-btn">Shop now</button> </Link>
                </div>
                <img className="main-img" src="./Assests/images/main-image.jpg" alt="camera image" />
            </section>
            <h3 className="new-colle-title">Available Brands</h3>
            <div className="new-colle-item">
                {category.map(({ categoryName, image }) => {
                    return (
                        <Link to="/AllProducts" >
                            <div onClick={() => { productDispatch({ type: "Home_Category", payload: categoryName }) }} className="category-img">
                                <img className="img-style" src={image} />
                                <p className="category-txt">{categoryName}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    )
}

export { Home };