import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { firestore } from '../services/firebase'

const SubmitProject = () => {
    const [projectName, setProjectName] = useState("");
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
            pathname: '/freelancerDashboard',
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
                            <h1 className="display-4 text-center">Submit Your Work</h1>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Repository Link"
                                    name="project"
                                    value={projectName}
                                />        
                            </div>

                            <div className="form-group">
                                <label>File for demo</label>
                                <input
                                    type="file"
                                    className="form-control form-control-lg"
                                    name="project"
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

export default SubmitProject;