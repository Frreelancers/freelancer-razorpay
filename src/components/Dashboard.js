import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import { firestore } from '../services/firebase';


const Dashboard = () => {
    const location = useLocation();
    const history = useHistory();
    const email = location.state.email
    
    const makeAdmin = () => {
        firestore.collection('users').where("email", "==", location.state.email).get()
        .then((query) => {
            query.forEach((doc) => {
                firestore.collection('users').doc(doc.id).update({
                    role: "admin"
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
        
        firestore.collection('projects').where("admin", "==", location.state.email).get()
        .then((query) => {
            if(query.empty) {
                history.push({
                    pathname: '/addProject',
                    state: { email:  email }
                });
            } else {
                history.push({
                    pathname: '/adminDashboard',
                    state: { email:  email }
                });
            }
        })
    }

    const makeFreelancer = () => {
        firestore.collection('users').where("email", "==", location.state.email).get()
        .then((query) => {
            query.forEach((doc) => {
                firestore.collection('users').doc(doc.id).update({
                    role: "freelancer"
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })

        history.push({
            pathname: '/addFreelancer',
            state: { email:  email }
        });
        
    }

    return (
        <>
            <div className="projects">
            <div className="container" style={{marginTop: "10%"}}>
                <div className="row">
                    <div className="col-md-12">
                    <h1 className="display-4 text-center">What you wanna do</h1>
                    <br />
                    <br />
                    <hr />
                    <div style={{display:"flex", justifyContent: "center"}}>
                        <div className="btn btn-lg btn-info" onClick={makeAdmin}>
                            Create a Project
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div className="btn btn-lg btn-success" onClick={makeFreelancer}>
                            Earn Money
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;