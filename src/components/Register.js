import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firestore } from '../services/firebase'

const Register = () => {
    const md5 = require('md5')
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = () => {
        firestore.collection('users').add({
            name: name,
            email: email,
            password: md5(password),
            role: ""
        })
        history.push("/login");
    }

    return (
        <>
            <div className="register">
                <div className="container" style={{marginTop: "10%"}}>
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Full Name"
                                    name="fullName"
                                    value={name}
                                    onChange={(e) => {setName(e.target.value)}}
                                />
                                
                                </div>
                                <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Email Address (Username)"
                                    name="Username"
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                                </div>
                                <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => {setPassword(e.target.value)}}

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

export default Register;