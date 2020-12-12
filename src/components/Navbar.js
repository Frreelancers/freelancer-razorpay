import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'

const Navbar =  () => {
    const history = useHistory()
    const location = useLocation()

    const logout = () => {
        history.push({
            pathname: "/"
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <div className="navbar-brand">
                        Easy Freelancing
                    </div>

                    {location.pathname !== "/" && location.pathname !== "/register" && location.pathname !== "/login" &&
                        <div className="btn btn-lg btn-danger" onClick={logout}>
                            Logout
                        </div>
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar;