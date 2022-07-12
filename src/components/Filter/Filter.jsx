import React from "react";
import "./Filter.css";
import { useProductContext } from "../../contexts/ProductsListContext";
import { useCategoryContext } from "../../contexts/CategoryContext";

const Filter = () => {

    const { category } = useCategoryContext();

    const { productState: { byRange, sort, byStock, byFastDelivery, byRating, byCategory }, productDispatch, } = useProductContext()
    return (
        <aside className="side-bar sticky">
            <div className="m-b-8 flex justify-between">
                <h4>Filter</h4>
                <p className="clear-btn pointer" onClick={() => { productDispatch({ type: "CLEAR" }) }}>Clear</p>
            </div>
            <hr />
            <h4 className="m-t-16">Price</h4>
            <div className="filter-price flex justify-between m-t-8">
                <h4>2k</h4>
                <h4>{byRange}</h4>
                <h4>183k</h4>
            </div>
            <div className="slide-container">
                <input type="range" min="1298" max="183690" onChange={(e) => productDispatch({ type: "RANGE", payload: e.target.value })} className="slider pointer" />
            </div>
            <hr />
            <section className="availability-section m-tb-16">
                <h4>Availability</h4>
                <label htmlFor="Instock" className="pointer">
                    <input onChange={() => { productDispatch({ type: "FILTER_BY_STOCK" }) }} id="Instock" checked={byStock} className="category-checkbox" type="checkbox" value="Instock" />
                    Instock</label>
                <label htmlFor="Fast-delivery" className="pointer">
                    <input onChange={() => { productDispatch({ type: "FILTER_BY_DELIVERY" }) }} id="Fast-delivery" checked={byFastDelivery} className="category-checkbox" type="checkbox" value="Fast delivery" />
                    Fast delivery</label>
            </section>
            <hr />
            <section className="m-tb-8">
                <h4 className="">Category</h4>
                {
                    category.map(({ category }) => {
                        return (
                            <div key={category}>
                                <label htmlFor={{ category }} className="pointer">
                                    <input onChange={() => { productDispatch({ type: "CATEGORY", payload: category }) }} checked={byCategory.includes(category)} className="category-checkbox" type="checkbox" />
                                    {category}</label>
                            </div>
                        )
                    })
                }
            </section>
            <hr />
            <section className="rating-section m-tb-16">
                <h4 className="rating-txt">Rating</h4>
                <label htmlFor="star-4" className="pointer">
                    <input onChange={() => { productDispatch({ type: "RATING", payload: "4" }) }} id="star-4" checked={byRating == "4" ? true : false} className="category-checkbox" type="radio" name="star_rating" value="rating" />
                    4 Stars & above</label>
                <label htmlFor="star-3" className="pointer">
                    <input onChange={() => { productDispatch({ type: "RATING", payload: "3" }) }} id="star-3" checked={byRating == "3" ? true : false} className="category-checkbox" type="radio" name="star_rating" value="rating" />
                    3 Star & above</label>
                <label htmlFor="star-2" className="pointer">
                    <input onChange={() => { productDispatch({ type: "RATING", payload: "2" }) }} id="star-2" checked={byRating == "2" ? true : false} className="category-checkbox" type="radio" name="star_rating" value="rating" />
                    2 Star & above</label>
                <label htmlFor="star-1" className="pointer">
                    <input onChange={() => { productDispatch({ type: "RATING", payload: "1" }) }} id="star-1" checked={byRating == "1" ? true : false} className="category-checkbox" type="radio" name="star_rating" value="rating" />
                    1 Star & above</label>
            </section>
            <hr />
            <div className="sort-by m-tb-16">
                <h4 className="sort-by-txt">Sort by</h4>
                <label htmlFor="low" className="pointer">
                    <input className="category-checkbox" onChange={() => { productDispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" }) }} checked={sort === "LOW_TO_HIGH" ? true : false} id="low" type="radio" name="price_sort" value="sort" />
                    Price-Low to High</label>
                <label htmlFor="high" className="pointer">
                    <input className="category-checkbox" onChange={() => { productDispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" }) }} checked={sort === "HIGH_TO_LOW" ? true : false} id="high" type="radio" name="price_sort" value="sort" />
                    Price-High to low</label>
            </div>
        </aside>
    )
}
export { Filter }