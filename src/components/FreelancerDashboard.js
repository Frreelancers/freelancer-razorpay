import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { firestore } from '../services/firebase';

const FreelancerDashboard = () => {
    const [projects, setProjects] = useState([]);
    const location = useLocation();
    const email = location.state.email;
    const history = useHistory();

    useEffect(() => {
        firestore.collection('projects').where("status", "==", "submitted").get()
            .then((query) => {
                query.forEach((doc) => {
                    setProjects(projects => projects.concat({...doc.data(), id: doc.id}))
                })
            })
        
        firestore.collection('projects').where("freelancer", "==", email).get()
            .then((query) => {
                query.forEach((doc) => {
                    setProjects(projects => projects.concat({...doc.data(), id: doc.id}))
                })
            })
    }, [])

    const takeup = (projectName) => {
        firestore.collection('projects').where("projectName", "==", projectName).get()
        .then((query) => {
            query.forEach((doc) => {
                firestore.collection('projects').doc(doc.id).update({
                    freelancer: email,
                    status: "taken"
                })
            })
        })
        
    }

    const submission = (projectName) => {
        history.push({
            pathname: '/submitProject',
            state: {
                email: email,
                projectName: projectName
            }
        })
    }

    return (
        <>
            <div className="container">
                <br />
                <br />
                {projects.map((project, index) => (
                    <>
                        <div className="card card-body bg-light mb-3" key={index}>
                            <div className="row">
                                <div className="col-2">
                                </div>

                                <div className="col-lg-6 col-md-4 col-8">
                                    <h3>{project.projectName}</h3>
                                    <p>{project.projectDescription}</p>
                                </div>
                                
                            
                                <div className="col-md-4 d-none d-lg-block">
                                    <ul className="list-group">
                                        <div>
                                            <li className="list-group-item update" onClick={() => {takeup(project.projectName)}}>
                                                <i className="fa fa-edit pr-1"> Take-Up Work</i>
                                            </li>
                                        </div>
                                        <li
                                        className="list-group-item delete"  onClick={() => {submission(project.projectName)}}            
                                        >
                                            <i className="fa fa-minus-circle pr-1"> Submit</i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default FreelancerDashboard;