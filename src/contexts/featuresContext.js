import React, { createContext, useContext, useReducer, useState } from 'react';
import { FeatureReducer } from './FeatureReducer';

const featureContext = createContext();

const FeatureProvider = ({ children }) => {

    const [addressModel, setAddressModel] = useState(false);
    const [userDetail, setUserDetail] = useState([]);
    const [orderSummary, setOrderSummary] = useState();

    const [feature, dispatchFeature] = useReducer(FeatureReducer, {
        cart: [],
        wishList: []
    });

    return (
        <featureContext.Provider value={{ feature, dispatchFeature, addressModel, setAddressModel, userDetail, setUserDetail, orderSummary, setOrderSummary }}>
            {children}
        </featureContext.Provider>
    )
}

const useFeatureContext = () => useContext(featureContext);
export { useFeatureContext, FeatureProvider };