import axios from "axios";
import { toast } from "react-toastify";


export const addToCart = async (product, dispatch) => {
    try {
        const { data, status } = await axios.post("/api/user/cart", { product },
            {
                headers: { authorization: localStorage.getItem("authToken") }
            });
        if (status === 201) {
            dispatch({ type: "ADD_TO_CART", payload: data.cart });
            toast.success("Item added in cart");
        };
    } catch (error) {
        console.log(error);
    };
};

export const incrementDecrementCartValue = async (productId, dispatch, action) => {
    try {
        const { data, status } = await axios.post(`/api/user/cart/${productId}`, {
            action: { type: action }
        },
            {
                headers: { authorization: localStorage.getItem("authToken") }
            });
        if (status === 200) {
            dispatch({ type: "ADD_TO_CART", payload: data.cart });
        };
    } catch (error) {
        console.log(error)
    };
};

export const removeFromCart = async (productId, dispatch) => {
    try {
        const { data, status } = await axios.delete(`/api/user/cart/${productId}`,
            {
                headers: { authorization: localStorage.getItem("authToken") }
            });
        if (status === 200) {
            dispatch({ type: "ADD_TO_CART", payload: data.cart });
            toast.success("Item remove from cart");
        };
    } catch (error) {
        console.log(error);
    }
}

export const addToWishlist = async (product, dispatch) => {
    try {
        const { data, status } = await axios.post("/api/user/wishlist", { product },
            {
                headers: { authorization: localStorage.getItem("authToken") }
            });
        if (status === 201) {
            dispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist });
            toast.success("item added in wishlist");
        };
    } catch (error) {
        console.log(error);
    };
};

export const removeFromWishlist = async (productId, dispatch) => {
    try {
        const { data, status } = await axios.delete(`/api/user/wishlist/${productId}`,
            {
                headers: { authorization: localStorage.getItem("authToken") }
            });
        if (status === 200) {
            dispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist });
            toast.success("Item remove from wishlist");
        };
    } catch (error) {
        console.log(error);
    }
}