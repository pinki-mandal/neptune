import React, { useState } from 'react'
import { useFeatureContext } from '../../contexts/featuresContext';
import "./Address.css";

export const Address = () => {

    const { setAddressModel, userDetail, setUserDetail } = useFeatureContext();
    const [uu, setuu] = useState({
        name: "",
        houseNo: "",
        city: "",
        state: "",
        code: "",
        country: "",
        mobile: ""
    });

    const [btnStatus, setBtnStatus] = useState(true);

    const inputHandler = (e) => {
        const { name, value } = e;
        setuu({ ...uu, [name]: value });

        uu.name !== 0 || uu.houseNo !== 0 || uu.city !== 0 || uu.state !== 0 || uu.code !== 0 || uu.country !== 0 || uu.mobile !== 0
            ? setBtnStatus(false)
            : setBtnStatus(true)
    };

    const addDataHandler = () => {
        setUserDetail([...userDetail, uu]);
        setAddressModel(false)
    }

    return (
        <div className='add-container'>
            <p>
                Add New Address
            </p>
            <input onChange={e => inputHandler(e.target)} type="text" name="name" value={uu.name} placeholder='Enter Name' required />
            <input onChange={e => inputHandler(e.target)} type="text" name="houseNo" value={uu.houseNo} placeholder='Enter House No, Street' />
            <input onChange={e => inputHandler(e.target)} type="text" name="city" value={uu.city} placeholder='Enter City' />
            <input onChange={e => inputHandler(e.target)} type="text" name="state" value={uu.state} placeholder='Enter State' />
            <input onChange={e => inputHandler(e.target)} type="text" name="code" value={uu.code} placeholder='Pincode' />
            <input onChange={e => inputHandler(e.target)} type="text" name="country" value={uu.country} placeholder='Country' />
            <input onChange={e => inputHandler(e.target)} type="text" name="mobile" value={uu.mobile} placeholder='Enter Mobile number' />
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
