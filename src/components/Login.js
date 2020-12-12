import React, {useState} from 'react';
import { firestore } from '../services/firebase';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const md5 = require('md5');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();
    
    const handleSubmit = () => {
        firestore.collection('users').where("email", "==", email).get()
            .then((query) => {
                query.forEach((doc) => {
                    if(doc.data().password === md5(password)){
                        history.push({
                            pathname: '/dashboard',
                            state: { email: email }
                        })
                    } else {
                        setError(true);
                    }
                })
            })
    }

    return (
        <>
            <div className="login">
                <div className="container" style={{marginTop: "10%"}}>
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Email Address (Username)"
                                    name="username"
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
                            {error && <div className="invalid-feedback"></div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;