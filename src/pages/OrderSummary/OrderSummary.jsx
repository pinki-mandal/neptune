import React from 'react';
import { Link } from 'react-router-dom';
import { useFeatureContext } from '../../contexts/featuresContext';
import "./OrderSummary.css";

export const OrderSummary = () => {
  const { orderSummary } = useFeatureContext();

  return (
    <div className='order-summary-container'>
      {
        orderSummary !== undefined ?
          <>
            <h2>Order Placed Successfully!</h2>
            <div>
              <section>
                {
                  orderSummary !== undefined ?
                    (
                      <section className='id-section'>
                        <p><span>Payment Id:</span> {orderSummary.paymentId}</p>
                        <p><span>Order Id:</span> {orderSummary.orderId}</p>
                        <p><span>Amount Paid:</span> ₹{orderSummary.amountPaid}</p>
                        {
                          orderSummary !== undefined ? (
                            <section>
                              <span>Address: </span>
                              <span>{orderSummary.deliveryAddress.name}</span><br />
                              <span>{orderSummary.deliveryAddress.houseNo}, {orderSummary.deliveryAddress.city} - {orderSummary.deliveryAddress.code}</span><br />
                              <span>{orderSummary.deliveryAddress.mobile}</span>
                            </section>
                          ) : <h1>drfty</h1>
                        }
                      </section>
                    ) :
                    ""
                }
              </section>
              <section className='order-product'>
                <h3>Products Ordered:</h3>
                {
                  orderSummary !== undefined ?
                    (
                      orderSummary.orderedProducts.map((item) => {
                        return (
                          <section className='product-summary'>
                            <section>
                              <img src={item.imgURL} alt="img" />
                            </section>
                            <section>
                              <p>{item.title}</p>
                              <p><span className='aa'>qty: </span>{item.qty}</p>
                              <p><span className='aa'>Price: </span>₹{item.price}</p>
                            </section>
                          </section>
                        )
                      })) : ""
                }
                <section>
                </section>
              </section>
            </div>
          </> :
          <>
            <h2>No Orders Placed Yet...</h2>
            <Link to="/all-products" className='ordre-shop-btn'> <button onClick={() => { productDispatch({ type: "CLEAR" }) }} className="shop-btn">Shop now</button> </Link>
          </>
      }</div>
  )
}
