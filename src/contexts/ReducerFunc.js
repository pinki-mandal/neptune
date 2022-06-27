export const productReducer = (state, action) => {

    switch (action.type) {
        case "Home_Category":
            return { ...state, byHomeCategory: action.payload }
        case "SORT_BY_PRICE":
            return { ...state, sort: action.payload };
        case "FILTER_BY_STOCK":
            return { ...state, byStock: !state.byStock };
        case "FILTER_BY_DELIVERY":
            return { ...state, byFastDelivery: !state.byFastDelivery };
        case "NIKON":
            return { ...state, byNikon: action.payload };
        case "SONY":
            return { ...state, bySony: action.payload };
        case "CANON":
            return { ...state, byCanon: action.payload };
        case "PANASONIC":
            return { ...state, byPanasonic: action.payload };
        case "SAMSUNG":
            return { ...state, bySamsung: action.payload };
        case "RATING":
            return { ...state, byRating: action.payload };
        case "SEARCH":
            return { ...state, bySearch: action.payload };
        case "RANGE":
            return { ...state, byRange: action.payload }
        case "CATEGORY": {
            if (!state.byCategory.includes(action.payload)) {
                return { ...state, byCategory: [...state.byCategory, action.payload] }
            } else {
                const array = state.byCategory.filter(prod => prod !== action.payload);
                return { ...state, byCategory: array };
            }
        }
        case "CLEAR":
            return {
                sort: null,
                byStock: false,
                byFastDelivery: false,
                byHomeCategory: null,
                byNikon: null,
                bySony: null,
                byCanon: null,
                byPanasonic: null,
                bySamsung: null,
                byRating: null,
                bySearch: "",
                byRange: null,
                byCategory: []
            }
        default:
            return state;
    }
}


const addCartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { addCart: [...state.addCart, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_CART":
            return { addCart: state.addCart.filter((i) => i._id !== action.payload._id) }
        case "INCREMENT":
            const increaseValue = state.addCart.map(data => data.id === action.payload.id ?
                { ...action.payload, qty: action.payload.qty + 1 } : data);
            return { addCart: increaseValue };
        case "DECREMENT":
            if (action.payload.qty > 1) {
                const dicreaseValue = state.addCart.map(data => data.id === action.payload.id ?
                    { ...action.payload, qty: action.payload.qty - 1 } : data);
                return { addCart: dicreaseValue };
            }
        default:
            return state;
    }
}

const wishListReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return { addWishList: [...state.addWishList, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_WISHLIST":
            return { addWishList: state.addWishList.filter((i) => i.id !== action.payload.id) }
        default:
            return state;
    }
}

export { addCartReducer, wishListReducer }