import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";

const CreateFreelancer = () => {
    const history = useHistory()
    const location = useLocation()

    const handleSubmit = () => {
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
                                    placeholder="Phone Number"
                                    name="phone_number"
                                />
                                
                                </div>
                                <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Bank "
                                    name="Username"
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