import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { firestore } from '../services/firebase'

const SubmitProject = () => {
    const [githubLink, setGithubLink] = useState("");
    const history = useHistory();
    const location = useLocation();

    const handleSubmit = () => {
        const project = location.state.projectName;
        const email = location.state.email;

        firestore.collection('projects').where("projectName", "==", project).get()
        .then((query) => {
            query.forEach((doc) => {
                firestore.collection('projects').doc(doc.id).update({
                    githubLink: githubLink,
                    status: "completed"
                })
            })
        })

        history.push({
            pathname: '/freelancerDashboard',
            state: { email:  email }
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
                                    placeholder="Github Repository Link"
                                    name="project"
                                    value={githubLink}
                                    onChange={(e) => {setGithubLink(e.target.value)}}
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