import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import { firestore } from '../services/firebase';

const CreateFreelancer = () => {
    const history = useHistory()
    const location = useLocation()
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("")
    const [upiId, setUpiId] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [cardName, setCardName] = useState("")

    const handleSubmit = () => {
        firestore.collection('freelancers').add({
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            upiId: upiId,
            cardNumber: cardNumber,
            cardName: cardName
        })

        history.push({
            pathname: '/freelancerDashboard',
            state: { email:  location.state.email }
        });
    }


    return (
        <>
            <div className="register">
                <div className="container" style={{marginTop: "10%"}}>
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Add Details</h1>
                            <p className="lead text-center">Add bank and required details</p>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => {setName(e.target.value)}}
                                />
                                
                                </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Phone Number"
                                    name="phone_number"
                                    value={phoneNumber}
                                    onChange={(e) => {setPhoneNumber(e.target.value)}}
                                />
                                
                                </div>
                                <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                                </div>
                                <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="UPI Id"
                                    name="upi_id"
                                    value={upiId}
                                    onChange={(e) => {setUpiId(e.target.value)}}
                                />
                                </div>
                                <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Card Number"
                                    name="card number"
                                    value={cardNumber}
                                    onChange={(e) => {setCardNumber(e.target.value)}}
                                />
                                </div>
                                <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Name on Card"
                                    name="card name"
                                    value={cardName}
                                    onChange={(e) => {setCardName(e.target.value)}}
                                />
                                </div>
                                
                                <input type="submit" className="btn btn-info btn-block mt-4" onClick={handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default CreateFreelancer;