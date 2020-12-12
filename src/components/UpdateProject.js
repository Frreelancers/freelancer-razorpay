import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { firestore } from '../services/firebase'

const UpdateProject = () => {
    const location = useLocation();
    console.log(location.state);
    const [projectName, setProjectName] = useState(location.state.project.projectName);
    const [amount, setAmount] = useState(location.state.project.amount);
    const [projectDescription, setProjectDescription] = useState(location.state.project.projectDescription);
    const [startDate, setStartDate]  = useState(location.state.project.startDate);
    const history = useHistory();
    

    const handleSubmit = () => {
        firestore.collection('projects').where("projectName", "==",projectName).get()
        .then((query) => {
            query.forEach((doc) => {
                firestore.collection('projects').doc(doc.id).update({
                    projectName: projectName,
                    amount:amount,
                    projectDescription:projectDescription,
                    startDate: startDate
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })

        history.push({
            pathname: '/adminDashboard',
            state: {
                email: location.state.email
            }
        })
    }

    return (
        <>
            <div className="register">
                <div className="container" style={{marginTop: "10%"}}>
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Update Task for Freelancers</h1>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Project Name"
                                    name="project"
                                    value={projectName}
                                    onChange={(e) => {setProjectName(e.target.value)}}
                                />
                                
                                </div>
                                <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Amount in Rs."
                                    name="amount"
                                    value={amount}
                                    onChange={(e) => {setAmount(e.target.value)}}
                                />
                                </div> 
                                <div className="form-group">
                                <textarea
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Project Description"
                                    name="descrption"
                                    value={projectDescription}
                                    onChange={(e) => {setProjectDescription(e.target.value)}}

                                />
                               </div>
                                <h6>Upload Date</h6>
                                <div className="form-group">
                                    <input
                                    type="date"
                                    className="form-control form-control-lg"
                                    name="start_date"
                                    value={startDate}
                                    onChange={(e) => {setStartDate(e.target.value)}}
                                    />
                                </div>
                                <input type="submit" value="Update" className="btn btn-info btn-block mt-4" onClick={handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default UpdateProject;