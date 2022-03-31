import React from "react";
import "./Filter.css";
import { useProductContext } from "/home/navgurukul/Documents/GitHub/neptune/src/contexts/ProductsListContext.js";

const Filter = () => {

    const { productState:{byRange}, productDispatch, } = useProductContext()
    return (
        <aside className="side-bar">
            <div className="filter-clear">
                <h4>Filter</h4>
                <button onClick={() => { productDispatch({ type: "CLEAR" }) }}>Clear</button>
            </div>
            <hr />
            <h4 className="price-txt">Price</h4>
            <div className="filter-price">
                <h4>2k</h4>
                <h4>{byRange}</h4>
                <h4>183k</h4>
            </div>
            <div className="slide-container">
                <input type="range" min="1298" max="183690" onChange={(e)=>productDispatch({type:"RANGE", payload:e.target.value})}  className="slider" />
            </div>
            <hr />
            <h4>Availability</h4>
            <div>
                <input onChange={() => { productDispatch({ type: "FILTER_BY_STOCK" }) }} className="category-checkbox" type="checkbox" value="Instock" />
                <label className="category-label"> Instock</label><br />
                <input onChange={() => { productDispatch({ type: "FILTER_BY_DELIVERY" }) }} className="category-checkbox" type="checkbox" value="Fast delivery" />
                <label className="category-label"> Fast delivery</label><br />
            </div>
            <hr />
            <h4 className="category-tx">Category</h4>
            <div className="category-choice">
                <input onChange={() => { productDispatch({ type: "NIKON", payload: "NIKON" }) }} className="category-checkbox" type="checkbox" value="Nikon" />
                <label className="category-label"> Nikon</label><br />
                <input onChange={() => { productDispatch({ type: "SONY", payload: "SONY"  }) }} className="category-checkbox" type="checkbox" value="Sony" />
                <label className="category-label"> Sony</label><br />
                <input onChange={() => { productDispatch({ type: "CANON", payload: "CANON"  }) }} className="category-checkbox" type="checkbox" value="Sony" />
                <label className="category-label"> Canon</label><br />
                <input onChange={() => { productDispatch({ type: "PANASONIC", payload: "PANASONIC"  }) }} className="category-checkbox" type="checkbox" value="Sony" />
                <label className="category-label"> Panasonic</label><br />
                <input onChange={() => { productDispatch({ type: "SAMSUNG", payload: "SAMSUNG"  }) }} className="category-checkbox" type="checkbox" value="Sony" />
                <label className="category-label"> Samsung</label><br />
            </div>
            <hr />
            <h4 className="rating-txt">Rating</h4>
            <div className="rating-choice">
                <input onChange={()=>{ productDispatch ({ type:"RATING", payload:"4"})}} className="category-checkbox" type="radio" name="star_rating" value="rating" />
                <label for="html">4 Stars & above</label><br />
                <input onChange={()=>{ productDispatch ({ type:"RATING", payload:"3"})}} className="category-checkbox" type="radio" name="star_rating" value="rating" />
                <label for="html">3 Star & above</label><br />
                <input onChange={()=>{ productDispatch ({ type:"RATING", payload:"2"})}} className="category-checkbox" type="radio" name="star_rating" value="rating" />
                <label for="html">2 Star & above</label><br />
                <input onChange={()=>{ productDispatch ({ type:"RATING", payload:"1"})}} className="category-checkbox" type="radio" name="star_rating" value="rating" />
                <label for="html">1 Star & above</label><br />
            </div>
            <hr />
            <h4 className="sort-by-txt">Sort by</h4>
            <div className="sort-by">
                <input className="category-checkbox" onChange={() => { productDispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" }) }} type="radio" name="price_sort" value="sort" />
                <label for="html">Price-Low to High</label><br />
                <input className="category-checkbox" onChange={() => { productDispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" }) }} type="radio" name="price_sort" value="sort" />
                <label for="html">Price-High to low</label><br />
            </div>
        </aside>

    )
}

export { Filter }