import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import "./Checkout.css";
import { Address } from '../../components/Address/Address';
import { useFeatureContext } from '../../contexts/featuresContext';
import { useAuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import { useProductContext } from '../../contexts/ProductsListContext';
import { useNavigate } from 'react-router-dom';
import { OrderSummary } from '../OrderSummary/OrderSummary';

export const Checkout = () => {

    const { addressModel, setAddressModel, userDetail, feature: { cart }, setOrderSummary, orderSummary } = useFeatureContext();
    const [chooseAddress, setChooseAddress] = useState([]);
    const { isLogin: { authToken } } = useAuthContext();
    const { totalPrice, cartItemLength } = useProductContext();
    const navigate = useNavigate();

    const addOrderService = async (order, authToken) => {
        navigate("/ordersummary");
        setOrderSummary( order );

        return await axios.post(
            "api/user/orders",
            { ...order },
            {
                headers: { authorization: authToken },
            }
        );
    };

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            console.log("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const options = {

            key: "rzp_test_SP206ka3zuV4SX",
            currency: "INR",
            amount: totalPrice * 100,
            name: "Neptune",
            description: "Order for products",
            handler: async function (response) {
                const paymentId = response.razorpay_payment_id;
                const orderId = uuid();

                const order = {
                    paymentId,
                    orderId,
                    amountPaid: totalPrice + 100,
                    orderedProducts: [...cart],
                    deliveryAddress: chooseAddress ,
                };
                const res = await addOrderService(order, authToken);
            },
            prefill: {
                name: chooseAddress.name,
                email: "manojkumar@example.com",
                contact: "9999999999",
            },
        }

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div className='checkout-main-container'>
            <div className='m-auto'>
                <h2>Checkout</h2>
            </div>
            <div className='checkout-container'>
                <section className='address-container'>
                    <h3>Select Address</h3>
                    <section className='address-section'>
                        {
                            userDetail.map(i =>
                                <div className='address-map' key={i.name}>
                                    <label htmlFor="address">
                                        <input onClick={() => setChooseAddress(i)} type="radio" id='address' name="address" />
                                        <p className='user-name'>{i.name}</p>
                                        <span>{i.houseNo} </span><br />
                                        <span> {i.city}  {i.code}</span> <br />
                                        <span>{i.state} </span>
                                        <span>{i.country}</span>
                                        <p>{i.mobile}</p>
                                    </label>
                                </div>
                            )
                        }
                    </section>
                    <button onClick={() => { setAddressModel(true) }} className="add-address-btn"><span className="material-icons">add</span>Add Address</button>
                </section>
                <section className='order-summary'>
                    <h3>Order Summary</h3>
                    <p className='text-align purchase-item'>PURCHASED ITEMS</p>
                    <hr />
                    <section>
                        <section className='item-price-section'>
                            <h3>Items</h3>
                            <h3>Price</h3>
                        </section>
                        {
                            cart.map(item => {
                                return (
                                    <section className='product-style' kry={item.brand}>
                                        <section>
                                            <p>{item.brand}</p>
                                        </section>
                                        <p>{item.price}</p>
                                    </section>
                                )
                            })
                        }
                        <section className='product-style'>
                            <p>No. of product </p>
                            <p>{cartItemLength}</p>
                        </section>
                    </section>
                    <hr />
                    <p className='text-align purchase-item'>BILLING</p>
                    <hr />
                    <section>
                        <section className='product-style'>
                            <p>Total MRP </p>
                            <p>Rs.-{totalPrice}</p>
                        </section>
                        <section className='product-style'>
                            <p>Delivery Fee</p>
                            <p>Rs.-100</p>
                        </section>
                        <section className='product-style'>
                            <p>Total: </p>
                            <p>Rs.-{totalPrice + 100}</p>
                        </section>
                    </section>
                    <hr />
                    <p className='text-align purchase-item'>
                        DELIVERING TO
                    </p>
                    <hr />
                    <section >
                        <p className='to-deliver-name'>{chooseAddress.name}</p>
                        <span>{chooseAddress.houseNo}</span> <br />
                        <span>{chooseAddress.city} {chooseAddress.code}</span> <br />
                        <span>{chooseAddress.state} </span>
                        <span> {chooseAddress.country}</span>
                        <p>{chooseAddress.mobile}</p>
                    </section>
                    <button onClick={displayRazorpay} className='proceed-btn'>Proced to Pay</button>
                </section>
            </div>
            <div className='aaa'>
                {
                    addressModel ? < Address /> : undefined
                }
            </div>
        </div>
    )
}
