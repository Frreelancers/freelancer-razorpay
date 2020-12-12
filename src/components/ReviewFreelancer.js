import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { firestore } from '../services/firebase';

const ReviewFreelancer = () => {
    const history = useHistory()
    const location = useLocation()
    const [freelancer, setFreelancer] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    })
    
    useEffect(() => {
        firestore.collection('freelancers').where("email", "==", location.state.freelancer).get()
        .then((query) => {
            query.forEach((doc) => {
                setFreelancer(doc.data())
            })
        })
    }, [])

    const backDashboard = () => {
        history.push({
            pathname: '/adminDashboard',
            state: { email:  location.state.admin }
        });
    }

    return (
        <>
            <div className="container">
                <div className="card card-body bg-light mb-3" >
                    <div className="row">
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{freelancer.name}</h3>
                            <p>{freelancer.email}</p>
                            <p>{freelancer.phoneNumber}</p>
                            <a href={location.state.githubLink}>{location.state.githubLink}</a>
                        </div>
                    </div>
                    <button className="btn btn-info btn-block mt-4" onClick={backDashboard}>Back</button>
                </div>
            </div>
        </>
    )
}

export default ReviewFreelancer;