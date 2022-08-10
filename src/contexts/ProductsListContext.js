import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { productReducer } from "./ReducerFunc";

const productContext = createContext();

const ProductListProvider = ({ children }) => {

    const [productState, productDispatch] = useReducer(productReducer, {
        sort: null,
        byStock: false,
        byFastDelivery: false,
        byHomeCategory: null,
        byRating: null,
        bySearch: "",
        byRange: 183690,
        byCategory: []
    });

    const [cartItemLength, setCartItemLength] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/products");
                setProduct(response.data.products);
            }
            catch (error) {
                console.log(error)
            }
        })()
    }, []);

    return (
        <productContext.Provider value={{ product, productState, cartItemLength, setCartItemLength, totalPrice, setTotalPrice, productDispatch, }}>
            {children}
        </productContext.Provider>
    );
};

const useProductContext = () => useContext(productContext);

export { useProductContext, ProductListProvider }