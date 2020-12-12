import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { firestore } from '../services/firebase'

const AddProject = () => {
    const [projectName, setProjectName] = useState("");
    const [amount, setAmount] = useState();
    const [projectDescription, setProjectDescription] = useState("");
    const [startDate, setStartDate]  = useState(0);
    const history = useHistory();
    const location = useLocation();

    const handleSubmit = () => {
        firestore.collection('projects').add({
            projectName: projectName,
            amount: amount,
            projectDescription: projectDescription,
            startDate: startDate,
            admin: location.state.email,
            freelancer: "",
            status: "submitted"
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
                            <h1 className="display-4 text-center">Create Task for Freelancers</h1>
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
                                <input type="submit" className="btn btn-info btn-block mt-4" onClick={handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default AddProject;