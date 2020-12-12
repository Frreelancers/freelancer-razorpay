import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { firestore } from '../services/firebase';

const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        firestore.collection('projects').where("admin", "==", location.state.email).get()
            .then((query) => {
                query.forEach((doc) => {
                    setProjects(projects => projects.concat(doc.data()))
                })
            })
        
    }, [])

    const updateProject = (project) => {
        console.log(project)
    }

    return (
        <>
            <div className="container">
                <div className="btn btn-lg btn-info" onClick={() => {
                    history.push({
                        pathname: '/addProject',
                        state: { email:  location.state.email }
                    })
                }}>
                    Create Project
                </div>
                <br />
                <br />
                {projects.map((project, index) => (
                    <>
                        <div className="card card-body bg-light mb-3" key={index}>
                            <div className="row">
                                <div className="col-2">
                                    <button className="btn btn-small btn-danger" disabled={projects.status !== "submitted"}>
                                            Review
                                    </button>
                                    <button className="btn btn-small btn-primary" disabled={projects.status !== "submitted"} style={{marginTop: "10px"}}>
                                            Payout
                                    </button>
                                    <button className="btn btn-small btn-primary" disabled={projects.status !== "submitted"} style={{marginTop: "10px"}}>
                                            Contact
                                    </button>
                                </div>
                                <div className="col-lg-6 col-md-4 col-8">
                                    <h3>{project.projectName}</h3>
                                    <p>{project.projectDescription}</p>
                                    <br>
                                    </br>
                                    {project.freelancer && <h4>Freelancer: {project.freelancer}</h4>}
                                    {project.freelancer || <h4>Not Taken</h4>}
                                </div>
                                
                            
                                <div className="col-md-4 d-none d-lg-block">
                                    <ul className="list-group">
                                        <div>
                                            <li className="list-group-item update" onClick={() => {updateProject(project)}}>
                                                <i className="fa fa-edit pr-1"> Update Project Info</i>
                                            </li>
                                        </div>
                                        <li
                                        className="list-group-item delete"                
                                        >
                                            <i className="fa fa-minus-circle pr-1"> Delete Project</i>
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

export default AdminDashboard;