import React, { useState } from 'react'
import { useFeatureContext } from '../../contexts/featuresContext';
import "./Address.css";

export const Address = () => {

    const { setAddressModel, userDetail, setUserDetail } = useFeatureContext();
    const [userData, setUserData] = useState({
        name: "",
        houseNo: "",
        city: "",
        state: "",
        code: "",
        mobile: ""
    });
    const [btnStatus, setBtnStatus] = useState(true);

    const inputHandler = (e) => {
        const { name, value } = e;
        setUserData({ ...userData, [name]: value });

        userData.name !== 0 && userData.houseNo !== 0 && userData.city !== 0 && userData.state !== 0 && userData.code !== 0 && userData.mobile !== 0
            ? setBtnStatus(false)
            : setBtnStatus(true)
    };

    const addDataHandler = () => {
        setUserDetail([...userDetail, userData]);
        setAddressModel(false)
    }

    return (
        <div className='add-container'>
            <p>
                Add New Address
            </p>
            <input onChange={e => inputHandler(e.target)} type="text" name="name" value={userData.name} placeholder='Enter Name' required />
            <input onChange={e => inputHandler(e.target)} type="text" name="houseNo" value={userData.houseNo} placeholder='Enter House No, Street' required />
            <input onChange={e => inputHandler(e.target)} type="text" name="city" value={userData.city} placeholder='Enter City' required />
            <input onChange={e => inputHandler(e.target)} type="text" name="state" value={userData.state} placeholder='Enter State' required />
            <input onChange={e => inputHandler(e.target)} type="text" name="code" value={userData.code} placeholder='Pincode' required />
            <input onChange={e => inputHandler(e.target)} type="text" name="mobile" value={userData.mobile} placeholder='Enter Mobile number' required />
            <section className='address-btns'>
                <button onClick={addDataHandler} disabled={btnStatus}>
                    Add
                </button>
                <button onClick={() => setAddressModel(false)}>
                    Cancel
                </button>
            </section>
        </div>
    )
}
