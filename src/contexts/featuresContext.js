import React, { createContext, useContext, useReducer } from 'react';
import { FeatureReducer } from './FeatureReducer';

const featureContext = createContext();

const FeatureProvider = ({ children }) => {

    const [feature, dispatchFeature] = useReducer(FeatureReducer, {
        cart: [],
        wishList: []
    });

    return (
        <featureContext.Provider value={{ feature, dispatchFeature }}>
            {children}
        </featureContext.Provider>
    )
}

const useFeatureContext = () => useContext(featureContext);
export { useFeatureContext, FeatureProvider };