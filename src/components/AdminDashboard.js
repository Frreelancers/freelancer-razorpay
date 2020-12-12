import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { firestore } from '../services/firebase';

const AdminDashboard = () => {
    let axios = require('axios')
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false)
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
        history.push({
            pathname: '/updateProject',
            state: { email:  location.state.email,project:project}
        })
    }

    const deleteProject = (project, index) => {
        setProjects(projects => projects.splice(index, 1))
        firestore.collection("projects").where("projectName", "==",project.projectName).get()
        .then((query) => {
            query.forEach((doc) => {
                firestore.collection('projects').doc(doc.id).delete().then(function() {
                    setLoading(true)
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })

        history.push({
            pathname: '/adminDashboard',
            state: { email:  location.state.email}
        })
    }

    const reviewProject = (freelancer, githubLink) => {
        history.push({
            pathname: '/reviewFreelancer',
            state: {
                admin: location.state.email,
                freelancer: freelancer,
                githubLink: githubLink
             }
        })
    }

    const payout = (project) => {
        firestore.collection('freelancers').where("email", "==", project.freelancer).get()
        .then((query) => {
            query.forEach((doc) => {
                const freelancer = doc.data()
                axios.post("https://freelancer-razorpay-api.herokuapp.com/razorpay", {
                    project: project,
                    freelancer: freelancer
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            })
        })


    }

    const sendMail = (freelancerEmail) => {
        window.location.href = `mailto:${freelancerEmail}`
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
                                    <button className="btn btn-small btn-danger" disabled={project.status === "submitted"} onClick={() => {reviewProject(project.freelancer, project.githubLink)}}>
                                            Review
                                    </button>
                                    <button className="btn btn-small btn-primary" disabled={project.status === "submitted"} style={{marginTop: "10px"}} onClick={() => {payout(project)}}>
                                            Payout
                                    </button>
                                    <button className="btn btn-small btn-primary" disabled={project.status === "submitted"} style={{marginTop: "10px"}} onClick={() => {sendMail(project.freelancer)}}>
                                            Contact
                                    </button>
                                </div>
                                <div className="col-lg-6 col-md-4 col-8">
                                    <h3>{project.projectName}</h3>
                                    <p>{project.projectDescription}</p>
                                    <br>
                                    </br>
                                    {project.freelancer && <h4>Freelancer: {project.freelancer}</h4>}
                                    
                                </div>
                                
                            
                                <div className="col-md-4 d-none d-lg-block">
                                    <ul className="list-group">
                                        <div>
                                            <li className="list-group-item update" onClick={() => {updateProject(project)}}>
                                                <i className="fa fa-edit pr-1"> Update Project Info</i>
                                            </li>
                                        </div>
                                        <li
                                        className="list-group-item delete" onClick={() => {deleteProject(project, index)}}              
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