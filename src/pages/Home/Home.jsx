import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useCategoryContext } from "../../contexts/CategoryContext";
import { useProductContext } from "../../contexts/ProductsListContext";

const Home = () => {

    const { productDispatch } = useProductContext()
    const { category } = useCategoryContext();

    return (
        <div>
            <section className="home-section">
                <div className="about-web">
                    <h2>Welcome To Neptune Camera Gallery</h2>
                    <p className="img-txt">Here many types of cameras according to your choice</p>
                    <Link to="/all-products"> <button onClick={() => { productDispatch({ type: "CLEAR" }) }} className="shop-btn">Shop now</button> </Link>
                </div>
            </section>
            <h1 className="text-align m-32">Available Brands</h1>
            <section className="new-collection flex-wrap justify-around">
                {category.map(({ category, image, _id }) => {
                    return (
                        <Link to="/all-products" key={_id}>
                            <div onClick={() => { productDispatch({ type: "CATEGORY", payload: category }) }} className="category-img">
                                <img className="img-style" src={image} />
                                <p className="category-txt text-align">{category}</p>
                            </div>
                        </Link>
                    );
                })}
            </section>
        </div>
    )
}

export { Home };