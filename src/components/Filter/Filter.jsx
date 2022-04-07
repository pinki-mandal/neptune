import React from "react";
import "./Filter.css";
import { useProductContext } from "../../contexts/ProductsListContext";
import { useCategoryContext } from "../../contexts/CategoryContext";

const Filter = () => {

    const { category } = useCategoryContext();

    const { productState: { byRange, sort, byStock, byFastDelivery, byRating, byCategory }, productDispatch, } = useProductContext()
    return (
        <aside className="side-bar">
            <div className="filter-clear">
                <h4>Filter</h4>
                <a className="clear-btn" onClick={() => { productDispatch({ type: "CLEAR" }) }}>Clear</a>
            </div>
            <hr />
            <h4 className="price-txt">Price</h4>
            <div className="filter-price">
                <h4>2k</h4>
                <h4>{byRange}</h4>
                <h4>183k</h4>
            </div>
            <div className="slide-container">
                <input type="range" min="1298" max="183690" onChange={(e) => productDispatch({ type: "RANGE", payload: e.target.value })} className="slider" />
            </div>
            <hr />
            <h4>Availability</h4>
            <div>
                <input onChange={() => { productDispatch({ type: "FILTER_BY_STOCK" }) }} checked={byStock} className="category-checkbox" type="checkbox" value="Instock" />
                <label className="category-label"> Instock</label><br />
                <input onChange={() => { productDispatch({ type: "FILTER_BY_DELIVERY" }) }} checked={byFastDelivery} className="category-checkbox" type="checkbox" value="Fast delivery" />
                <label className="category-label"> Fast delivery</label><br />
            </div>
            <hr />
            <h4 className="category-tx">Category</h4>
            <div className="category-choice">
                {
                    category.map(({ category }) => {
                        return (
                            <>
                                <input onChange={() => { productDispatch({ type: "CATEGORY", payload: category }) }} checked={byCategory.includes(category)} className="category-checkbox" type="checkbox" />
                                <label className="category-label"> {category}</label><br/>
                            </>
                        )
                    })
                }
            </div>
            <hr />
            <h4 className="rating-txt">Rating</h4>
            <div className="rating-choice">
                <input onChange={() => { productDispatch({ type: "RATING", payload: "4" }) }} checked={byRating == "4" ? true : false} className="category-checkbox" type="radio" name="star_rating" value="rating" />
                <label for="html">4 Stars & above</label><br />
                <input onChange={() => { productDispatch({ type: "RATING", payload: "3" }) }} checked={byRating == "3" ? true : false} className="category-checkbox" type="radio" name="star_rating" value="rating" />
                <label for="html">3 Star & above</label><br />
                <input onChange={() => { productDispatch({ type: "RATING", payload: "2" }) }} checked={byRating == "2" ? true : false} className="category-checkbox" type="radio" name="star_rating" value="rating" />
                <label for="html">2 Star & above</label><br />
                <input onChange={() => { productDispatch({ type: "RATING", payload: "1" }) }} checked={byRating == "1" ? true : false} className="category-checkbox" type="radio" name="star_rating" value="rating" />
                <label for="html">1 Star & above</label><br />
            </div>
            <hr />
            <h4 className="sort-by-txt">Sort by</h4>
            <div className="sort-by">
                <input className="category-checkbox" onChange={() => { productDispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" }) }} checked={sort === "LOW_TO_HIGH" ? true : false} type="radio" name="price_sort" value="sort" />
                <label for="html">Price-Low to High</label><br />
                <input className="category-checkbox" onChange={() => { productDispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" }) }} checked={sort === "HIGH_TO_LOW" ? true : false} type="radio" name="price_sort" value="sort" />
                <label for="html">Price-High to low</label><br />
            </div>
        </aside>
    )
}
export { Filter }