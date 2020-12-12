import React from 'react';

const Navbar =  () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <div className="navbar-brand">
                        Easy Freelancing
                    </div>

                    <div className="btn btn-lg btn-danger">
                            Logout
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar;