export const productReducer = (state, action) => {

    switch (action.type) {
        case "SORT_BY_PRICE":
            return { ...state, sort: action.payload };
        case "FILTER_BY_STOCK":
            return { ...state, byStock: !state.byStock };
        case "FILTER_BY_DELIVERY":
            return { ...state, byFastDelivery: !state.byFastDelivery };
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
                byRating: null,
                bySearch: "",
                byRange: null,
                byCategory: []
            }
        default:
            return state;
    }
}