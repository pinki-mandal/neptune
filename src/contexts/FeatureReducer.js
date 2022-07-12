export const FeatureReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TO_CART":
            return { ...state, cart: payload };
        case "ADD_TO_WISHLIST":
            return { ...state, wishList: payload }
        default:
            return { ...state };
    }
}