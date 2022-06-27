import React from 'react';
import { useProductContext } from '../../contexts/ProductsListContext';
import './OrderBookModal.css';

export const OrderBookModal = () => {

    const { cartItemLength, totalPrice, setHideCard } = useProductContext();

    return (
        <div className="model-container">
            <div class="container text-align">
                <h3>Your Order Placed</h3>
                <p className="m-tb-16">
                    address: New Patel Nagar Orai(Jalaun), Utter Pradesh
                </p>
                <hr />
                <div className="flex-distance flex justify-between m-tb-16">
                    <p>Price ({cartItemLength} items)</p>
                    <p>₹{totalPrice}</p>
                </div>
                <div className="flex-distance flex justify-between m-tb-16">
                    <p>Delivery-charge</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="flex-distance flex justify-between m-tb-16">
                    <p>Total Amount</p>
                    <p>₹{totalPrice}</p>
                </div>
                <p className="m-tb-16">Your Order is Successfully booked</p>
                <p>Thanks for shopping this side</p>
                <button class="ok-btn m-t-16" onClick={_ => { setHideCard(false) }}>OK</button>
            </div>
        </div>
    )
}
