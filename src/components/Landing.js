import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
            <div className="projects">
                <div className="container" style={{marginTop: "10%"}}>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Easy Freelancing</h1>
                            <hr />
                            <br />
                            <div className="container-div">
                                <Link className="btn btn-lg btn-primary mr-2" to="/register">
                                    Sign Up
                                </Link>
                                &nbsp;&nbsp;&nbsp;
                                <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                                    Login
                                </Link>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;